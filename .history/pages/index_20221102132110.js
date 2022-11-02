import React from "react";
import { useState} from "react";
import { auth } from '../firebase/firebase.config';
import { signInWithPopup,
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
        onAuthStateChanged,
        signInWithEmailAndPassword,
        signOut
        } from "firebase/auth";

export default function Home() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail]= useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  const GoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const authorization = auth;
    const result = await signInWithPopup(authorization, provider);
    console.log(result);
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
  })

  const HandleRegister = async () => {
    try {
      setRegisterEmail("");
      setRegisterPassword("");
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch(err) {
      console.log(err.message);
    }
  }

  const HandleSubmit = event => {
    console.log("handle submit ran");
    event.preventDefault();
    event.target.reset();
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h3 className="text-3xl text-sky-400 font-bold underline absolute top-0 p-4">Welcome to the app</h3>
      <div className="grid grid-cols-3 gap-4">
        <form onSubmit={HandleSubmit}>
          <h2>Register</h2>
          <div className="border-2 p-2 m-2">
            <div className="pb-4">
              <label>Email</label>
              <input
                placeholder="Email..."
                onChange={()=> {
                  setRegisterEmail(event.target.value);
                }}
                className="flow-root m-2 p-2"
              />
              <label>Password</label>
              <input
                placeholder="Password..."
                onChange={()=> {
                  setRegisterPassword(event.target.value);
                }}
                className="flow-root m-2 p-2"
              />
              <button
                type="submit"
                className=" text-blue-700
                            hover:text-white
                            border border-blue-700
                            hover:bg-blue-800
                            focus:ring-4
                            focus:outline-none
                            focus:ring-blue-300
                            font-medium
                            round-lg
                            text-sm
                            px-5 py-2.5
                            mr-2
                            dark:border-blue-500
                            dark:text-blue-500
                            dark:hover:text-white
                            dark:hover:bg-blue-600
                            dark:focus:ring-blue-800
                            "
                onClick={HandleRegister}>Register User</button>
              <button onClick={() => GoogleSignIn()}>Log in with Google</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
