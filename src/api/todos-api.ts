import axios from "axios";
import { Todo } from "../types/Todos";

const todoClient = axios.create({
  baseURL: "http://localhost:5100/todos",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTodos = async () => {
  const res = await todoClient.get<Todo[]>("/");
  return res.data;
};

export const addTodo = async (newTodo: Todo): Promise<void> => {
  await todoClient.post("/", newTodo);
};

export const deleteTodo = async (id: string): Promise<void> => {
  await todoClient.delete(`/${id}`);
};

export const toggleTodo = async (todo: Todo): Promise<void> => {
  await todoClient.patch(`${todo.id}`, { ...todo, isDone: !todo.isDone });
};

export const updateTodo = async (
  todo: Todo,
  title: string,
  content: string
): Promise<void> => {
  await todoClient.patch(`/${todo.id}`, {
    ...todo,
    title,
    content,
  });
};
