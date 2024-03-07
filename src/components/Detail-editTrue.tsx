import { Todo } from "../types/Todos";
import {
  EditButtons,
  EditCancelButton,
  EditCompleteButton,
  EditSection,
} from "./styles/detail-editTrue.style";
import { Time } from "./styles/todoLists.style";

interface TodoProps {
  todo: Todo;
  onEditHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}
const EditTrue = ({ todo, onEditHandler }: TodoProps) => {
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
