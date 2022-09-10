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
          v-model="username"
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
    <p class="text-center text-3xl p-4">{{ this.confirmationMessage }}</p>
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
      username: "",
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
      const mailFormat = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
      const passwordRegex =
        /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,}$/;

      if (this.username === "") {
        this.errorMessage = "Please, enter a username";
      } else if (!this.email.match(mailFormat)) {
        this.error = true;
        this.errorMessage = "Please, enter a valid email address";
      } else if (this.email !== this.confirmedEmail) {
        this.error = true;
        this.errorMessage =
          "Make sure your email is matching the previous input.";
      } else if (!this.password.match(passwordRegex)) {
        this.error = true;
        this.errorMessage =
          "The password should be at least 8 characters long, have 1 digit, 1 uppercase, 1 lowercase and 1 special symbol.";
      } else if (this.password !== this.confirmedPassword) {
        this.error = true;
        this.errorMessage =
          'The password in the "confirm password" is different.';
      } else {
        try {
          await this.user.signUp(this.email, this.password, this.username);
          this.confirmation = true;
          this.confirmationMessage = `Just one more step, got to: ${this.email} and confirm your email!`;
        } catch (e) {
          this.error = true;
          this.errorMessage = e.message;
          console.log(e.message);
        }
      }
    },
  },
};
</script>
