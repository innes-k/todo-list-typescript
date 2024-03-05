import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../types/Todos";

const initialState = [
  {
    id: Date.now().toString(),
    title: "Todo List 정복!",
    body: "Todo List를 마스터해보자",
    isDone: false,
    deadline: "2024-01-31",
  },
];
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: Todo[], actions: PayloadAction<Todo>): Todo[] => {
      return [...state, actions.payload];
    },
    deleteTodo: (state: Todo[], actions: PayloadAction<string>) => {
      const id = actions.payload;
      return state.filter((todo) => todo.id !== id);
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, deleteTodo } = todoSlice.actions;
