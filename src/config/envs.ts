import Constants from 'expo-constants'

const ENV = {
  dev: {
    firebaseApiKey: Constants?.manifest?.extra?.firebaseApiKey,
    firebaseAuthDomain: Constants?.manifest?.extra?.firebaseAuthDomain,
    firebaseProjectId: Constants?.manifest?.extra?.firebaseProjectId,
    firebaseStorageBucket: Constants?.manifest?.extra?.firebaseStorageBucket,
    firebaseMessagingSenderId: Constants?.manifest?.extra?.firebaseMessagingSenderId,
    firebaseAppId: Constants?.manifest?.extra?.firebaseAppId,
    firebaseMeasurementId: Constants?.manifest?.extra?.firebaseMeasurementId
  },
  prod: {
    firebaseApiKey: Constants?.manifest?.extra?.firebaseApiKey,
    firebaseAuthDomain: Constants?.manifest?.extra?.firebaseAuthDomain,
    firebaseProjectId: Constants?.manifest?.extra?.firebaseProjectId,
    firebaseStorageBucket: Constants?.manifest?.extra?.firebaseStorageBucket,
    firebaseMessagingSenderId: Constants?.manifest?.extra?.firebaseMessagingSenderId,
    firebaseAppId: Constants?.manifest?.extra?.firebaseAppId,
    firebaseMeasurementId: Constants?.manifest?.extra?.firebaseMeasurementId
  }
}

export default __DEV__ ? ENV.dev : ENV.prod
