<template>
  <div class="input-add">
    <input
      type="text"
      v-model="todoContent"
      @keyup.enter="emitAddTodo"
      :placeholder="holderText"
    />
    <button @click="emitAddTodo">
      <plus-outlined />
    </button>
  </div>
</template>

<script setup lang="ts">
import { PlusOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { TodoParams } from "./type";
const todoContent = ref("");
const props = defineProps({
  tid: Number,
  holderText: String,
});
const emit = defineEmits(["addTodo"]);

const emitAddTodo = () => {
  if (todoContent.value) {
    const todo: TodoParams = {
      id: props.tid,
      content: todoContent.value,
      completed: false,
    };
    emit("addTodo", todo);
    todoContent.value = "";
  }
};
</script>

<style lang="scss">
.input-add {
  display: flex;
  position: relative;

  & > input {
    padding: 15px 52px 15px 18px;
    width: 100%;
    align-items: center;
    border: none;
    outline: none;
    border-radius: 48px;
    box-shadow: 0px 0px 18px rgba($color: #000000, $alpha: 0.18);

    &::placeholder {
      color: #ddd;
    }
  }

  & > button {
    width: 46px;
    height: 46px;
    position: absolute;
    right: 0;
    border-radius: 50%;
    background-color: #1abc9c;
    color: #fff;
    font-size: 26px;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
