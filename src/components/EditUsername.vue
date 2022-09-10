<template>
  <div>
    <form
      @submit.prevent="editUsername(toggleUsernamePopUp())"
      class="sticky bg-white flex flex-col items-center w-full"
    >
      <label for="edit-task" class="p-5">Edit your username</label>
      <input
        v-model="editedUsername"
        type="text"
        id="edit-task"
        placeholder="Write the new task description"
        class="p-2 w-[90%] border border-solid border-black"
      />
      <div class="flex gap-4 justify-center m-4">
        <input
          type="submit"
          value="Submit"
          class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-1 px-3"
        />
        <button
          class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-1 px-3"
          @click="toggleUsernamePopUp"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { useUserStore } from "../store/user";

export default {
  name: "EditUsername",
  props: ["toggleUsernamePopUp"],
  data() {
    return {
      editedUsername: "",
    };
  },
  methods: {
    async editUsername(togglePopUp) {
      await this.user.editUsername(this.user.userInfo[0].user_id, this.editedUsername);
      togglePopUp;
      this.editedUsername = "";
    },
  },
  setup() {
    const user = useUserStore();
    return { user };
  },
};
</script>