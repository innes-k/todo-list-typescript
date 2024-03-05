import InputBox from "../components/InputBox";
import Header from "../layout/Header";
import TodoLists from "../components/TodoLists";
// import { useState } from "react";
import { Todo } from "../types/Todos";
import { useSelector } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";

const Home: React.FC = () => {
  // const [todos, setTodos] = useState<Todo[]>([
  //   {
  //     id: Date.now().toString(),
  //     title: "Todo List 정복!",
  //     body: "Todo List를 마스터해보자",
  //     isDone: false,
  //     deadline: "2024-01-31",
  //   },
  // ]);
  const todos = useSelector(
    (state: Todo[]): Reducer<Todo[]> => state.todoReducer
  );
  return (
    <div>
      <Header />
      {/* <InputBox setTodos={setTodos} />
      <TodoLists todos={todos} setTodos={setTodos} /> */}
      <InputBox />
      <TodoLists todos={todos} />
    </div>
  );
};

export default Home;
