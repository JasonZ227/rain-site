import { ref, computed } from "vue";

export default function useTodos() {
  const todos: any = ref([]);
  const addTodo = (todo: object) => {
    todos.value.push(todo);
  };

  return {
    todos,
    addTodo,
  };
}
