<template>
  <div class="filters">
    <span
      v-for="filter in filters"
      :key="filter.value"
      class="filter"
      @click="$emit('changeFilter', filter.value)"
      :class="{ active: selected === filter.value }"
    >
      {{ filter.label }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { filters } from "./data";
const props = defineProps({
  selected: String,
});
</script>

<style lang="scss">
.filters {
  display: flex;
  margin: 30px 0 30px 0;

  .filter {
    margin-right: 20px;
    color: #c1c2cb;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }

  .active {
    color: #737592;
    transform: scale(1.2);
  }
}
</style>
