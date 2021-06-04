import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import GridLectureCard from "~/src/component/lecture-card/GridLectureCard";
import LectureCardPopup from "~/src/component/lecture-card/LectureCardPopup";
import { TCombinedStates } from "~/src/store";
import { IBookmarkData, ILectureData } from "~/src/typings";

import "./_BookmarksHistory.scss";

const BookmarksHistory = () => {
  const allMyBookmarks = useSelector(
    (state: TCombinedStates) => state.userAsync_QueryAllMyBookmarks.bookmarks
  );

  const allDatesYMD = useMemo(
    () =>
      allMyBookmarks &&
      // make unique array
      Array.from(
        new Set(
          allMyBookmarks.map((bookmark: IBookmarkData) =>
            bookmark.createdAt.toString().slice(0, 10)
          )
        )
      ),
    [allMyBookmarks]
  );

  const lectures = useSelector(
    (state: TCombinedStates) => state.searchAsync.lectures
  );

  const historyJSX: JSX.Element[] | null | undefined = useMemo(
    () =>
      allDatesYMD &&
      allMyBookmarks &&
      lectures &&
      allDatesYMD.map((date: string) => (
        <div key={uuid()} className="bookmarksHistory--one-day">
          <p className="bookmarksHistory--created-at">{date}</p>
          <div className="bookmarksHistory--separator"></div>
          {allMyBookmarks
            .filter((bookmark: IBookmarkData) => {
              const comparerYMD = bookmark.createdAt.toString().slice(0, 10);
              return comparerYMD === date;
            })
            .map((bookmark: IBookmarkData, i: number) => {
              console.log("created!");

              const lec = lectures.find(
                (lecture: ILectureData) => lecture.id === bookmark.lectureId
              );
              if (!lec) return null;

              return (
                <div
                  key={bookmark.id!}
                  className="bookmarksHistory--lecture"
                  onClick={_ => window.open(lec.url!, "_blank")}
                >
                  <GridLectureCard lecture={lec} popupIdx={i} />
                </div>
              );
            })}
        </div>
      )),
    [allMyBookmarks, allDatesYMD, lectures]
  );

  return <div className="bookmarksHistory">{historyJSX}</div>;
};

export default BookmarksHistory;
