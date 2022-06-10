import AsyncStorage from '@react-native-async-storage/async-storage'
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native'

import ENV from './envs'

const firebaseConfig = {
  apiKey: ENV.firebaseApiKey,
  authDomain: ENV.firebaseAuthDomain,
  projectId: ENV.firebaseProjectId,
  storageBucket: ENV.firebaseStorageBucket,
  messagingSenderId: ENV.firebaseMessagingSenderId,
  appId: ENV.firebaseAppId,
  measurementId: ENV.firebaseMeasurementId
}

let app: FirebaseApp
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig)
} else {
  app = getApp()
}

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export default auth
