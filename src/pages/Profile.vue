<template>
  <div>
    <Navbar />
    <UserInfo />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import UserInfo from "../components/UserInfo.vue";

export default {
  name: "Profile",
  components: {
    Navbar,
    UserInfo,
  },
};
</script>
