<template>
  <div>
    <LogOut />
    <div class="mx-auto my-16 flex justify-center gap-3">
      <h2>All your tasks</h2>
      <img src="" alt="Tasks logo" />
    </div>
    <section>
      <AddTask />
      <Task/>
    </section>
  </div>
</template>

<script>
import LogOut from "../components/LogOut.vue";
import AddTask from "../components/AddTask.vue";
import Task from "../components/Task.vue";


export default {
  name: "Dashboard",
  components: {
    LogOut,
    AddTask,
    Task
  },
};
</script>
