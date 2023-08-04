import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import { Auth, User, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

export enum AuthStatus 
{
  Success,
  InvalidEmail,
  WrongPassword,
  UserNotFound,
  UserDisabled,
  UnknownError
}

export type AuthResult =
{
  Status: any,
  User? : User | null
}

export class OnlineUserManager
{
  private app : FirebaseApp;
  private auth : Auth;
  private firestore : Firestore;

  public constructor()
  {
    this.app = !(getApps.length > 0)? initializeApp(firebaseConfig) : getApp();
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
  }

  public async SignIn(email : string, password : string) : Promise<AuthResult>
  {
    try
    {
      const userCredientials = await signInWithEmailAndPassword(this.auth, email, password);
      return {Status: AuthStatus.Success, User: userCredientials.user};
    }catch(error : any)
    {
      const code = error.code;
      switch(code)
      {
        case "auth/invalid-email":
          return {Status: AuthStatus.InvalidEmail};
        case "auth/wrong-password":
          return {Status: AuthStatus.WrongPassword};
        case "auth/user-not-found":
          return {Status: AuthStatus.UserNotFound};
        case "auth/user-disabled":
          return {Status: AuthStatus.UserDisabled};
        default:
          return {Status: AuthStatus.UnknownError};
      }
    }
  }

  public async SignOut()
  {
    await this.auth.signOut();
  }

  public GetUser() : User | null
  {
    console.log(this.auth.currentUser);
    return this.auth.currentUser;
  }
}

export const onlineUserManager = new OnlineUserManager();