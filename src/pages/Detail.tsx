import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { deleteTodo, getTodos, toggleTodo } from "../api/todos-api";
import * as St from "../components/styles/todoLists.style";
import { Todo } from "../types/Todos";

const Detail = () => {
  const paramsId = useParams().id;

  const queryClient = useQueryClient();

  const { mutate: deleteTodoItem } = useMutation({
    mutationFn: (id: string): Promise<void> => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const { mutate: toggleTodoItem } = useMutation({
    mutationFn: (todo: Todo): Promise<void> => toggleTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>error</div>;

  const todo: Todo | undefined = todos?.find((todo) => todo.id === paramsId);

  const removeHandler = (id: string): void => {
    const check = window.confirm("삭제하시겠습니까?");
    check && deleteTodoItem(id);
  };

  const reLocateHandler = (todo: Todo): void => {
    toggleTodoItem(todo);
  };

  return (
    todo && (
      <St.TodoList>
        <St.TodoListBody>
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
          <St.RemoveBtn onClick={() => removeHandler(todo?.id)}>
            삭제하기
          </St.RemoveBtn>
          <St.CompleteBtn
            onClick={() => reLocateHandler(todo)}
            $isDone={todo?.isDone}
          >
            {todo?.isDone ? "취소하기" : "완료하기"}
          </St.CompleteBtn>
        </St.TodoListBtns>
      </St.TodoList>
    )
  );
};

export default Detail;
