import axios from "axios";
import { Todo } from "../types/Todos";

const todoClient = axios.create({
  baseURL: "http://localhost:5100/todos",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTodo = async (): Promise<Todo[]> => {
  const res = await todoClient.get("/");
  return res.data;
};
