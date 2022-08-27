<template>
  <div class="my-16 mx-[5%]">
    <table class="table-auto border w-full">
      <thead>
        <tr>
          <th class="border p-2">Task</th>
          <th class="border p-2">Edit task</th>
          <th class="border p-2">Status</th>
          <th class="border p-2">Edit status</th>
          <th class="border p-2">Delete</th>
        </tr>
      </thead>

      <tbody>
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
          v-for="(task, index) in taskStore.tasks"
          class="text-center"
          :key="index"
        >
          <td class="border p-2 text-left">{{ task.title }}</td>
          <td class="border p-2 w-12">
            <img
              class="w-6 lg:w-8 cursor-pointer m-auto"
              src="../assets/edit-icon.svg"
              alt="Edit logo"
              @click="
                getCurrentId(index);
                toggleTaskPopUp();
              "
            />
          </td>
          <td v-if="task.is_complete" class="border p-2">Completed</td>
          <td v-else class="border p-2">In progress</td>
          <td class="border p-2 w-12">
            <img
              class="w-6 lg:w-8 cursor-pointer m-auto"
              src="../assets/edit-icon.svg"
              alt="Edit logo"
              @click="
                getCurrentId(index);
                toggleStatusPopUp();
              "
            />
          </td>
          <td class="border p-2 w-12">
            <img
              @click="
                getCurrentId(index);
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
    getCurrentId(index) {
      this.currentTaskId = this.taskStore.tasks[index].id;
    },

    //Method to delete a task
    async trash() {
      await this.taskStore.deleteTask(this.currentTaskId);
      this.getTasks();
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
