import {
  defineStore
} from 'pinia'
import {
  useLocalStorage
} from "@vueuse/core"

export const useThemeModeStore = defineStore('themeMode', {
  state: () => {
    return {
      isDarkMode: useLocalStorage('isDarkMode', false), //useLocalStorage takes in a key of 'count' and default value of 0
    };
  },

  actions: {
    changeMode() {
      this.isDarkMode = !this.isDarkMode
    },
  },
})