import React from "react";
import { getIcon } from "~/src/common";

import "./_LectureViewCount.scss";

interface ILectureViewCountProps {
  viewCount: number;
}

const LectureViewCount: React.FC<ILectureViewCountProps> = ({ viewCount }) => (
  <div>
    {getIcon("Users", undefined, { marginRight: "10px" })}
    {viewCount}
  </div>
);

export default LectureViewCount;
