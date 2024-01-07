import React, { useEffect, useState } from "react";

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
import axios from "axios";

interface Post {
  name: string;
  publisher: number;
  description: number;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('http://52.188.131.24/api/contents/all')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []);


  return (
    <div className="posts-wrapper">
    {posts.map((post, index) => (
      <div className="post" key={index}>
        <div className="post-sidebar">
          <ArrowUpward className="upvote" />
          <span></span>
          <ArrowDownward className="downvote" />
        </div>
        <div className="post-title">
          <span className="subreddit-name">r/{post.publisher}</span>
          <span className="post-user">Posted by</span>
          <span className="post-user underline">u/</span>
          <div className="spacer"></div>
          <Button label="+ JOIN" />
        </div>
        <div className="post-body">
          <span className="title">{post.name}</span>
          {post.description && <span className="description">{post.description}</span>}
        </div>
        <div className="post-footer">
          <div className="comments footer-action">
            <ModeComment className="comment-icon" />
            <span>Comments</span>
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