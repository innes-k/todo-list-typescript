import { Todo } from "../types/Todos";
import * as St from "./styles/todoLists.style";
import { useNavigate } from "react-router-dom";
import { useTodoMutation } from "../hooks/useTodoMutation";

type TodoItemProps = {
  todos: Todo[];
};

const TodoItem: React.FC<TodoItemProps> = ({ todos }) => {
  const navigate = useNavigate();

  // custom hook - useTodoMutation
  const { deleteTodoItem, toggleTodoItem } = useTodoMutation();

  const removeHandler = (id: string): void => {
    const check = window.confirm("삭제하시겠습니까?");
    check && deleteTodoItem(id);
  };

  const reLocateHandler = (todo: Todo): void => {
    toggleTodoItem(todo);
  };

  const onDetailPageHandler = (id: string): void => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      {todos.map((todo) => {
        return (
          <St.TodoList key={todo.id}>
            <St.TodoListBody onClick={() => onDetailPageHandler(todo.id)}>
              <St.Span>{todo.title}</St.Span>
              <p>{todo.content}</p>
              <St.Time>
                {new Date(todo.deadline).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long", // "long"을 사용하면 월 이름이 됨
                  day: "numeric",
                })}
                까지
              </St.Time>
            </St.TodoListBody>
            <St.TodoListBtns>
              <St.RemoveBtn onClick={() => removeHandler(todo.id)}>
                삭제하기
              </St.RemoveBtn>
              <St.CompleteBtn
                onClick={() => reLocateHandler(todo)}
                $isDone={todo.isDone}
              >
                {todo.isDone ? "취소하기" : "완료하기"}
              </St.CompleteBtn>
            </St.TodoListBtns>
          </St.TodoList>
        );
      })}
    </>
  );
};

export default TodoItem;
