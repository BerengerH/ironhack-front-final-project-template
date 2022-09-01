<template>
  <div
    v-if="!confirmation"
    class="flex flex-col justify-center md:justify-start my-auto pt-6 md:pt-0 px-8 md:px-24 lg:px-32"
  >
    <p class="text-center text-3xl">Join Us</p>
    <form @submit.prevent="accountRegistration" class="flex flex-col pt-3">
      <div class="flex flex-col pt-4">
        <label for="userName" class="text-lg">User name</label>
        <input
          type="text"
          id="userName"
          placeholder="Enter a user name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

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
        <label for="confirm-email" class="text-lg">Confirm your email</label>
        <input
          v-model="confirmedEmail"
          type="email"
          id="confirm-email"
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

      <div class="flex flex-col pt-4">
        <label for="confirm-password" class="text-lg">Confirm Password</label>
        <input
          v-model="confirmedPassword"
          type="password"
          id="confirm-password"
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
        value="Register"
        class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
      />
    </form>
  </div>
  <div v-else>
    <p class="text-center text-3xl">{{ this.confirmationMessage }}</p>
  </div>
</template>

<script>
import { useUserStore } from "../store/user";

export default {
  name: "Register",
  setup() {
    const user = useUserStore();
    return { user };
  },
  data() {
    return {
      email: "",
      confirmedEmail: "",
      password: "",
      confirmedPassword: "",
      error: false,
      errorMessage: "",
      confirmation: false,
      confirmationMessage: "",
    };
  },
  methods: {
    async accountRegistration() {
      
      if (this.email !== this.confirmedEmail) {
        this.error = true;
        this.errorMessage =
          "Make sure your email is matching the previous input.";
      } else if (this.password !== this.confirmedPassword) {
        this.error = true;
        this.errorMessage =
          'The password in the "confirm password" is different.';
      } else if (!this.user.signUp) {
        this.error = true;
        this.errorMessage =
          'The password in the "confirm password" is different.';
      } else {
         await this.user.signUp(this.email, this.password);
        this.confirmation = true;
        this.confirmationMessage =
          "Just one more step, got to your email to confirm it!";
      }
    },
  },
};
</script>
