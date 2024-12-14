import React, { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../Firebase";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Google Sign-In User:", user);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error.message);
        alert(`Error: ${error.message}`);
      });
  };

  const signinWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Signed in with email:", user);
      })
      .catch((error) => {
        console.error("Error signing in with email:", error.message);
        alert(`Error: ${error.message}`);
      });
  };

  const signupWithEmail = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Account created successfully:", user);
      })
      .catch((error) => {
        console.error("Error signing up:", error.message);
        alert(`Error: ${error.message}`);
      });
  };

  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
      color: "#fff",
    }}
  >
    <div
      style={{
        width: "400px",
        padding: "30px",
        backgroundColor: "#ffffff",
        borderRadius: "15px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Welcome Back
      </h2>
  
      <p
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#666",
          fontSize: "14px",
        }}
      >
        Log in to your account
      </p>
  
      <div style={{ marginBottom: "20px" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 15px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>
  
      <div style={{ marginBottom: "20px" }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 15px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>
  
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <button
          onClick={signinWithEmail}
          style={{
            padding: "12px",
            fontSize: "16px",
            background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "transform 0.3s",
          }}
        >
          Sign In with Email
        </button>
  
        <button
          onClick={signupWithEmail}
          style={{
            padding: "12px",
            fontSize: "16px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "transform 0.3s",
          }}
        >
          Sign Up with Email
        </button>
  
        <button
          onClick={signinWithGoogle}
          style={{
            padding: "12px",
            fontSize: "16px",
            backgroundColor: "#db4437",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "transform 0.3s",
          }}
        >
          Continue with Google
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default Login;
