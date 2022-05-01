import { ref, computed } from "vue";

export function useTodos() {
  const todos: any = ref([]);
  const addTodo = (todo: object) => {
    todos.value.push(todo);
  };

  return {
    todos,
    addTodo,
  };
}
