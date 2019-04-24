const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Firestore = require('@google-cloud/firestore');
const express = require('express');
const path = require('path');
const http = require('http');
const nodemailer = require('nodemailer');
const uuidv1 = require('uuid/v1');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));
const firestore = new Firestore({
  projectId: 'swissid-c228f',
  keyFilename: './swissid-c228f-firebase-adminsdk-gnl8m-7c9c7b994f.json'
});

app.use("/api/user", (req, res) => {
  const document = firestore.doc(`verify/${uuidv1()}`);
  document.set({
    id: "123123-123123-123123"
  }).then(() => {
    res.status(200).send("successfully saved");
  });
});

app.post("/api/send", (req, res) => {
  const id = uuidv1();
  verify_code = id;
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
            console.log(info.messageId);
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
        // console.log(doc.data().id, verifyCode);
        doc.data().id.localeCompare(verifyCode) ? (
          res.status(200).send({ vst: "verified" })
        ): (
          res.status(200).send({ vst: "not_verified" })
        )
      } else {
        res.status(404).send({ vst: "not_verified" });
      }
  })
});

app.post("/api/createaccount", (req, res) => {
  const {
      abc_account,
      bic,
      currency,
      funding_account,
      iban_funding_account,
      iban,
      product_cost,
      email,
      name,
  } = req.body;
  created_at = new Date();
  console.log(abc_account);
  firestore.collection("users").doc(email).set({
    abc_account,
    bic,
    currency,
    funding_account,
    iban_funding_account,
    iban,
    product_cost,
    email,
    name,
    created_at,
    activities: [],
    transout: [],
    transin: [],
    balance: 0,
  }).then(() => {
    res.status(200).send("success");
  })
});

app.use("**", (req, res) => {
  res.sendFile('index.html', {root: '.'});
});
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
