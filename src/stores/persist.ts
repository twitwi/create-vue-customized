import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Data } from '@/typing'

export const useLocalStore = defineStore(
  'local',
  () => {
    // like setup() in a component
    return {
      userName: ref('bob'),
    }
  },
  {
    persist: { key: 'yjsapp:local' }, // persisted in localStorage
  },
)

export const useMainStore = defineStore(
  'main',
  () => {
    // like setup() in a component
    return {
      data: ref({} as Data),
    }
  },
  {
    sharing: true, // shared through yjs (+ local IDB)
  },
)
