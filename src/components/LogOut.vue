<template>
  <button
    class="inline-block py-2 px-4 text-white no-underline"
    @click="accountLogOut"
  >
    Log Out
  </button>
  <div
    v-if="error"
    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-6"
    role="alert"
  >
    <span class="block sm:inline">{{ this.errorMessage }}</span>
  </div>
</template>

<script>
import { useUserStore } from "../store/user";
export default {
  name: "LogOut",
  setup() {
    const user = useUserStore();
    return { user };
  },
  data() {
    return {
      error: false,
      errorMessage: "",
    };
  },
  methods: {
    async accountLogOut() {
      try {
        await this.user.signOut();
        this.$router.push({ path: "/auth" });
      } catch (e) {
        this.error = true;
        this.errorMessage = "Something wrong happened.";
        console.log(e.message);
      }
    },
  },
};
</script>
