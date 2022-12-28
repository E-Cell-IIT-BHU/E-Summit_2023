// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sdk = require('api')(
  'https://townscript-api.readme.io/openapi/630541de9807941f67a9343a'
);
export default function handler(req, res) {
  sdk
    .whatDoYouNeedToAccessOurApi(
      {
        emailId: process.env.EMAIL_ID,
        password: process.env.PASSWORD,
      },
      { accept: 'application/json' }
    )
    .then(({ data }) => {
      res.status(200).json(data);
    })
    .catch((err) => console.error(err));
}
