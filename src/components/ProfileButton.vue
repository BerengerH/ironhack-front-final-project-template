<template>
  <button
    class="inline-block py-2 px-4 text-white no-underline"
    @click="loadProfile"
  >
    Profile
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
export default {
  name: "ProfileButton",
  data() {
    return {
      error: false,
      errorMessage: "",
    };
  },
  methods: {
    async loadProfile() {
      try {
        this.$router.push({ path: "/profile" });
      } catch (e) {
        this.error = true;
        this.errorMessage = "Something wrong happened.";
        console.log(e.message);
      }
    },
  },
};
</script>
