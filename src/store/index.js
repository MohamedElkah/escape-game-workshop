import { defineStore } from 'pinia'

const useStore = defineStore('main',{
    state: () => ({
        text: "Hello World!"
    }),
    actions: {
    },
})

export default useStore;
