import { decode, sign } from 'jsonwebtoken';
import Firestore from '@google-cloud/firestore';
import bcrypt from 'bcrypt';
import user from '../models/user';

// const firestore = new Firestore({
//   projectId: "swissid-c228f",
//   keyFilename: "../SwissIDSession/swissid-c228f-firebase-adminsdk-gnl8m-7c9c7b994f.json",
// });
export const login = (req, res) => {
  const { email } = req.body;
  const token = sign({
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    data: email,
  }, 'secret');
  res.status(200).send(token);

};

export const signup = (req, res) => {
  const { email, name } = req.body;
  const userInfo = {
    name,
    email,
    alias: 1234,
    bic: "xyzch89",
    currency: "CHF",
    funding_collection: "Credit Issues",
    iban: "CH33 0078 1015 5036 7150 3",
    iban_funding_account: "CH33 0078 1015 5036 7150 3",
    product_cost: "XYZ basic account | CHF 10 per month + additional fee per CHF stored",
  }
  const token = sign({
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    data: email,
  }, 'secret');

  user.findAll({
    where: {
      email
    },
  })
    .then(read => {
      if (!read.length) {
        user.create({
          userInfo
        }).then(() => {
          res.status(200).send(token);
        })
      } else {
        res.status(200).send("signupFailed");
      }
    })
    .catch((err) => {
      res.status(404).send(err);
    })
}