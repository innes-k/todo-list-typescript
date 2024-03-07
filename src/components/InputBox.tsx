import * as St from "./styles/InputBox.styles";
import { Todo } from "../types/Todos";
import { addTodo } from "../api/todos-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const InputBox: React.FC = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newTodo: Todo): Promise<void> => addTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const deadline = formData.get("deadline") as string;

    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      content,
      isDone: false,
      deadline,
    };

    mutation.mutate(newTodo);

    e.currentTarget.reset();
  };
  return (
    <St.Container>
      <St.Title onSubmit={onSubmitHandler} name="hello">
        <St.TitleInput name="title" placeholder="제목" />
        <St.TitleInput name="content" placeholder="내용" />
        <St.Time>
          <label htmlFor="start">마감일 :</label>
          <St.TimeInput
            type="date"
            id="start"
            name="deadline"
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
