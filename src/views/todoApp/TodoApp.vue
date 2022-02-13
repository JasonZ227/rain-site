<script setup lang="ts">
import TodoAdd from "../../components/todoadd/TodoAdd.vue";
import TodoFilter from "../../components/todoFilter/TodoFilter.vue";
import TodoList from "../../components/todolist/TodoList.vue";

import { title, intro, holderText } from "./data";
import useTodos from "../../composables/useTodos";
import { useFilter } from "../../composables/useFilter";

const { todos, addTodo } = useTodos();
const { filter, filteredTodos, changeFilter } = useFilter(todos);
</script>

<template>
  <main>
    <div class="app-container">
      <h1>{{ title }}</h1>
      <TodoAdd
        :tid="todos.length"
        :holderText="holderText"
        @addTodo="addTodo"
      />
      <p>{{ intro }}</p>
      <TodoFilter :selected="filter" @changeFilter="changeFilter" />
      <TodoList :todos="filteredTodos" />
    </div>
  </main>
</template>

<style lang="scss">
main {
  width: 100%;
  min-height: 100vh;
  display: inline-block;

  .app-container {
    margin: 100px auto;
    width: 95%;
    max-width: 500px;
    max-height: 620px;

    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.15);
    padding: 48px 28px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    background: rgb(247, 246, 251);

    h1 {
      margin: 22px 0;
      font-size: 28px;
      font-weight: 600;
      color: #393c69;
    }

    p {
      margin: 30px 0 0 0;
      color: #bbb;
      font-size: 12px;
    }
  }
}
</style>
