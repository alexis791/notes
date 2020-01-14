import firebase from 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyDSopzacHjfLr7VFhiceELkFAPVYVGVUWw",
    authDomain: "notes-5beb8.firebaseapp.com",
    databaseURL: "https://notes-5beb8.firebaseio.com",
    projectId: "notes-5beb8",
    storageBucket: "notes-5beb8.appspot.com",
    messagingSenderId: "556848613702",
    appId: "1:556848613702:web:e784be1faadc371e777d47",
    measurementId: "G-LR2D3L27TC"
  };

  firebase.initializeApp(firebaseConfig)

  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;