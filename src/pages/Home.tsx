import InputBox from "../components/InputBox";
import Header from "../layout/Header";
import TodoLists from "../components/TodoLists";
import { Todo } from "../types/Todos";
import { useSelector } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";

const Home: React.FC = () => {
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
