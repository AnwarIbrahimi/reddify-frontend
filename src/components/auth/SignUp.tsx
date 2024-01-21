import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const signUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // After successful signup, get the UID
      const user = userCredential.user;
      const uid = user.uid;

      // Send the UID and other user information to your backend
      await sendUserToBackend({ uid, email /* add other user properties here */ });

      console.log("Signup successful");
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const sendUserToBackend = async (user: { uid: string; email: string }) => {
    try {
      const response = await fetch("http://20.185.104.164/api/User/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User creation successful", data);
      } else {
        const errorData = await response.json();
        console.error("User creation failed", errorData);
      }
    } catch (error) {
      console.error("Error sending user to backend", error);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
