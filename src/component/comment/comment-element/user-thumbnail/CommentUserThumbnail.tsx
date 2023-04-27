import React from "react";

import "./_CommentUserThumbnail.scss";

interface ICommentUserThumbnailProps {
  imageURL: string;
  altName: string;
}

const CommentUserThumbnail: React.FC<ICommentUserThumbnailProps> = ({
  imageURL,
  altName,
}) => (
  <img
    src={imageURL}
    alt={`${altName}'s thumbnail`}
    className="comment--user-thumbnail"
    loading="lazy"
  ></img>
);

export default CommentUserThumbnail;
