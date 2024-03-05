import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../modules/todoSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: { todoReducer },
});

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
