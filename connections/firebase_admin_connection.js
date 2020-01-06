var admin = require("firebase-admin");

var serviceAccount = require("../project-d61b4-firebase-adminsdk-fvrtj-d618b8d392.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://project-d61b4.firebaseio.com"
});
var db = admin.database();

module.exports = db;