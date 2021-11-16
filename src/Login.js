import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profilePic: userAuth.user.photoURL,
        })
      );
    });
  };

  const register = () => {
    if (!name) {
      return alert("please enter full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                profilePic: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" />
      <form>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Full name"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => {
            setProfilePic(e.target.value);
          }}
          type="text"
          placeholder="profile picture url"
        />
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="email"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
      </form>
      <p>
        Not a memeber?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
