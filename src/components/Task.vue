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
        <tr v-for="(allTask, index) in allTasks" class="text-center">
          <td class="border p-2 text-left">{{ allTask.title }}</td>
          <td class="border p-2 w-12">
            <img src="../assets/edit-icon.svg" alt="Edit logo" />
          </td>
          <td v-if="allTask.is_complete" class="border p-2">Completed</td>
          <td v-else class="border p-2">In progress</td>
          <td class="border p-2 w-12">
            <img src="../assets/edit-icon.svg" alt="Edit logo" />
          </td>
          <td class="border p-2 w-12">
            <img
              @click="trash(index)"
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

export default {
  name: "Task",
  data() {
    return {
      allTasks: null,
      editedTitle: "",
      currentTitle: "",
      currentTaskId: "",
    };
  },
  components: {},
  methods: {
    editTask() {
      this.currentTitle = this.allTasks[index].title;
      //define the const Edited title (using v-model?)
      this.taskStore.editTitle(this.currentTitle, this.editedTitle);
    },
    trash(index) {
      this.currentTaskId = this.allTasks[index].id;
      this.taskStore.deleteTask(this.currentTaskId);
                      this.$router.go();

    },
  },
  setup() {
    const taskStore = useTaskStore();
    const getTasks = async () => {
      try {
        await taskStore.fetchTasks();
        console.log(taskStore.tasks);
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
    this.allTasks = this.taskStore.tasks;
    console.log(this.allTasks);
  },
};
</script>
