import React, { createContext, useContext } from "react";
import { useLocalStore } from "mobx-react-lite";

export const createStore = (stores: any) => {
  const Context = createContext<any | null>({});
  const Provider = ({ children }: { children: any }) => {
    const value = useLocalStore(() => stores);
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return {
    Provider,
    Context
  };
};

export const useStore = (context: any) => {
  const store = useContext(context);
  if (!store) {
    throw new Error("No StoreProvider defined");
  }

  return store;
};
