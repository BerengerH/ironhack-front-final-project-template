<template>
  <div class="my-16 mx-[5%] flex flex-col gap-2">
    <label for="new-task">Add a new task</label>
    <div class="flex flex-wrap gap-3">
      <input
        v-model="newTitle"
        type="text"
        id="new-task"
        placeholder="Enter your task"
        class="w-[90%]"
      />
      <button
        class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-1 px-3"
        @click="addTask"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "../store/task";
import { useUserStore } from "../store/user";

export default {
  name: "AddTask",
  setup() {
    const tasks = useTaskStore();
    const user = useUserStore();

    return { tasks, user };
  },
  data() {
    return {
      newTitle: "",
    };
  },
  methods: {
    addTask() {
      const userId = this.user.user.id;
      console.log(userId);
      this.tasks.implementTask(this.newTitle, userId);
      this.newTitle = "";
    },
  },
};
</script>
