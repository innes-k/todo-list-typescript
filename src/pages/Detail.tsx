import { useNavigate, useParams } from "react-router-dom";
import * as St from "../components/styles/todoLists.style";
import { Todo } from "../types/Todos";
import { useState } from "react";
import { useTodoQuery } from "../hooks/useTodoQuery";
import { useTodoMutation } from "../hooks/useTodoMutation";

import EditTrue from "../components/Detail-editTrue";
import { Container } from "../components/styles/InputBox.styles";
import { EditButton } from "../components/styles/detail-editTrue.style";

const Detail = () => {
  const paramsId = useParams().id;
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);

  // custom hook - useTodoMutation()
  const { deleteTodoItem, toggleTodoItem, updateTodoItem } = useTodoMutation();

  // custom hook - useTodoQuery()
  const { todos, isLoading, isError } = useTodoQuery();

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

  const onEditTrueHandler = (): void => {
    setIsEdit((prev) => !prev);
  };

  const onEditHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newTitle = formData.get("title") as string;
    const newContent = formData.get("content") as string;

    todo && updateTodoItem({ todo, newTitle, newContent });
    setIsEdit((prev) => !prev);
    navigate("/");
  };

  return (
    todo && (
      <Container>
        <St.TodoList>
          {isEdit ? (
            <EditTrue todo={todo} onEditHandler={onEditHandler} />
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
                <EditButton onClick={onEditTrueHandler}>수정하기</EditButton>
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
      </Container>
    )
  );
};

export default Detail;
