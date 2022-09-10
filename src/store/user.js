// /store/user.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    userInfo: null,
  }),

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },

    async fetchProfile(id) {
      const { data: userData } = await supabase
      .from("usersinfo")
      .select()
      .eq('user_id', id);
      this.userInfo = userData;
      console.log('fetchprofile: ', this.userInfo);
    },

    // Create account
    async signUp(email, password, name) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) this.user = user;
      console.log(this.user);
      try {
        const { data, error } = await supabase
          .from("usersinfo")
          .insert([{ user_id: this.user.id, username: name }]);
      } catch (error) {
        console.log(error.message);
      }
    },

    // Hacer sign in
    async signIn(email, password) {
      const { user, session, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },

    // Hacer log out
    async signOut() {
      const { error } = await supabase.auth.signOut();
    },


        // Edit the username
        async editUsername(id, editedUsername) {
          try {
            const { data, error } = await supabase
              .from("usersinfo")
              .update({ username: editedUsername })
              .match({ user_id: id });
            this.fetchProfile(id);
          } catch (error) {
            console.log(error.message);
          }
        },

    persist: {
      enabled: true,
      strategies: [
        {
          key: "user",
          storage: localStorage,
        },
      ],
    },
  },
});
