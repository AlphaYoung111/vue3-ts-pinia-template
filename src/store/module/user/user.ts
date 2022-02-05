import { defineStore } from 'pinia'
import { UserState } from './user.d'

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    name: '111',
    age: 0
  }),
  actions: {
    addAge() {
      this.age += 1
    }
  }
})

export default useUserStore
