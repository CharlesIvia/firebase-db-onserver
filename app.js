const express = require("express");
const app = express();
const port = 3000;
var admin = require("firebase-admin");

var serviceAccount = require("./Key/fir-db-onserver-firebase-adminsdk-phdgz-dc27226277.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-db-onserver.firebaseio.com",
});

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://fir-db-onserver.firebaseio.com",
});

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("index");
});

app.listen(port, () => {
  console.log("App is listening to port");
});
