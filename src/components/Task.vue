<template>
    
</template>

<script>
import { useTaskStore } from "../store/task";

export default {
  name: "Task",
  setup() {
    const tasks = useTaskStore();
    return { tasks };
  },
  data() {
    return {};
  },
};
</script>
