import React, { useMemo } from "react";
import { getIcon } from "~/src/common";

import "./_LectureSessionCount.scss";

interface ILectureSessionCountProps {
  sessionCount: number;
}

const LectureSessionCount: React.FC<ILectureSessionCountProps> = ({
  sessionCount,
}) => (
  <div>
    {getIcon("Lectures", undefined, { marginRight: "10px" })}
    {sessionCount === 1 ? "단일 강좌" : sessionCount}
  </div>
);

export default LectureSessionCount;
