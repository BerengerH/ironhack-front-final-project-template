<template>
  <div
    class="flex flex-col justify-center md:justify-start my-auto pt-6 md:pt-0 px-8 md:px-24 lg:px-32"
  >
    <p class="text-center text-3xl">Welcome to TaskManager</p>
    <form @submit.prevent="accountLogIn" class="flex flex-col pt-3 md:pt-8">
      <div class="flex flex-col pt-4">
        <label for="email" class="text-lg">Email</label>
        <input
          v-model="email"
          type="email"
          id="email"
          placeholder="your@email.com"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="flex flex-col pt-4">
        <label for="password" class="text-lg">Password</label>
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="Password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div
        v-if="error"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-6"
        role="alert"
      >
        <span class="block sm:inline">{{ this.errorMessage }}</span>
      </div>

      <input
        type="submit"
        value="Log In"
        class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
      />
    </form>
  </div>
</template>

<script>
import { useUserStore } from "../store/user";

export default {
  name: "LogIn",
  setup() {
    const user = useUserStore();
    return { user };
  },
  data() {
    return {
      email: "",
      password: "",
      error: false,
      errorMessage: "",
    };
  },
  methods: {
    async accountLogIn() {
      try {
        await this.user.signIn(this.email, this.password);
        this.$router.push("/");
      } catch (e) {
        this.error = true;
        this.errorMessage = "The email or password is incorrect.";
        console.log(e.message);
      }
    },
  },
};
</script>
