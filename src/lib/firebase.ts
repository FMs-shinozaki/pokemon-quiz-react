import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

export default class Firebase {
  _instance: FirebaseApp;
  _auth?: Auth;

  constructor() {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
    };

    this._instance = initializeApp(firebaseConfig);
  }

  static get instance() {
    return new Firebase();
  }

  get auth(): Auth {
    if (!this._auth) {
      this._auth = getAuth(this._instance);
    }

    return this._auth;
  }
}
