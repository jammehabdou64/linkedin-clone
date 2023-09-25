export type AuthStateType = {
  user: {};
};

export type AuthActionType = {
  type: string;
  payload: any;
};

export type AuthType = {
  name?: string;
  username?: string;
  email?: string;
};

export type PostStateType = {
  posts: Array<any>;
  post: {} | any;
  loading?: boolean;
};

export type PostActionType = {
  type: string;
  payload: any;
};

export type PostFeedStateModalType = {
  showModal: boolean;
};

export type PostFeedActionType = {
  type: string;
};
