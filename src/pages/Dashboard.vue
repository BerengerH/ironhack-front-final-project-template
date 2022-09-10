<template>
  <div>
    <Navbar />
    <section>
      <AddTask />
      <Task/>
    </section>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import AddTask from "../components/AddTask.vue";
import Task from "../components/Task.vue";
export default {
  name: "Dashboard",
  components: {
    Navbar,
    AddTask,
    Task
  },
};
</script>