import { Todo } from "../types/Todos";
import * as St from "./styles/InputBox.styles";

const InputBox: React.FC = ({ setTodos }) => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = (e.currentTarget.namedItem("title") as HTMLInputElement)
      .value;
    const body = e.currentTarget.body.value;
    const deadline = e.currentTarget.trip.value;

    setTodos((todos: Todo[]) => [
      ...todos,
      {
        id: Date.now().toString(),
        title: title,
        body: body,
        isDone: false,
        deadline: deadline,
      },
    ]);
    e.currentTarget.reset();
    console.log(title, body, deadline);
  };
  return (
    <St.Container>
      <St.Title onSubmit={onSubmitHandler}>
        <St.TitleInput name="title" placeholder="제목" />
        <St.TitleInput name="body" placeholder="내용" />
        <St.Time>
          <label htmlFor="start">마감일 :</label>
          <St.TimeInput
            type="date"
            id="start"
            name="trip"
            min="2024-01-01"
            max="2026-12-31"
          />
        </St.Time>
        <div className="addBtn">
          <St.AddBtn type="submit" className="btn text-white">
            추가하기
          </St.AddBtn>
        </div>
      </St.Title>
    </St.Container>
  );
};

export default InputBox;
