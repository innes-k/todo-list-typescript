import { useDispatch } from "react-redux";
import * as St from "./styles/InputBox.styles";
import { addTodo } from "../redux/modules/todoSlice";

const InputBox: React.FC = () => {
  const dispatch = useDispatch();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = e.currentTarget.title.value;
    const body = e.currentTarget.body.value;
    const deadline = e.currentTarget.trip.value;

    const newTodo = {
      id: Date.now().toString(),
      title: title,
      body: body,
      isDone: false,
      deadline: deadline,
    };

    dispatch(addTodo(newTodo));

    e.currentTarget.reset();
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
