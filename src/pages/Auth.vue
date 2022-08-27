<template>
  <div class="bg-white mx-auto my-[5%] max-w-[90%] flex items-center flex-wrap">
    <section v-if="haveAccount" class="my-4 md:my-10 w-full md:w-1/2">
      <LogIn />
      <div class="text-center pt-6 pb-6">
        <button @click="toogleRegisterLogin" class="underline">
          Create an accout
        </button>
      </div>
    </section>
    <section v-else class="my-4 md:my-10 w-full md:w-1/2">
      <Register />
      <div class="text-center pt-6 pb-6">
        <button @click="toogleRegisterLogin" class="underline">
          I already have an account
        </button>
      </div>
    </section>
    <div class="w-1/2 shadow-2xl">
      <img
        src="../assets/tasks.avif"
        alt="Images with many post-it"
        class="object-cover w-full h-screen hidden md:block"
      />
    </div>
  </div>
</template>

<script>
import LogIn from "../components/LogIn.vue";
import Register from "../components/Register.vue";

export default {
  name: "Auth",
  data() {
    return {
      haveAccount: true,
    };
  },
  components: {
    LogIn,
    Register,
  },
  methods: {
    toogleRegisterLogin() {
      this.haveAccount = !this.haveAccount;
    },
  },
};
</script>
