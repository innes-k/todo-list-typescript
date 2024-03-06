import * as St from "./styles/InputBox.styles";
import { Todo } from "../types/Todos";
import { addTodo } from "../api/todos-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const InputBox: React.FC = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newTodo: Todo): Promise<void> => addTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const titleValue = e.currentTarget.titleValue.value;
    const body = e.currentTarget.body.value;
    const deadline = e.currentTarget.trip.value;

    const newTodo: Todo = {
      id: Date.now().toString(),
      title: titleValue,
      body: body,
      isDone: false,
      deadline: deadline,
    };

    // addTodo(newTodo);
    mutation.mutate(newTodo);

    e.currentTarget.reset();
  };
  return (
    <St.Container>
      <St.Title onSubmit={onSubmitHandler} name="hello">
        <St.TitleInput name="titleValue" placeholder="제목" />
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
