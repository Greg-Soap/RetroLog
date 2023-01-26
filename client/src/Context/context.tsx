import React, { createContext, ReactNode, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

interface Init {
  user: any;
  isFetching: boolean;
  error: boolean;
  dispatch?: any;
}

const INITIAL_STATE: Init = {
  user: JSON.parse(localStorage.getItem("user")!) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);
interface IProps {
  children?: ReactNode;
}
export const ContextProvider: React.FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
