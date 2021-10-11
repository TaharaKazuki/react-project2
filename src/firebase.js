import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBsr3GtSucGDZYjUtW7xI7QU9jxU931rkY',
  authDomain: 'mcity-d31c3.firebaseapp.com',
  projectId: 'mcity-d31c3',
  storageBucket: 'mcity-d31c3.appspot.com',
  messagingSenderId: '875212679410',
  appId: '1:875212679410:web:1d452e0bfc8e6f1852086b',
  measurementId: 'G-799V8TC2S0'
}

firebase.initializeApp(firebaseConfig)

export { firebase }
