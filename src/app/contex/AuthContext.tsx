import React, { createContext, useReducer } from "react";
import { AuthActionType, AuthStateType } from "../types";

const initialState = {
  user: {},
};

export const AuthContext = createContext<{
  state: AuthStateType;
  dispatch: React.Dispatch<AuthActionType>;
}>({
  state: initialState,
  dispatch: () => {},
});

const reducer = (state: AuthStateType, action: AuthActionType) => {
  switch (action.type) {
    case "SET_AUTH":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT_USER":
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
