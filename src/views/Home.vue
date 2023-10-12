<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-8"
  >
    <p class="text-4xl bg-red-300">Bienvenue dans l'Escape Room !</p>
    <div class="flex flex-row-reverse gap-3">
      <div class="flex flex-col justify-between">
        <p class="w-[400px] mx-auto text-justify">
          L'expérience que vous vous apprêtez à expérimenter est à prendre au
          sérieux. Ici, vous apprendrez à identifier et gérer le harcèlement au
          travail. Nous vous présenterons plusieurs situations qu'on peut retrouver
          dans le monde professionnel et vous devrez y répondre en choisissant la
          meilleure réponse selon vous.
        </p>
        <ButtonComponent :action="goToRoom"> Commencer </ButtonComponent>
      </div>
      <img src="@/assets/sprites/wink.png" class="h-[300px]" alt="home sprite">
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
import ButtonComponent from "@/components/Button.vue";

export default {
  name: "Home",
  components: {
    ButtonComponent,
  },
  setup() {
    const msg = ref("Bienvenue dans l'Escape Room !");
    const router = useRouter();

    const goToRoom = () => {
      router.push("/room/0");
    };

    return {msg, goToRoom};
  },
};
</script>
