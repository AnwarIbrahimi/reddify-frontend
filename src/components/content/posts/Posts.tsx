import React from "react";

import "./Posts.css";

import posts from "../../../data/posts/posts.json";

import { ArrowUpward } from "@mui/icons-material";
import { ArrowDownward } from "@mui/icons-material";
import Button from "../../button/Button";

import { ModeComment } from "@mui/icons-material";
import { Share } from "@mui/icons-material";
import { Bookmark } from "@mui/icons-material";
import { MoreHoriz } from "@mui/icons-material";
import Video from "../../video/Video";

export default function Posts() {
  return (
    <div className="posts-wrapper">
      {posts.map((post, index) => (
        <div className="post">
          <div className="post-sidebar">
            <ArrowUpward className="upvote" />
            <span>{post.upvotes}</span>
            <ArrowDownward className="downvote" />
          </div>
          <div className="post-title">
            <img src={post.subreddit.image_src} />
            <span className="subreddit-name">r/{post.subreddit.name}</span>
            <span className="post-user">Posted by</span>
            <span className="post-user underline">u/{post.username}</span>
            <div className="spacer"></div>
            <Button label="+ JOIN" />
          </div>
          <div className="post-body">
            <span className="title">{post.title}</span>
            {post.video_src && <Video src={post.video_src} duration={post.duration} />}
            {post.image_src && <img src={post.image_src} />}
            {post.description && <span className="description">{post.description}</span>}
          </div>
          <div className="post-footer">
            <div className="comments footer-action">
              <ModeComment className="comment-icon" />
              <span>{post.comments} Comments</span>
            </div>
            <div className="share footer-action">
              <Share />
              <span>Share</span>
            </div>
            <div className="save footer-action">
              <Bookmark />
              <span>Save</span>
            </div>
            <MoreHoriz className="more-icon footer-action" />
          </div>
        </div>
      ))}
    </div>
  );
}
