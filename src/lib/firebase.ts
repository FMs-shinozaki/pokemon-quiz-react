import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

export default class Firebase {
  private static _instance: Firebase;
  private _app: FirebaseApp;
  private _auth?: Auth;

  private constructor() {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
    };

    this._app = initializeApp(firebaseConfig);
  }

  static get instance() {
    if (!Firebase._instance) {
      Firebase._instance = new Firebase();
    }

    return Firebase._instance;
  }

  get auth(): Auth {
    if (!this._auth) {
      this._auth = getAuth(this._app);
    }

    return this._auth;
  }
}
