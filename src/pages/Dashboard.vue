<template>
    <Navbar />
    <section>
      <AddTask />
      <Task/>
    </section>
    <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import AddTask from "../components/AddTask.vue";
import Task from "../components/Task.vue";
import Footer from "../components/Footer.vue";

export default {
  inheritAttrs: false,
  name: "Dashboard",
  components: {
    Navbar,
    AddTask,
    Task,
    Footer,
},
};
</script>