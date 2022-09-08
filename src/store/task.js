// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
    filteredTasks: null,
  }),
  actions: {
    // Fetch the data from the API
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select()
        .order("deadline", { ascending: true });
      this.tasks = tasks;
      this.filteredTasks = tasks;
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
    async editTitle(taskId, editedTitle) {
      try {
        const { data, error } = await supabase
          .from("tasks")
          .update({ title: editedTitle })
          .match({ id: taskId });
        this.fetchTasks();
      } catch (error) {
        console.log(error.message);
      }
    },

    // Edit the status (completed or in progress) data of the API (PUT)
    async editStatus(taskId, editedStatus) {
      try {
        const { data, error } = await supabase
          .from("tasks")
          .update({ status: editedStatus })
          .match({ id: taskId });
        this.fetchTasks();
      } catch (error) {
        console.log(error.message);
      }
    },

    // Edit the title data of the API (PUT)
    async editDeadline(taskId, editedDeadline) {
      try {
        const { data, error } = await supabase
          .from("tasks")
          .update({ deadline: editedDeadline })
          .match({ id: taskId });
        this.fetchTasks();
      } catch (error) {
        console.log(error.message);
      }
    },

    // Remove data from the API
    async deleteTask(taskId) {
      try {
        const { data, error } = await supabase
          .from("tasks")
          .delete()
          .match({ id: taskId });
        this.fetchTasks();
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
