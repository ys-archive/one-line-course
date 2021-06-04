import React from "react";
import { ILectureData } from "~/src/typings";
import LectureCardPopup from "./LectureCardPopup";

interface ILectureCardHistoryPopupProps {
  lecture: ILectureData;
  popupIdx: number;
  isValidDay: boolean;
}

const LectureCardHistoryPopup: React.FC<ILectureCardHistoryPopupProps> = ({
  lecture,
  popupIdx,
  isValidDay,
}) => {
  if (!isValidDay) return null;
  return (
    <>
      <LectureCardPopup lecture={lecture} popupIdx={popupIdx} />
    </>
  );
};

export default LectureCardHistoryPopup;
