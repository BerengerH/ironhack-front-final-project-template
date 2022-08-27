<template>
  <div class="sticky bg-white flex flex-col items-center w-full">
    <label for="edit-task" class="p-5">Edit your task</label>
    <input
      v-model="editedTitle"
      type="text"
      id="edit-task"
      placeholder="Write the new task description"
      class="p-2 w-[90%] border border-solid border-black"
    />
    <div class="flex gap-4 justify-center m-4">
      <button
        class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-1 px-3"
        @click="editTask(currentTaskId, toggleTaskPopUp())"
      >
        Submit
      </button>
      <button
        class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-1 px-3"
        @click="toggleTaskPopUp"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "../store/task";

export default {
  name: "EditTask",
  props: ["toggleTaskPopUp", "currentTaskId"],
  data() {
    return {
      editedTitle: "",
    };
  },
  methods: {
    async editTask(el, togglePopUp) {
      await this.taskStore.editTitle(el, this.editedTitle);
      togglePopUp;
      this.getTasks();
      this.editedTitle = "";
    },
  },
  setup() {
    const taskStore = useTaskStore();

    //Getting all tasks from the API - function called in created()
    const getTasks = async () => {
      try {
        await taskStore.fetchTasks();
      } catch (e) {
        console.log(
          "Function getTasks had issue fetching data from fetchTasks",
          e.message
        );
      }
    };
    return { getTasks, taskStore };
  },
  async created() {
    await this.getTasks();
    console.log(this.taskStore.tasks);
  },
};
</script>
