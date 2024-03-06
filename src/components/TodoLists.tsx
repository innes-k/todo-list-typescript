import { useState } from "react";
import { Todo } from "../types/Todos";
import * as St from "./styles/todoLists.style";
import TodoItem from "./TodoItem";
import { getTodos } from "../api/todos-api";
import { useQuery } from "@tanstack/react-query";

interface TodosType {
  data: Todo[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

const TodoLists: React.FC = () => {
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [sortOrder, setSortOrder] = useState("asc");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getTodos();
  //     setTodos(data);
  //   };
  //   fetchData();
  // }, [todos]);

  const {
    data: todos,
    isLoading,
    isError,
  }: TodosType = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  const onSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const sortedTodos = todos
    ? [...todos].sort((a, b) => {
        if (sortOrder === "asc") {
          return new Date(b.deadline) - new Date(a.deadline);
        }
        return new Date(a.deadline) - new Date(b.deadline);
      })
    : [];

  const workingTodos = sortedTodos.filter((todo) => !todo.isDone);
  const doneTodos = sortedTodos.filter((todo) => todo.isDone);

  return (
    <>
      <div>
        <St.Title>
          <St.TitleSpan>📝 Working </St.TitleSpan>
          <St.TitleSelect onChange={onSortChange}>
            <option value="asc">오름차순</option>
            <option value="desc">내림차순</option>
          </St.TitleSelect>
        </St.Title>
        <St.TodoListFlex>
          <TodoItem todos={workingTodos} />
        </St.TodoListFlex>
        <St.Title>
          <St.TitleSpan>👍🏻 Done </St.TitleSpan>
          <St.TitleSelect onChange={onSortChange}>
            <option value="asc">오름차순</option>
            <option value="desc">내림차순</option>
          </St.TitleSelect>
        </St.Title>
        <St.TodoListFlex>
          <TodoItem todos={doneTodos} />
        </St.TodoListFlex>
      </div>
    </>
  );
};
export default TodoLists;
