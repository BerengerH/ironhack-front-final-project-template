<template>
  <div>
    <LogOut />
    <div class="mx-auto my-16 flex justify-center gap-3">
      <h2>All your taks</h2>
      <img src="" alt="Tasks logo" />
    </div>
    <section>
      <AddTask/>  
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
            <tr>
              <td class="border p-3">The title of the task</td>
              <td class="border p-3"><img src="" alt="Edit logo" /></td>
              <td class="border p-3">The status of the task</td>
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
    const tasks = useTaskStore();
    const getTasks = async () => {
      try {
        await this.tasks.fetchTasks();
        console.log(this.tasks);
      } catch (e) {
        console.log("No responde", e.message);
      }
    };
    return { getTasks, tasks };
  },
  data() {
    return {};
  },
  components: {
    LogOut,
    AddTask,
  },
  mounted() {
    this.getTasks();
  },
};
</script>
