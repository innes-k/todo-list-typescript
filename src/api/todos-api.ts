import axios from "axios";

const todoClient = axios.create({
  baseURL: "http://localhost:5100/todos",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTodo = async () => {
  const res = await todoClient.get("/");
  return res.data;
};
