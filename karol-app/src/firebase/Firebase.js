import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
    
    {
        apiKey: "AIzaSyD8XJFg7KaNBja6-LuL1ack9BaBHRpz07Q",
  authDomain: "wolfgaming.firebaseapp.com",
  projectId: "wolfgaming",
  storageBucket: "wolfgaming.appspot.com",
  messagingSenderId: "467140634736",
  appId: "1:467140634736:web:5b8646e422fbd74acf6cb5",
  measurementId: "G-9V8VDM0V4P"
      }
);

export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}
