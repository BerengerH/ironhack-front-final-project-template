// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {

    // Fetch the data from the API
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select()
        .order("id", { ascending: false });
      this.tasks = tasks;
    },

    // Add data to the API (POST)
    async implementTask(taskTitle, UserId) {
      try {
        const { data, error } = await supabase
          .from("tasks")
          .insert([{ title: taskTitle, user_id: UserId }]);
      } catch (error) {
        console.log(error.message);
      }
    },

    // Edit the title data of the API (PUT)
    // Remove data from the API
    // Edit the status (completed or in progress) data of the API (PUT)
  },
});
