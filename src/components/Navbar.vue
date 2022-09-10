<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-medium-blue p-6 sticky w-full z-10 top-0"
  >
    <div class="flex items-center flex-shrink-0 text-white">
      <a
        class="text-white no-underline hover:text-white hover:no-underline"
        href="/"
      >
        <img
          class="w-20"
          src="../assets/brand-logo-transparent.png"
          alt="Brand Logo"
        />
      </a>
    </div>
    <div>
      <ul class="list-reset lg:flex justify-end flex-1 items-center">
        <li class="mr-3">
          <ProfileButton />
          <TasksButton />
          <LogOut />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useUserStore } from "../store/user";
import LogOut from "./LogOut.vue";
import UserInfo from "./UserInfo.vue";
import ProfileButton from "./ProfileButton.vue";
import TasksButton from "./TasksButton.vue";

export default {
  name: "Navbar",
  setup() {
    const user = useUserStore();
    return { user };
  },
  components: { LogOut, UserInfo, ProfileButton, TasksButton },
};
</script>
