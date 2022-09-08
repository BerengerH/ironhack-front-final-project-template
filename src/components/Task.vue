<template>
  <div class="my-16 mx-[5%] bg-white p-6">
    <fieldset
      @click="filteredTasks"
      class="flex flex-wrap md:gap-16 sm:gap-8 gap-4 justify-center m-4 mb-8 border border-black w-full mx-auto pb-3"
    >
      <legend class="mx-auto mb-4 font-bold">
        Filter the tasks you want to see
      </legend>
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
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-light-blue">
          <tr>
            <th class="border border-black p-2">Task</th>
            <th class="border border-black p-2">Status</th>
            <th class="border border-black p-2">Deadline</th>
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
          <EditDeadline
            v-if="toggleEditDeadline"
            :toggleDeadlinePopUp="toggleDeadlinePopUp"
            :currentTaskId="this.currentTaskId"
          />
          <tr
            v-for="(filteredTask, index) in this.taskStore.filteredTasks"
            class="text-center"
            :key="index"
          >
            <td
              class="border border-gray-400 p-2 text-left cursor-pointer"
              @click="
                getCurrentId(filteredTask.id);
                toggleTaskPopUp();
              "
            >
              {{ filteredTask.title }}
            </td>
            <td
              class="border border-gray-400 p-2 cursor-pointer"
              @click="
                getCurrentId(filteredTask.id);
                toggleStatusPopUp();
              "
            >
              {{ filteredTask.status }}
            </td>
            <td
              class="border border-gray-400 p-2 cursor-pointer"
              @click="
                getCurrentId(filteredTask.id);
                toggleDeadlinePopUp();
              "
            >
              {{ filteredTask.deadline }}
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
  </div>
</template>

<script>
import { useTaskStore } from "../store/task";
import EditTask from "./EditTask.vue";
import EditTaskStatus from "./EditTaskStatus.vue";
import EditDeadline from "./EditDeadline.vue";
export default {
  name: "Task",
  data() {
    return {
      currentTitle: "",
      currentTaskId: "",
      toggleEditTask: false,
      toggleEditStatus: false,
      toggleEditDeadline: false,
      filterSelection: "all",
    };
  },
  components: { EditTask, EditTaskStatus, EditDeadline },
  methods: {
    //Method to toggle popup
    toggleTaskPopUp() {
      this.toggleEditTask = !this.toggleEditTask;
    },
    toggleStatusPopUp() {
      this.toggleEditStatus = !this.toggleEditStatus;
    },

    toggleDeadlinePopUp() {
      this.toggleEditDeadline = !this.toggleEditDeadline;
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
