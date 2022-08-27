<template>
  <div>
    <LogOut />
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
