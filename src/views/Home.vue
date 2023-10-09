<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
  >
    <h1 class="text-4xl font-bold mb-4">Home</h1>
    <p class="text-xl mb-8">{{ msg }}</p>
    <button
      @click="goToRoom"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Commencer
    </button>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";

export default {
  name: "Home",
  setup() {
    const msg = ref("Bienvenue dans l'Escape Room !");
    const router = useRouter();

    const goToRoom = () => {
      router.push("/room");
    };

    return {msg, goToRoom};
  },
};
</script>
