import { useContext } from "react";
import { Context } from "./create-context";

export default function useStore<T>(contextStore: Context<T>): T {
  if (!contextStore.Context) {
    throw new Error("No Context defined");
  }

  const store = useContext<T>(contextStore.Context);
  if (!store) {
    throw new Error("No Provider defined");
  }

  return store;
}
