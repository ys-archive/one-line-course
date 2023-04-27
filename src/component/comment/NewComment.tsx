import React, { useState } from "react";
import { useSelector } from "react-redux";
import { post_AddComment } from "~/src/service/CommentService";
import { TCombinedStates } from "~/src/store";
import { EButtonSize, EButtonType } from "~/src/typings";
import Button from "../button/Button";

import "./_NewComment.scss";
import { CommentUserName, CommentUserThumbnail } from "./comment-element";
import CommentTextArea from "./comment-element/text-area/CommentTextArea";

interface INewCommentProps {
  lectureId: number;
}

const NewComment: React.FC<INewCommentProps> = ({ lectureId }) => {
  const [commentContents, setCommentContents] = useState("");
  const user = useSelector(
    (state: TCombinedStates) => state.userAsync_QueryUser.user
  );

  const onSubmit = async () => {
    if (!user) {
      return;
    }

    await post_AddComment({
      content: commentContents,
      lectureId,
      userId: user.id,
    });

    // wipe out the comment area after submit
    setCommentContents("");
  };

  return (
    <div className="comment--new-comment">
      <div className="comment--new-comment-col1">
        {user ? (
          <CommentUserThumbnail imageURL={user.imageUrl} altName={user.name} />
        ) : null}
        {user ? <CommentUserName name={user.name} /> : null}
      </div>

      <div className="comment--new-comment-col2">
        <CommentTextArea
          setContents={setCommentContents}
          value={commentContents}
        />

        <Button
          btnSize={EButtonSize.Small}
          btnType={EButtonType.Warning}
          onClick={onSubmit}
        >
          등록
        </Button>
      </div>
    </div>
  );
};

export default NewComment;
