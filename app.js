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

const database = admin.database();
const usersRef = database.ref("/users");

app.get("/", (req, res) => {
  res.send("index");
});

app.post("/save", (req, res) => {
  const user_id = usersRef.push().key;
  usersRef.child(user_id).set({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age,
  });
});

app.listen(port, () => {
  console.log("App is listening to port");
});
