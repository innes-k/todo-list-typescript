import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/todos-api";
import { Todo } from "../types/Todos";

export interface TodosType {
  data: Todo[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

export const useTodoQuery = () => {
  const {
    data: todos,
    isLoading,
    isError,
  }: TodosType = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return { todos, isLoading, isError };
};
