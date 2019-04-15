import http from "http";
import createError from "http-errors";
import express from "express";
import path from "path";

var app = express();

const port = 8080;
const server = http.Server(app);

server.listen(port, () => {
  console.log(`server listening-->${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", (req, res) => {
  res.status(200).send();
});
console.log(__dirname);
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.json({});
});

export default app;