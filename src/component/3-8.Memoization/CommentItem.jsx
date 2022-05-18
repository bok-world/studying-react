import React from "react";
import "./CommentItme.css";

export default function CommentItem(title, content, likes) {
  return (
    <div classsName="CommentItem">
      <span>{title}</span>
      <span>{content}</span>
      <span>{likes}</span>
    </div>
  );
}
