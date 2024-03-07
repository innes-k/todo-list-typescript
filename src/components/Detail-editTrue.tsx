import { useNavigate } from "react-router-dom";
import { useTodoMutation } from "../hooks/useTodoMutation";
import { Todo } from "../types/Todos";
import {
  EditButtons,
  EditCancelButton,
  EditCompleteButton,
  EditSection,
} from "./styles/detail-editTrue.style";
import { Time } from "./styles/todoLists.style";

// props type
interface OwnProps {
  todo: Todo;
  setIsEdit: (value: React.SetStateAction<boolean>) => void;
}

const EditTrue = ({ todo, setIsEdit }: OwnProps) => {
  const navigate = useNavigate();

  // custom hook - useTodoMutation()
  const { updateTodoItem } = useTodoMutation();

  // '수정완료'
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
    <>
      <form onSubmit={onEditHandler}>
        <EditSection>
          <input type="text" name="title" defaultValue={todo.title}></input>
          <input type="text" name="content" defaultValue={todo.content}></input>
          <Time>
            {new Date(todo.deadline).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long", // "long"을 사용하면 월 이름이 됨
              day: "numeric",
            })}
            까지
          </Time>
        </EditSection>
        <EditButtons>
          <EditCompleteButton type="submit">수정완료</EditCompleteButton>
          <EditCancelButton>취소하기</EditCancelButton>
        </EditButtons>
      </form>
    </>
  );
};

export default EditTrue;
