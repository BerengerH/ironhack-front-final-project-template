<template>
  <div class="my-16 mx-[5%]">
    <fieldset
      @click="filteredTasks"
      class="flex flex-wrap md:gap-16 sm:gap-8 gap-4 justify-center m-4"
    >
      <div class="flex gap-2">
        <input
          v-model="filterSelection"
          type="radio"
          id="open-filter"
          name="status-filter"
          value="open"
        />
        <label for="open-filter">Open</label>
      </div>

      <div class="flex gap-2">
        <input
          v-model="filterSelection"
          type="radio"
          id="pending-filter"
          name="status-filter"
          value="pending"
        />
        <label for="pending-filter">Pending</label>
      </div>

      <div class="flex gap-2">
        <input
          v-model="filterSelection"
          type="radio"
          id="completed-filter"
          name="status-filter"
          value="completed"
        />
        <label for="completed-filter">Completed</label>
      </div>

      <div class="flex gap-2">
        <input
          v-model="filterSelection"
          type="radio"
          id="all-filter"
          name="status-filter"
          value="all"
        />
        <label for="all-filter">All</label>
      </div>
    </fieldset>
    <table class="w-full">
      <thead class="bg-light-blue">
        <tr>
          <th class="border border-black p-2">Task</th>
          <th class="border border-black p-2">Edit task</th>
          <th class="border border-black p-2">Status</th>
          <th class="border border-black p-2">Edit status</th>
          <th class="border border-black p-2">Delete</th>
        </tr>
      </thead>

      <tbody class="border border-black">
        <EditTask
          v-if="toggleEditTask"
          :toggleTaskPopUp="toggleTaskPopUp"
          :currentTaskId="this.currentTaskId"
        />
        <EditTaskStatus
          v-if="toggleEditStatus"
          :toggleStatusPopUp="toggleStatusPopUp"
          :currentTaskId="this.currentTaskId"
        />
        <tr
          v-for="(filteredTask, index) in this.taskStore.filteredTasks"
          class="text-center"
          :key="index"
        >
          <td class="border border-gray-400 p-2 text-left">
            {{ filteredTask.title }}
          </td>
          <td class="border border-gray-400 p-2 w-12">
            <img
              class="w-6 lg:w-8 cursor-pointer m-auto"
              src="../assets/edit-icon.svg"
              alt="Edit logo"
              @click="
                getCurrentId(filteredTask.id);
                toggleTaskPopUp();
              "
            />
          </td>
          <td
            v-if="filteredTask.status === 'open'"
            class="border border-gray-400 p-2"
          >
            Open
          </td>
          <td
            v-else-if="filteredTask.status === 'pending'"
            class="border border-gray-400 p-2"
          >
            Pending
          </td>
          <td
            v-else-if="filteredTask.status === 'completed'"
            class="border border-gray-400 p-2"
          >
            Completed
          </td>
          <td class="border border-gray-400 p-2 w-12">
            <img
              class="w-6 lg:w-8 cursor-pointer m-auto"
              src="../assets/edit-icon.svg"
              alt="Edit logo"
              @click="
                getCurrentId(filteredTask.id);
                toggleStatusPopUp();
              "
            />
          </td>
          <td class="border border-gray-400 p-2 w-12">
            <img
              @click="
                getCurrentId(filteredTask.id);
                trash();
              "
              class="w-4 lg:w-6 cursor-pointer m-auto"
              src="../assets/trash-icon.svg"
              alt="Delete logo"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useTaskStore } from "../store/task";
import EditTask from "./EditTask.vue";
import EditTaskStatus from "./EditTaskStatus.vue";

export default {
  name: "Task",
  data() {
    return {
      currentTitle: "",
      currentTaskId: "",
      toggleEditTask: false,
      toggleEditStatus: false,
      filterSelection: "all",
    };
  },
  components: { EditTask, EditTaskStatus },
  methods: {
    //Method to toggle popup
    toggleTaskPopUp() {
      this.toggleEditTask = !this.toggleEditTask;
    },
    toggleStatusPopUp() {
      this.toggleEditStatus = !this.toggleEditStatus;
    },

    //Method to get the task id
    getCurrentId(value) {
      this.currentTaskId = value;
    },

    //Method to delete a task
    async trash() {
      await this.taskStore.deleteTask(this.currentTaskId);
    },

    //Function to filter tasks
    async filteredTasks() {
      await this.getTasks();
      if (this.filterSelection !== "all") {
        this.taskStore.filteredTasks = this.taskStore.tasks.filter(
          (filteredTask) => filteredTask.status === this.filterSelection
        );
      } else {
        this.taskStore.filteredTasks = this.taskStore.tasks;
      }
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
    this.filteredTasks();
  },
};
</script>
