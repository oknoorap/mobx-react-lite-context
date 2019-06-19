import React, { createContext as reactCreateContext } from "react";
import { useLocalStore, useObserver } from "mobx-react-lite";

export interface Context<T> {
  Provider: any;
  Consumer: any;
  Context: any;
}

export default function createContext<T>(stores: any): Context<T> {
  const Context = reactCreateContext<any | null>({});
  const Provider = ({ children }: { children: any }) => {
    const value = useLocalStore(() => stores);
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };
  const Consumer = ({ children }: any) => {
    return useObserver(() => children());
  };

  return {
    Provider,
    Consumer,
    Context
  };
}
