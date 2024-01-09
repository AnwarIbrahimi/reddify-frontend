import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Landing from "./components/landing/Landing";
import SigninG from "./components/auth/SignInG";

const AppRouter = () => {
    return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SigninG/>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
