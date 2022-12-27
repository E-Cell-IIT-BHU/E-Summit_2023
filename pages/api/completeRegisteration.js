// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

const sdk = require('api')(
  'https://townscript-api.readme.io/openapi/630541de9807941f67a9343a'
);

import { db } from '../../utility/firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function handler(req, res) {
  const user = req.body;
  if (!user?.participant_id) {
    return res.status(404).json({ message: 'User not found!' });
  }
  const participantId = user.participant_id;
  var token;
  var message = 'Successfull!';
  axios
    .get(`${process.env.URL}/api/getToken`)
    .then(function (response) {
      token = response.data.data;
      const sdk = require('api')(
        'https://townscript-api.readme.io/openapi/630541de9807941f67a9343a'
      );
      sdk
        .gettingAttendeesData({
          eventCode: 'esummit-2023-iit-bhu-343224',
          authorization: token,
        })
        .then(({ data }) => {
          const participants = Object.entries(JSON.parse(data.data));
          const participant = participants.find(
            (participant) => participant[1].customQuestion1 == participantId
          );
          // console.log(participant);
          if (!participant) {
            return res
              .status(200)
              .json({ flag: 0, message: 'participant has not paid yet' });
          }
          if (participant && !user.isRegistered) {
            setDoc(doc(db, 'participants', user.id), {
              ...user,
              isRegistered: true,
            });
            return res
              .status(200)
              .json({ flag: 1, message: 'participant successfully added' });
          }
          res.status(200).json({ flag: 0, message: message });
        })
        .catch((err) => console.error(err));
    })
    .catch(function (error) {
      console.log(error);
    });
}
