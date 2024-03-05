import * as St from "./styles/InputBox.styles";

// input Box 컴포넌트 (상단의 제목, 내용, 추가하기)
function InputBox({ setTodos }) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const deadline = e.target.trip.value;

    setTodos((todo) => [
      ...todo,
      {
        id: Date.now(),
        title: title,
        body: body,
        isDone: false,
        deadline: deadline,
      },
    ]);
    e.target.reset();
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
}

export default InputBox;
