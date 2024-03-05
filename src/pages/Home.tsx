import InputBox from "../components/InputBox";
import Header from "../layout/Header";
import TodoLists from "../components/TodoLists";
import { useState } from "react";
import { Todo } from "../types/Todos";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: Date.now().toString(),
      title: "Todo List 정복!",
      body: "Todo List를 마스터해보자",
      isDone: false,
      deadline: "2024-01-31",
    },
  ]);
  return (
    <div>
      <Header />
      <InputBox setTodos={setTodos} />
      <TodoLists todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Home;
