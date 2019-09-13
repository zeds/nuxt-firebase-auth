import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
  apiKey: "AIzaSyCPvxfXFL31IZcTdw5wSzNe1TBzRupdyBY",
  authDomain: "nuxt-firebase-auth-ba7f3.firebaseapp.com",
  databaseURL: "https://nuxt-firebase-auth-ba7f3.firebaseio.com",
  projectId: "nuxt-firebase-auth-ba7f3",
  storageBucket: "nuxt-firebase-auth-ba7f3.appspot.com/",
  messagingSenderId: "778144210917",
  appId: "1:778144210917:web:8f73fc315fefb41e"
};

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase
