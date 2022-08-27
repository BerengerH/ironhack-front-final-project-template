<template>
    <nav class="flex items-center justify-between flex-wrap bg-medium-blue p-6 sticky w-full z-10 top-0">
        <div class="flex items-center flex-shrink-0 text-white">
            <a class="text-white no-underline hover:text-white hover:no-underline" href="/">
                <img class="w-20" src="../assets/brand-logo-transparent.png" alt="Brand Logo">
            </a>
        </div>

        <div>
            <ul class="list-reset lg:flex justify-end flex-1 items-center">
                <li class="mr-3">
                    <button class="inline-block py-2 px-4 text-white no-underline" @click="accountLogOut">
                        Log Out
                    </button>
                </li>
            </ul>
        </div>
    </nav>
    <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-6"
        role="alert">
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
                this.$router.go();
            } catch (e) {
                this.error = true;
                this.errorMessage = "Something wrong happened.";
                console.log(e.message);
            }
        },
    },
};
</script>
