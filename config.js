import* as firebase from 'firebase';

const settings = (timestampInSnapshot = true);

var firebaseConfig = {
  apiKey: "AIzaSyDf82108j6bSXgmVqARsleh85bS3K-3-Is",
  authDomain: "portfolio-f247b.firebaseapp.com",
  databaseURL: "https://portfolio-f247b.firebaseio.com",
  projectId: "portfolio-f247b",
  storageBucket: "portfolio-f247b.appspot.com",
  messagingSenderId: "80852219975",
  appId: "1:80852219975:web:e7b09b9082372fcda5d962",
  measurementId: "G-Q1WZDVJLDW"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);

export default firebase;