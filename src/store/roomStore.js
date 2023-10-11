import { defineStore } from 'pinia'
import data from "@/data/index.json";

const useRoomStore = defineStore('room',{
  state: () => ({
    currentRoomId: 0,
    userAnswers: [],
  }),
  getters: {
    currentRoom() {
      return (currentRoomId) => data.rooms[currentRoomId];
    }
  },
  actions: {
    setCurrentRoomId(id) {
      if (id < data.rooms.length && id >= 0) {
        this.currentRoomId = id;
      }
    },
    addAnswer(answer) {
      this.userAnswers.push(answer);
    }
  },
})

export default useRoomStore;
