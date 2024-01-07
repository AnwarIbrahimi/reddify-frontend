import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Landing from "./components/landing/Landing";

const AppRouter = () => {
    return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
