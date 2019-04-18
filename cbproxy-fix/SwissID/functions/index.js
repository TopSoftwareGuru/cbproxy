const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

// const port = 8080;
// const server = http.Server(app);

// server.listen(port, () => {
//   console.log(`server listening-->${port}`);
// });

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "../public")));

// app.get('/home', (req, res) => {
//   res.send("Hello Firebase backend");
// });

app.use("**", (req, res) => {
  res.sendFile('index.html', {root: '.'});
});


// app.use((req, res, next) => {
//   next(createError(404))
// });

// app.use((err, req, res) => {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   res.status(err.status || 500);
//   res.json({});
// });

// // Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
