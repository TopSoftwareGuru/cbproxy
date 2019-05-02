const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Firestore = require('@google-cloud/firestore');
const express = require('express');
const path = require('path');
const http = require('http');
const https = require('https');
const requestIp = require("request-ip");
const nodemailer = require('nodemailer');
const uuidv1 = require('uuid/v1');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors({ origin: true }));
const firestore = new Firestore({
  projectId: 'swissid-c228f',
  keyFilename: './swissid-c228f-firebase-adminsdk-gnl8m-7c9c7b994f.json'
});

app.use("/api/accesstoken", (req, res) => {
  const { code } = req.body;
  console.log(code);
  axios({
    url: "https://login.int.swissid.ch/idp/oauth2/access_token",
    method: "post",
    data: {
      Authorization: `Basic ${new Buffer('2d19f-1580c-8f5a2-954c8:cHG6iIbJGt8pZ8m9r3xTxGYRDGl9fWLk').toString("base64")}`,
      responseType: "code",
      scope: "openid%20profile%20email",
      grantType: "authorization_code",
      code,
      redirectUri: "https%3A%2F%2Fswissid-c228f.firebaseapp.com%2F",
    },
    headers: {
      "Content-Type": "application/json",
    }
  }).then(result => {
    res.status(200).send(result);
  }).catch(err => {
    console.log(err);
    res.status(404).send(err);
  })
  // // res.status(200).send(code);

  // const options = {
  //   host: 'login.int.swissid.ch',
  //   path: '/idp/oauth2/access_token',
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // }

  // const rq = https.request(options, (result) => {
  //   console.log("status code", result.statusCode);
  //   result.on('data', (d) => {
  //     console.log(d);
  //     res.send(d);
  //   })
  // })

  // rq.on('error', (error) => {
  //   console.log("error info", error);
  //   res.status(404).send(error);
  // });

  // rq.write(JSON.stringify({
  //   client_id: '2d19f-1580c-8f5a2-954c8',
  //   client_secret: 'cHG6iIbJGt8pZ8m9r3xTxGYRDGl9fWLk',
  //   code,
  // }));

  // rq.end();
  
});

app.post("/api/login", (req, res) => {
  const ip = requestIp.getClientIp(req);
  const { email } = req.body;
  const event = "LOGON";

  const d = new Date();
  const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  const nd = new Date(utc + (3600000 * '+2'));
  const eventTime = nd.toLocaleString();

  const db = firestore.collection('users').doc(email);
  db.get()
    .then((doc) => {
      let { activities } = doc.data();
      activities.push({ event, eventTime, ip });
      db.update({ activities })
        .then(() => {
          res.status(200).send("success");
        })
        .catch(err => {
          res.status(404).send(err);
        });
  });
});

app.post("/api/send", (req, res) => {
  const id = Math.floor(100000 + Math.random() * 900000).toString();
  const {
    email
  } = req.body;
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'janepress940214@gmail.com',
      pass: '##lni19940214'
    }
  });
  const mailOptions = {
    to: email,
    subject: 'Account Verification',
    text: "",
    html: `Your verification code is <b>${id}</b>`,
  };

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(404).send(error);
    } else {
        const document = firestore.doc(`verify/${info.messageId}`);
          document.set({
              id,
          }).then(() => {
            const messageId = { messageId: info.messageId };
            res.status(200).send(messageId);
          })
      }
    });
  });

app.post("/api/verify", (req, res) => {
  const {
    verifyCode,
    messageId,
  } = req.body;

  firestore.collection('verify').doc(`${messageId}`).get()
    .then(doc => {
      if (doc.exists) {
        console.log(verifyCode, typeof(verifyCode));
        // console.log(doc.data().id, verifyCode);
        doc.data().id === verifyCode ? (
          res.status(200).send({ vst: "verified" })
        ): (
          res.status(200).send({ vst: "not_verified" })
        )
      } else {
        res.status(404).send({ vst: "not_verified" });
      }
  })
});

// app.post("/api/createaccount", (req, res) => {
//   const {
//       abc_account,
//       bic,
//       currency,
//       funding_account,
//       iban_funding_account,
//       iban,
//       product_cost,
//       email,
//       name,
//   } = req.body;
//   created_at = new Date();
//   firestore.collection("users").doc(email).set({
//     abc_account,
//     bic,
//     currency,
//     funding_account,
//     iban_funding_account,
//     iban,
//     product_cost,
//     email,
//     name,
//     created_at,
//     activities: [],
//     transout: [],
//     transin: [],
//     balance: 0,
//   }).then(() => {
//     res.status(200).send("success");
//   })
// });

app.use("**", (req, res) => {
  res.sendFile('index.html', {root: '.'});
});
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
