<template>
  <div>
    <form
      @submit.prevent="editDeadline(currentTaskId, toggleDeadlinePopUp())"
      class="sticky bg-white flex flex-col items-center w-full"
    >
      <label for="edit-deadline" class="p-5">Change the deadline</label>
      <input
        v-model="editedDeadline"
        type="date"
        id="edit-deadline"
        class="p-2 w-[90%] border border-solid border-black"
      />
      <div class="flex gap-4 justify-center m-4">
        <input
          type="submit"
          value="Submit"
          class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-1 px-3"
        />
        <button
          class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-1 px-3"
          @click="toggleDeadlinePopUp"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { useTaskStore } from "../store/task";

export default {
  name: "EditDeadline",
  props: ["toggleDeadlinePopUp", "currentTaskId"],
  data() {
    return {
      editedDeadline: null ,
    };
  },
  methods: {
    async editDeadline(el, togglePopUp) {
      await this.taskStore.editDeadline(el, this.editedDeadline);
      togglePopUp;
      this.editedDeadline = null ;
    },

  },
  setup() {
    const taskStore = useTaskStore();

    return { taskStore };
  },
};
</script>
