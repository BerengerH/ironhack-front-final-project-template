<template>
  <div>
    <form @submit.prevent="addTask" class="sm:my-16 my-12 mx-[5%] flex flex-col gap-2">
      <label for="new-task">Add a new task</label>
      <div class="flex flex-wrap sm:flex-nowrap gap-3">
        <input
          v-model="newTitle"
          type="text"
          id="new-task"
          placeholder="Enter your task"
          class="w-full border border-gray-400 p-2"
        />
        <input
          type="submit"
          value="Submit"
          class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-1 px-3"
        />
      </div>
    </form>
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
    async addTask() {
      const userId = this.user.user.id;
      console.log(userId);
      await this.tasks.implementTask(this.newTitle, userId);
      this.newTitle = "";
    },
  },
};
</script>