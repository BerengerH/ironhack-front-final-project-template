<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-medium-blue sm:p-5 p-3 sticky w-full z-10 top-0"
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
      <ul class="list-reset flex justify-end flex-1 items-center">
        <li>
          <ProfileButton />
        </li>
        <li>
          <TasksButton />
        </li>
        <li>
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
