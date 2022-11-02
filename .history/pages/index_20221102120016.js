import React from "react";
import { useStates} from "react";
import { auth } from '../firebase/firebase.config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Home() {

  const GoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
  }

  return (
    <div>

    </div>
  )
}
