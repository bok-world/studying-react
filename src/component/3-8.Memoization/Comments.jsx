import React, { useCallback } from "react";
import CommentItem from "./CommentItem";

export default function Comments({ commentList }) {
  const handleChange = useCallback(() => {
    console.log("눌림");
  }, []);
  return (
    <div>
      {commentList.map((comments) => (
        <CommentItem
          key={comments.title}
          title={comments.title}
          content={comments.content}
          likes={comments.likes}
          onClick={handleChange}
        />
      ))}
    </div>
  );
}
