<template>
  <section
    v-if="this.user.userInfo"
    class="my-16 mx-[5%] bg-white p-6 flex flex-col gap-8"
  >
    <div class="flex flex-wrap sm:gap-4 gap-2">
      <p class="font-medium">Username:</p>
      <p>{{ this.user.userInfo[0].username }}</p>
      <img
        src="../assets/edit-icon.svg"
        alt="Edit icon"
        class="w-5 cursor-pointer"
        @click="toggleUsernamePopUp()"
      />
    </div>
    <EditUsername
      v-if="toggleUsername"
      :toggleUsernamePopUp="toggleUsernamePopUp"
    />

    <div class="flex flex-wrap sm:gap-4 gap-2">
      <p class="font-medium">Email:</p>
      <p>{{ this.user.user.email }}</p>
    </div>
  </section>
</template>

<script>
import { useUserStore } from "../store/user";
import EditUsername from "./EditUsername.vue";

export default {
  name: "userProfile",
  data() {
    return {
      toggleUsername: false,
    };
  },
  methods: {
    toggleUsernamePopUp() {
      this.toggleUsername = !this.toggleUsername;
    },
  },
  setup() {
    const user = useUserStore();
    return { user };
  },
  async created() {
    await this.user.fetchUser();
    await this.user.fetchProfile(this.user.user.id);
  },
  components: { EditUsername },
};
</script>
