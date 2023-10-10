<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
  >
    <h1 class="text-4xl font-bold mb-4">Home</h1>
    <p class="text-xl mb-8">{{ msg }}</p>
    <ButtonComponent :action="goToRoom">
      Commencer
    </ButtonComponent>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
import ButtonComponent from "@/components/Button.vue";
import useStore from "@/store/index.js";

export default {
  name: "Home",
  components: {
    ButtonComponent,
  },
  setup() {
    const msg = ref("Bienvenue dans l'Escape Room !");
    const router = useRouter();
	  const store = useStore();

	  const {text} = store;

    const goToRoom = () => {
      router.push("/room");
    };

    return {msg, goToRoom, text};
  },
};
</script>
