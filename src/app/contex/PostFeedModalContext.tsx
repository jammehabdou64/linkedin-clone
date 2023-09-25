import React, { createContext, useReducer } from "react";
import { PostFeedActionType, PostFeedStateModalType } from "../types";

const initialState = {
  showModal: false,
};

export const PostFeedModalContext = createContext<{
  state: PostFeedStateModalType;
  dispatch: React.Dispatch<PostFeedActionType>;
}>({ state: initialState, dispatch: () => {} });

const reducer = (state: PostFeedStateModalType, action: PostFeedActionType) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        showModal: true,
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        showModal: false,
      };

    default:
      return state;
  }
};

export const PostFeedModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PostFeedModalContext.Provider value={{ state, dispatch }}>
      {children}
    </PostFeedModalContext.Provider>
  );
};
