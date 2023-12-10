import React from "react";

import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo hoverable">
      <img src="./assets/images/reddit_logo.png" />
      <span>reddify</span>
    </div>
  );
}