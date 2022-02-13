import { ref, computed } from "vue";
import { TodoParams } from "../components/todoAdd/type";

export type EventChar = "all" | "done" | "todo";

export function useFilter(todos: any) {
  const filter = ref("all");
  const filteredTodos = computed(() => {
    switch (filter.value) {
      case "done":
        return todos.value.filter(
          (todo: TodoParams): boolean => todo.completed
        );
      case "todo":
        return todos.value.filter(
          (todo: TodoParams): boolean => !todo.completed
        );
      default:
        return todos.value;
    }
  });

  // type changeFilterFunc = (e: EventChar) => void
  const changeFilter = (e: EventChar) => {
    filter.value = e;
  };

  return {
    filter,
    filteredTodos,
    changeFilter,
  };
}
