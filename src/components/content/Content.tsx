import React from "react";

import "./Content.css";
import PostsContent from "./postscontent/PostContent";
import TrendingToday from "./trending-today/TrendingToday";
import MainBar from "./main-bar/MainBar";
import SideBar from "./side-bar/SideBar";
import CreatePosts from "./createposts/CreatePosts";

export default function Content() {
  return (
    <div className="content">
      <TrendingToday />
      <CreatePosts/>
      <div className="bars-wrapper">
        <span className="popular-posts-title">Popular Posts</span>
        <div className="bars-wrapper-inside">
          <MainBar />
          <SideBar />
        </div>
      </div>
    </div>
  );
}