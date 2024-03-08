import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, toggleTodo, updateTodo } from "../api/todos-api";
import { Todo } from "../types/Todos";

interface UpdateTodoType {
  todo: Todo;
  newTitle: string;
  newContent: string;
}

export const useTodoMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTodoItem } = useMutation({
    mutationFn: (id: string) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const { mutate: toggleTodoItem } = useMutation({
    mutationFn: (todo: Todo) => toggleTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const { mutate: updateTodoItem } = useMutation({
    mutationFn: ({ todo, newTitle, newContent }: UpdateTodoType) =>
      updateTodo(todo, newTitle, newContent),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  return { deleteTodoItem, toggleTodoItem, updateTodoItem };
};
