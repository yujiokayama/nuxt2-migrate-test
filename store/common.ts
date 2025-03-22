import { defineStore } from "pinia";

type CommonState = {
  count: number;
};

export const useCommonStore = defineStore<"common", CommonState>("common", {
  state: (): CommonState => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
