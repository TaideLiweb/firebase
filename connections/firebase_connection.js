var firebase = require('firebase');
var firebaseConfig = {
    apiKey: "AIzaSyA6q-8HfQlsXtpgOUQyEkODmoZ-Y1D_Qtc",
    authDomain: "project-d61b4.firebaseapp.com",
    databaseURL: "https://project-d61b4.firebaseio.com",
    projectId: "project-d61b4",
    storageBucket: "project-d61b4.appspot.com",
    messagingSenderId: "196564649570",
    appId: "1:196564649570:web:fb290ff76e8546c001733b",
    measurementId: "G-9XV8WTKTCK"
  };
  firebase.initializeApp(firebaseConfig);
  module.exports = firebase;