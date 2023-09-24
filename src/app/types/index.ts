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
