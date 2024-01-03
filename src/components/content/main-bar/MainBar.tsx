import React from "react";

import { Close } from "@mui/icons-material";
import { MoreHoriz } from "@mui/icons-material";
import { Whatshot } from "@mui/icons-material";
import { NewReleases } from "@mui/icons-material";
import { TrendingUp } from "@mui/icons-material";
import { Menu } from "@mui/material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

import "./MainBar.css";
import PostsContent from "../postscontent/PostContent";
import Posts from "../posts/Posts";

export default function MainBar() {
  return (
    <div className="main-bar">
      <div className="update-card">
        <div className="top-section">
          <span>UPDATES FROM REDDIT</span>
          <Close className="hoverable" />
        </div>
        <div className="body hoverable">
          <div className="context">
            <span className="title">Home</span>
            <br />
            <span className="description">Your personal Reddit frontpage. Come here to check in with your favorite communities.</span>
          </div>
          <img src="./assets/images/pin.jpg" />
        </div>
      </div>

      <div className="filter-container">
        <div className="filter-element hoverable">
          <Whatshot />
          <span>Hot</span>
        </div>
        <div className="filter-element hoverable">
          <span>Everywhere</span>
          <ArrowDropDown />
        </div>
        <div className="filter-element-secondary hoverable">
          <NewReleases />
          <span>New</span>
        </div>
        <div className="filter-element-secondary hoverable">
          <TrendingUp />
          <span>Top</span>
        </div>
        <MoreHoriz className="filter-element-tertiary hoverable" />
        <div className="spacer"></div>
        <div className="filter-element-menu hoverable">
          <Menu open={false} />
          <ArrowDropDown />
        </div>
      </div>

      <Posts />
    </div>
  );
}
