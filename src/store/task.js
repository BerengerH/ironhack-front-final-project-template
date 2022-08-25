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
      console.log(this.tasks);
    },

    // Add data to the API (POST)
    async implementTask(taskTitle, UserId) {
      try {
        const { data, error } = await supabase
          .from("tasks")
          .insert([{ title: taskTitle, user_id: UserId }]);
          this.fetchTasks();
      } catch (error) {
        console.log(error.message);
      }
    },

    // Edit the title data of the API (PUT)
    async editTitle (currentTitle, editedTitle) {
      try{
        const { data, error } = await supabase
        .from('tasks')
        .update({ title: currentTitle })
        .match({ name: editedTitle })
      } catch (error) {
        console.log(error.message);
      }
    },

    // Edit the status (completed or in progress) data of the API (PUT)


    // Remove data from the API
    async deleteTask (taskId) {
      try{
        const { data, error } = await supabase
        .from('tasks')
        .delete()
        .match({ id: taskId })
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
