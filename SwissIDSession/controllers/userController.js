import { decode, sign } from 'jsonwebtoken';
import Firestore from '@google-cloud/firestore';

const firestore = new Firestore({
  projectId: "swissid-c228f",
  keyFilename: "../SwissIDSession/swissid-c228f-firebase-adminsdk-gnl8m-7c9c7b994f.json",
});
export const login = (req, res) => {
  const {
    email,
    familyName,
    givenName,
    name
  } = req.body;
  const token = sign({
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    data: email,
  }, 'secret');
  const userInfo = {
    email,
    familyName,
    givenName,
    name,
  }
  const document = firestore.collection("users");
  document.get().then((querySnapShot) => {
    querySnapShot.forEach((doc) => {
      console.log(doc, "==>");
      res.status(200).send("OK");
    })
  })
};

export const signup = (req, res) => {
  const {
    email,
    familyName,
    givenName,
    name,
    alias,
    currency,
    funding_account,
    iban,
    iban_funding_account,
    product_cost,
  } = req.body;

  const document = firestore.collection("users");
  document.add({
    email,
    familyName,
    givenName,
    name,
    alias,
    currency,
    funding_account,
    iban,
    iban_funding_account,
    product_cost,
    time_created: new Date(),
  });
  const token = sign({
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    data: email,
  }, 'secret');
  res.status(200).send(token);
}