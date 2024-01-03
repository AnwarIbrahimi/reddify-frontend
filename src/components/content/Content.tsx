import React from "react";

import "./Content.css";
import PostContent from "./postscontent/PostContent";
import TrendingToday from "./trending-today/TrendingToday";
import MainBar from "./main-bar/MainBar";
import SideBar from "./side-bar/SideBar";

export default function Content() {
  return (
    <div className="content">
      <TrendingToday />
      <div className="bars-wrapper">
        <span className="popular-posts-title"></span>
        <div className="bars-wrapper-inside">
          <MainBar />
          <SideBar />
        </div>
      </div>
    </div>
  );
}