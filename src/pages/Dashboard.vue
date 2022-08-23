<template>
  <div>
    <LogOut />
    <div class="mx-auto my-16 flex justify-center gap-3">
      <h2>All your tasks</h2>
      <img src="" alt="Tasks logo" />
    </div>
    <section>
      <AddTask />
      <div class="my-16 mx-[5%]">
        <table class="table-auto border w-full">
          <thead>
            <tr>
              <th class="border">Task</th>
              <th class="border">Edit task</th>
              <th class="border">Status</th>
              <th class="border">Edit status</th>
              <th class="border">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="allTasks" v-for="allTask in allTasks">
              <td class="border p-3">{{allTask.title}}</td>
              <td class="border p-3"><img src="" alt="Edit logo" /></td>
              <td v-if="allTask.is_complete" class="border p-3">Completed</td>
              <td v-else class="border p-3">In progress</td>
              <td class="border p-3"><img src="" alt="Edit logo" /></td>
              <td class="border p-3"><img src="" alt="Delete logo" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import { useTaskStore } from "../store/task";
import LogOut from "../components/LogOut.vue";
import AddTask from "../components/AddTask.vue";

export default {
  name: "Dashboard",
  setup() {
    const taskStore = useTaskStore();
    const getTasks = async () => {
      try {
        await taskStore.fetchTasks();
        console.log(taskStore.tasks);
      } catch (e) {
        console.log("Function getTasks had issue fetching data from fetchTasks", e.message);
      }
    };
    return { getTasks, taskStore };
  },
  data() {
    return {
      allTasks: null,
    };
  },
  components: {
    LogOut,
    AddTask,
  },
  async mounted() {
    await this.getTasks();
    this.allTasks = this.taskStore.tasks;
    console.log(this.allTasks);
  },
};
</script>
