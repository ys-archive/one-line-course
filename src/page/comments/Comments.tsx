import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { EMenuMode, ENavType } from "../../typings";

import { initFetch_QueryAllMyComments } from "~/src/store/action/user-async";

import NavFactory from "../../component/nav/nav-factory/NavFactory";
import CommentsHistory from "./CommentsHistory";
import GoToTop from "~/src/component/goToTop/GoToTop";
import Menu from "~/src/component/menu/Menu";
import { placeIconsRandomly, USERID_SESSION_STORAGE_KEY } from "../../common/";

import "./_Comments.scss";
import "../_Page.scss";

const Comments = () => {
  initCommentsHistory();
  return (
    <div>
      <NavFactory navType={ENavType.Main} highlightBtnIdx={1} />
      <div className="page comments">
        <CommentsHistory />
        <GoToTop />
        <Menu menuMode={EMenuMode.Others} />
        {placeIconsRandomly(30, { fontSize: "2rem" })}
      </div>
    </div>
  );
};

const initCommentsHistory = () => {
  const dispatch = useDispatch();

  const _queryAllMyComments = useCallback(
    (myUserID: string) => dispatch(initFetch_QueryAllMyComments(myUserID)),
    []
  );

  useEffect(() => {
    const myUserID = sessionStorage.getItem(USERID_SESSION_STORAGE_KEY)!;    
    _queryAllMyComments(myUserID);
  }, []);
};

export default Comments;
