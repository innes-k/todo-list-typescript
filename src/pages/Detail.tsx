import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { deleteTodo, getTodos, toggleTodo, updateTodo } from "../api/todos-api";
import * as St from "../components/styles/todoLists.style";
import { Todo } from "../types/Todos";
import { useState } from "react";
import { EditButtons, EditSection } from "./detail.style";

const Detail = () => {
  const paramsId = useParams().id;
  const [isEdit, setIsEdit] = useState(false);

  // 1. '수정하기'클릭 - isEdit true로, title, content form태그의 input으로
  // 2. '수정완료'클릭 - mutation, update api (updateTodo라고해서 title, content 담긴 todo api로 보내기)

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

  const { mutate: updateTodoItem } = useMutation({
    mutationFn: (todo: Todo, title: string, content: string): Promise<void> =>
      updateTodo(todo, title, content),
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

  const onEditTrueHandler = () => {
    setIsEdit((prev) => !prev);
  };

  const onEditHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newTitle = formData.get("title") as string;
    const newContent = formData.get("content") as string;

    updateTodoItem(todo, newTitle, newContent);
    setIsEdit((prev) => !prev);
  };

  return (
    todo && (
      <St.TodoList>
        {isEdit ? (
          <form onSubmit={onEditHandler}>
            <EditSection>
              <input type="text" name="title" defaultValue={todo.title}></input>
              <input
                type="text"
                name="content"
                defaultValue={todo.content}
              ></input>
              <St.Time>
                {new Date(todo.deadline).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long", // "long"을 사용하면 월 이름이 됨
                  day: "numeric",
                })}
                까지
              </St.Time>
            </EditSection>
            <EditButtons>
              <button type="submit">수정완료</button>
              <button>취소하기</button>
            </EditButtons>
          </form>
        ) : (
          <>
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
              <button onClick={onEditTrueHandler}>수정하기</button>
              <St.CompleteBtn
                onClick={() => reLocateHandler(todo)}
                $isDone={todo?.isDone}
              >
                {todo?.isDone ? "취소하기" : "완료하기"}
              </St.CompleteBtn>
            </St.TodoListBtns>
          </>
        )}
      </St.TodoList>
    )
  );
};

export default Detail;
