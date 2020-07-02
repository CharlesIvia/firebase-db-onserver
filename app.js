var admin = require("firebase-admin");

var serviceAccount = require("./Key/fir-db-onserver-firebase-adminsdk-phdgz-dc27226277.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-db-onserver.firebaseio.com",
});
