import * as St from "../components/styles/todoLists.style";
import { Container } from "../components/styles/InputBox.styles";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Todo } from "../types/Todos";
import { useTodoQuery } from "../hooks/useTodoQuery";
import EditTrue from "../components/Detail-editTrue";
import EditFalse from "../components/Detail-editFalse";

const Detail = () => {
  const paramsId = useParams().id;
  const [isEdit, setIsEdit] = useState(false);

  // custom hook - useTodoQuery()
  const { todos, isLoading, isError } = useTodoQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>error</div>;

  const todo: Todo | undefined = todos?.find((todo) => todo.id === paramsId);

  return (
    todo && (
      <Container>
        <St.TodoList>
          {isEdit ? (
            <EditTrue todo={todo} setIsEdit={setIsEdit} />
          ) : (
            <EditFalse todo={todo} setIsEdit={setIsEdit} />
          )}
        </St.TodoList>
      </Container>
    )
  );
};

export default Detail;
