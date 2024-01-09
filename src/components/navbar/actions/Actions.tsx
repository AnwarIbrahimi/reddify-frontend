import React from "react";

import "./Actions.css";
import Button from "../../button/Button";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Actions() {
  return (
    <div className="actions">
      <Link to="/login">
      <Button secondary label="LOG IN" />
      </Link>
      <Link to="/signup">
      <Button label="SIGN UP" />
      </Link>
      {/* <Link to="/signin">
      <Button secondary label="SIGN IN GOOGLE" />
      </Link>                   */}
      <div className="profile">
        <PersonIcon className="hoverable" />
        <ArrowDropDownIcon className="hoverable" />
      </div>
    </div>
  );
}