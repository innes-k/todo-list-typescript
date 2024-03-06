import { useDispatch } from "react-redux";
import { Todo } from "../types/Todos";
import * as St from "./styles/todoLists.style";
import { deleteTodo, toggleTodo } from "../redux/modules/todoSlice";

type TodoItemProps = {
  todos: Todo[];
};

const TodoItem: React.FC<TodoItemProps> = ({ todos }) => {
  const dispatch = useDispatch();

  // 삭제버튼 onclick
  const removeHandler = (id: string): void => {
    dispatch(deleteTodo(id));
  };

  // toggle
  const reLocateHandler = (id: string): void => {
    dispatch(toggleTodo(id));
  };
  return (
    <>
      {todos.map((todo) => {
        return (
          <St.TodoList key={todo.id}>
            <St.TodoListBody>
              <St.Span>{todo.title}</St.Span>
              <p>{todo.body}</p>
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
                onClick={() => reLocateHandler(todo.id)}
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
