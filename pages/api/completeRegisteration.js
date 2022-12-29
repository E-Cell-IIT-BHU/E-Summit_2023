import axios from 'axios';
import { db } from '../../utility/firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function handler(req, res) {
  const user = req.body;
  if (!user?.participant_id) {
    return res.status(404).json({ message: 'User not found!' });
  }
  const participantId = user.participant_id;
  axios
    .get(`${process.env.URL}/api/getToken`)
    .then(function (response) {
      const token = response.data.data;
      const sdk = require('api')(
        'https://townscript-api.readme.io/openapi/630541de9807941f67a9343a'
      );
      sdk
        .gettingAttendeesData({
          eventCode: 'esummit-2023-iit-bhu-343224',
          authorization: token,
        })
        .then(({ data }) => {
          const participants = JSON.parse(data.data);
          // console.log('Participants: ', participants);
          var participant;
          if (Array.isArray(participants)) {
            participant = participants.find(
              (participant) => participant.customQuestion1 == participantId
            );
          } else if (
            participants?.customQuestion1 &&
            participants.customQuestion1 == participantId
          ) {
            participant = participants;
          }
          // console.log('Participant: ', participant);
          if (!participant) {
            return res
              .status(200)
              .json({ flag: 0, message: 'participant has not paid yet' });
          }
          if (participant && !user.isRegistered) {
            setDoc(doc(db, 'participants', user.id), {
              ...user,
              isRegistered: true,
              ticketDetails: participant,
            });
            return res.status(200).json({
              flag: 1,
              ticketDetails: participant,
              message: 'participant successfully added',
            });
          }
          res
            .status(200)
            .json({ flag: 0, message: 'participant is already registered' });
        })
        .catch((err) => console.error(err));
    })
    .catch(function (error) {
      console.log(error);
    });
}
