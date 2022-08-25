<template>
  <div class="fixed bg-white flex flex-col items-center w-[90%]">
    <label for="edit-task" class="p-5">Edit your task</label>
    <input
      v-model="editedTitle"
      type="text"
      id="edit-task"
      placeholder="Write the new task description"
      class="p-2 w-[80%] border border-solid border-black"
    />
    <div class="flex gap-4 justify-center m-4">
      <button
        class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-1 px-3"
        
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
  props: [
    'toggleTaskPopUp',

  ],
  data(){
    return{
    editedTitle: "",
    }
  },
  methods: {
    editTask() {
      this.taskStore.editTitle(currentTitle, this.editedTitle);
    },
    },
   setup() {
    const taskStore = useTaskStore();
    return { taskStore };
  },
};
</script>
