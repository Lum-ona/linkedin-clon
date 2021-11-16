import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import {
  CommentOutlined,
  Refresh,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import InputOptions from "./InputOptions";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOptions Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOptions Icon={CommentOutlined} title="comment" color="gray" />
        <InputOptions Icon={ShareOutlined} title="Share" color="gray" />
        <InputOptions Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
