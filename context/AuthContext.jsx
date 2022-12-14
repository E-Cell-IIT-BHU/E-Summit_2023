import { useContext, createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth, db } from "../utility/firebase";
import { useRouter } from "next/router";
import { doc, getDoc, setDoc } from "firebase/firestore";
import axios from "axios";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(user?.displayName);
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithRedirect(auth, provider);
      setIsLoggedIn(true);
    } catch (error) {
      setIsLoggedIn(false);
      console.log(error);
    }
  };
  const logout = async () => {
    console.log("LOGGING OUT");
    await router.replace("/");
    await signOut(auth);
    setIsLoggedIn(false);
    setUser({});
  };

  const userRegistration = async (googleUser) => {
    if (user?.name) return;
    if (googleUser?.displayName) {
      setIsLoggingIn(true);
      const participantRef = doc(db, "participants", googleUser.uid);
      const participantSnap = await getDoc(participantRef);
      if (participantSnap.exists()) {
        console.log("Document data:", participantSnap.data());
        setUser(participantSnap.data(), () => setIsLoggingIn(false));
      } else {
        const newUser = {
          id: googleUser.uid,
          participant_id:
            googleUser.uid.slice(0, 8),
          name: googleUser.displayName,
          email: googleUser.email,
          avatar: googleUser.photoURL,
          time: Date.now(),
          isRegistered: false
        };
        await setDoc(doc(db, "participants", newUser.id), newUser);
        setUser(newUser, () => setIsLoggingIn(false));
        console.log("No such document!");
      }
    }
    setIsLoggingIn(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      userRegistration(currentUser);
    });
    if (user?.name) return;
    return () => {
      unsubscribe();
    };
  }, []);
  // const
  const checkRegisteration = async () => {
    if (user?.name && !user.isRegistered) {
      axios({
        method: 'post',
        url: "api/completeRegisteration",
        data: user
      }).then(function (res) {
        // console.log(res)
        if (res.data.flag == 1) { setUser({ ...user, isRegistered: true, ticketDetails: res.data.ticketDetails }) };
      }).catch(function (err) { console.log(err) })
    }
  }

  return (
    <AuthContext.Provider
      value={{ handleGoogleSignIn, user, logout, isLoggedIn, checkRegisteration, isLoggingIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
