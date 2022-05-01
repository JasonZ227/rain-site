<template>
  <div class="todo-item" :class="{ done: todoItem.completed }">
    <label>
      <input type="checkbox" :checked="todoItem.completed" @click="$emit('changeState', $event)" />
      {{ todoItem.content }}
      <span class="check-btn"></span>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  todoItem: Object,
});
</script>

<style lang="scss">
.todo-item {
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  padding: 16px 10px;

  &:hover {
    opacity: 0.6;
  }

  & > label {
    position: relative;
    display: flex;
    align-items: center;

    .check-btn {
      position: absolute;
      top: 0;

      &::before,
      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }

      &::before {
        border: 1px solid #1abc9c;
      }

      &::after {
        transition: 0.4s;
        background-color: #1abc9c;
        transform: translate(6%, 6%) scale(0.6);
        opacity: 0;
      }
    }

    input {
      margin-right: 16px;
      opacity: 0;

      &:checked + .check-btn::after {
        opacity: 1;
      }
    }
  }
}

.done {
  label {
    text-decoration: line-through;
    font-style: italic;
  }
}
</style>
