import { defineStore } from 'pinia'
import data from "@/data/index.json";

const useRoomStore = defineStore('room',{
  state: () => ({
    currentRoomId: 0,
    userAnswers: [],
  }),
  getters: {
    currentRoom(state) {
      return data.rooms[state.currentRoomId];
    },
    currentSituation(state) {
      return this.currentRoom.situations[state.currentSituationId];
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
