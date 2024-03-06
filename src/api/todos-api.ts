import axios from "axios";
import { Todo } from "../types/Todos";

const todoClient = axios.create({
  baseURL: "http://localhost:5100/todos",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTodos = async (): Promise<Todo[]> => {
  const res = await todoClient.get("/");
  return res.data;
};

export const addTodo = async (newTodo: Todo): Promise<void> => {
  await todoClient.post("/", newTodo);
};
