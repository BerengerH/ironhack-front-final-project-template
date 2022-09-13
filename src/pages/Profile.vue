<template>
  <Navbar />
  <UserInfo />
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import UserInfo from "../components/UserInfo.vue";
import Footer from "../components/Footer.vue";

export default {
  inheritAttrs: false,
  name: "Profile",
  components: {
    Navbar,
    UserInfo,
    Footer,
  },
};
</script>
