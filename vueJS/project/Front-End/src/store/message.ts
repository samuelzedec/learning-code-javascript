import { defineStore } from "pinia";

export const useMessageStore = defineStore("message", {
  state: () => ({
    message: "",
  }),
  actions: {
    setMessage(message: string) {
      this.message = message;
    },
  },
});