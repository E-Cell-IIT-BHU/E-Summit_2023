import React, { Component, useEffect } from "react";
import style from "./Dashboard.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { UserAuth } from "../../context/AuthContext";

const Loader = () => {
  return (
    <lottie-player
      src="https://assets4.lottiefiles.com/packages/lf20_zy7c7hn2.json"
      background="transparent"
      speed="1"
      style={{ width: "300px", height: "300px" }}
      loop
      autoplay
    ></lottie-player>
  );
};
const Dashboard = () => {
  const router = useRouter();
  const { handleGoogleSignIn, logout, user, isLoggedIn, checkRegisteration } = UserAuth();
  // console.log(user)
  checkRegisteration();
  return (
    <>
      {!user?.name ? (
        <div className="inline-flex w-full sm:mx-2">
          <button
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900"
            onClick={() => handleGoogleSignIn()}
            style={{ margin: "100px auto" }}
          >
            Login
          </button>
        </div>
      ) : (
        <div className={style.container1}>
          {/* {redirect()} */}
          <div className={`${style.row}  ${style.row1} `}>
            <div className={style.col} style={{ flexBasis: "100%" }}>
              <div className={style.imgBox}>
                <Image
                  className={style.imgBox}
                  src={user.avatar}
                  width="300"
                  height="300"
                  alt={user.name[0].toUpperCase()}
                />
              </div>
              <div>
                <h1 className={style.userName}>{user.name}</h1>
                <p style={{ fontSize: "1.5rem" }}>{user.email}</p>
              </div>

              <div className={style.row4}>
                <h1 className={style.data}>PARTICIPANT ID:</h1>
                <h1 className={style.data} style={{ color: "#c084fc" }}>
                  {user.participant_id}
                </h1>
              </div>
            </div>
          </div>
          {user.isRegistered ? <div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <h1 className={style.data} style={{ color: "#38E54D" }}>You are registered!</h1>
              <h1 className={style.data} style={{ color: "#38E54D" }}>Please check your mail for the ticket</h1>
            </div>
          </div> : <iframe src={`https://www.townscript.com/v2/widget/esummit-2023-iit-bhu-343224/booking?td-ticket-name-1=5&td-ticket-name-2=6&name=${user.name}&emailid=${user.email}&cq1=${user.participant_id}`} frameBorder="0" height="600px" width="100%"></iframe>}
        </div>
      )}
      <script
        async
        src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
      />
    </>
  );
};

export default Dashboard;
