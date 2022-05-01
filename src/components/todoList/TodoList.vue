<template>
  <div class="todo-list">
    <ListItem v-for="todo in todos" :key="todo.id" :todoItem="todo" @changeState="todo.completed = $event.target.checked" />
  </div>
</template>

<script setup lang="ts">
import ListItem from "./ListItem.vue";
const props = defineProps({
  todos: Object,
});
</script>

<style lang="scss">
.todo-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: auto;
}
</style>
