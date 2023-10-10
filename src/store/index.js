import { defineStore } from 'pinia'
import data from "@/data/index.json";

const useRoomStore = defineStore('room',{
    state: () => ({
        currentRoomId: 0,
    }),
    getters: {
        currentRoom(state) {
            return data.rooms[state.currentRoomId];
        },
    },
    actions: {
        setCurrentRoomId(id) {
            if (id < data.rooms.length && id >= 0) {
                this.currentRoomId = id;
            }
        }
    },
})

export default useRoomStore;
