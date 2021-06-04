import React from "react";

import "./_CommentCreatedAt.scss";

interface ICommentCreatedAtProps {
  createdAt: Date;
}

// Show only Date & times
const CommentCreatedAt: React.FC<ICommentCreatedAtProps> = ({ createdAt }) => (
  <div className="comment--created-at">
    <p>{new String(createdAt).slice(0, 10)}</p>
    {new String(createdAt).slice(11, 25)}
  </div>
);

export default CommentCreatedAt;
