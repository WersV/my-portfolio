import {
  defineStore
} from 'pinia'
import {
  useLocalStorage
} from "@vueuse/core"

export const useGlobalVariables = defineStore('globalVariables', {
  state: () => {
    return {
      isLowRes: useLocalStorage('isLowRes', false), //useLocalStorage takes in a key of 'count' and default value of 0
    };
  },

  actions: {
    toggleIsLowRes() {
      const width = window.innerWidth
      if (width < 1024) {
        this.isLowRes = true
      } else {
        this.isLowRes = false
      }
    },
  },
})