<template>
  <div class="bg-white flex flex-col items-center">
    <fieldset
      class="flex flex-wrap md:gap-16 sm:gap-8 gap-4 justify-center m-4"
    >
      <div class="flex gap-2">
        <input
          v-model="editedStatus"
          type="radio"
          id="open"
          name="status"
          value="open"
          @keyup.enter="editStatus(currentTaskId, toggleStatusPopUp()), filterSelectionAll()"
        />
        <label for="open">Open</label>
      </div>

      <div class="flex gap-2">
        <input
          v-model="editedStatus"
          type="radio"
          id="pending"
          name="status"
          value="pending"
          @keyup.enter="editStatus(currentTaskId, toggleStatusPopUp()), filterSelectionAll()"
        />
        <label for="pending">Pending</label>
      </div>

      <div class="flex gap-2">
        <input
          v-model="editedStatus"
          type="radio"
          id="completed"
          name="status"
          value="completed"
          @keyup.enter="editStatus(currentTaskId, toggleStatusPopUp()), filterSelectionAll()"
        />
        <label for="completed">Completed</label>
      </div>
    </fieldset>

    <div class="flex gap-4 justify-center m-4">
      <button
        class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-1 px-3"
        @click="editStatus(currentTaskId, toggleStatusPopUp()), filterSelectionAll()"
      >
        Submit
      </button>
      <button
        class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-1 px-3"
        @click="toggleStatusPopUp"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "../store/task";
export default {
  name: "EditTaskStatus",
  props: ["toggleStatusPopUp", "currentTaskId", "filterSelectionAll"],
  data() {
    return {
      editedStatus: "",
    };
  },
  methods: {
    async editStatus(el, togglePopUp) {
      await this.taskStore.editStatus(el, this.editedStatus);
      togglePopUp;
      this.editedStatus = "";
    },
  },
  setup() {
    const taskStore = useTaskStore();
    return { taskStore };
  },
};
</script>