import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import { cityDb } from './temp/m-city-export'

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
const DB = firebase.firestore()
const matchesCollection = DB.collection('matches')
const playersCollection = DB.collection('players')
const positionsCollection = DB.collection('positions')
const promotionsCollection = DB.collection('promotions')
const teamsCollection = DB.collection('teams')

cityDb.matches.forEach((item) => {
  matchesCollection.add(item)
})
cityDb.matches.forEach((item) => {
  playersCollection.add(item)
})
cityDb.matches.forEach((item) => {
  positionsCollection.add(item)
})
cityDb.matches.forEach((item) => {
  promotionsCollection.add(item)
})
cityDb.matches.forEach((item) => {
  teamsCollection.add(item)
})

export {
  firebase,
  matchesCollection,
  playersCollection,
  positionsCollection,
  promotionsCollection,
  teamsCollection
}
