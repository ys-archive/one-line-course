import React, { useCallback } from "react";

import "./_CommentTextArea.scss";

interface ICommentTextAreaProps {
  setContents: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

const CommentTextArea: React.FC<ICommentTextAreaProps> = ({
  setContents,
  value,
}) => {
  const onChangeTextArea = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      console.log(e.target.value);

      setContents(e.target.value!);
    },
    [setContents]
  );

  return (
    <textarea
      className="comment--text-area"
      wrap="soft"
      required
      onChange={onChangeTextArea}
      value={value}
    />
  );
};

export default CommentTextArea;
