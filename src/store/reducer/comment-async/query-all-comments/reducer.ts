import {
  ECommentAsync_QueryAllComments_ActionType,
  ICommentData,
  TStatusCode,
} from "~/src/typings";

import { TActions as TCommentAsyncActions } from "../../../action/comment-async";

export interface ICommentAsync {
  comments: Array<ICommentData> | null;
  err?: string;
  status: TStatusCode;
  isLoading: boolean;
}

export interface IState {
  state: ICommentAsync;
}

const init: ICommentAsync = {
  comments: null,
  err: "",
  status: 0,
  isLoading: false,
};

const reducer = (
  state: ICommentAsync = init,
  action: TCommentAsyncActions
): ICommentAsync => {
  switch (action.type) {
    case ECommentAsync_QueryAllComments_ActionType.FetchRequest:
      return {
        ...state,
        isLoading: true,
      };

    case ECommentAsync_QueryAllComments_ActionType.FetchSucceed:
      return {
        ...state,
        comments: action.comments,
        status: action.status,
        isLoading: false,
      };

    case ECommentAsync_QueryAllComments_ActionType.FetchFail:
      return {
        ...state,
        err: action.err,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
