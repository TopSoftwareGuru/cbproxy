const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Firestore = require('@google-cloud/firestore');
const express = require('express');
const path = require('path');
const http = require('http');
const https = require('https');
const requestIp = require("request-ip");
const nodemailer = require('nodemailer');
const cors = require('cors');
const axios = require('axios');
const CircularJSON = require('circular-json');

const app = express();
app.use(cors({ origin: true }));
const firestore = new Firestore({
  projectId: 'swissid-c228f',
  keyFilename: './swissid-c228f-firebase-adminsdk-gnl8m-7c9c7b994f.json'
});

app.get("/api/userinfo", (req, res) => {
  axios.request({
    method: "get",
    url: "https://login.int.swissid.ch/idp/oauth2/userinfo",
    headers: {
      "Content-Type": "application.json",
      "Authorization": "Bearer 506WZzfKa6yOMhekjjtRwq7zsbg"
    }
  }).then(result => {
    console.log(CircularJSON(result));
    res.status(200).send(CircularJSON(result));
  }).catch(err => {
    console.log(err);
    res.status(404).send(err);
  });
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
    host: 'smtp.gmail.com',
    post: 465,
    auth: {
      user: 'janepress940214@gmail.com',
      pass: '##lni19940214'
    }
  });
  const mailOptions = {
    from: 'janepress940214@gmail.com',
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

app.use("**", (req, res) => {
  res.sendFile('index.html', {root: '.'});
});
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
