import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: 'AIzaSyCit2Lo6wgKDORvhaPKw3mVFQI1FoBRHbg',
  authDomain: 'chatty-7604b.firebaseapp.com',
  databaseURL: 'https://chatty-7604b-default-rtdb.firebaseio.com/',
  projectId: 'chatty-7604b',
  storageBucket: 'chatty-7604b.appspot.com',
  messagingSenderId: '287725789947',
  appId: '1:287725789947:web:b304c82a7e899f3195c65e',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();
