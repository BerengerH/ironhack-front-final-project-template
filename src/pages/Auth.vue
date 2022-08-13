<template>
  <LogIn />
  <SignIn />
  <button>Create an account</button>
  <button>Already have an account? Login</button>
</template>

<script>
import LogIn from "../components/LogIn.vue";
import SignIn from "../components/SignIn.vue";

export default {
  components: {
    LogIn,
    SignIn,
  },
};
</script>
