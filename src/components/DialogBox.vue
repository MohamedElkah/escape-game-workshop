<template>
  <div class="room flex justify-center items-center min-h-screen bg-blue-200">
    <div v-if="currentDialogue" class="dialogue p-4 bg-white rounded-md flex flex-col w-[700px] mx-auto relative">
      <h2 class="text-lg font-bold w-fit bg-black text-white rounded-full py-1 px-3 absolute left-0 -translate-y-1/2 top-0">{{ currentDialogue.speaker }}</h2>
      <p class="text-md mt-2.5">{{ displayedText }}</p>
      <ButtonComponent :action="advanceDialogue" classes="self-end mt-5">
        Suivant
      </ButtonComponent>
    </div>
  </div>
</template>

<script>
import {ref, computed, onMounted, onUnmounted} from "vue";
import ButtonComponent from "./Button.vue";

export default {
  components: {
    ButtonComponent,
  },
  setup() {
    const dialogues = ref([
      {
        speaker: "{props.CharacterName}",
        message:
          "Bonjour, bienvenue dans notre jeu éducatif contre les fous dangereux !",
      },
      {
        speaker: "{props.CharacterName}",
        message:
          "Ici, vous apprendrez à identifier et gérer le harcèlement au travail.",
      },
    ]);

    const currentIndex = ref(0);
    const displayLength = ref(1);
    const maxDisplayLength = 1; // A augmenter pour un effet de machine à écrire plus rapide

    let interval;

    const advanceDialogue = () => {
      clearInterval(interval);
      // Si le message n'est pas encore entièrement affiché, on l'affiche en entier
      if (
        displayLength.value < dialogues.value[currentIndex.value].message.length
      ) {
        interval = setInterval(() => {
          displayLength.value = Math.min(
            displayLength.value + maxDisplayLength,
            dialogues.value[currentIndex.value].message.length
          );

          if (
            displayLength.value >=
            dialogues.value[currentIndex.value].message.length
          ) {
            clearInterval(interval);
          }
        }, 50);
        // Sinon, si on est au dernier message, on ne fait rien
      } else if (currentIndex.value < dialogues.value.length - 1) {
        currentIndex.value++;
        displayLength.value = 1;
        // Appel récursif pour passer au message suivant
        advanceDialogue();
      }
    };

    onMounted(() => {
      advanceDialogue();
    });

    onUnmounted(() => {
      clearInterval(interval);
    });

    const currentDialogue = computed(() => dialogues.value[currentIndex.value]);

    const displayedText = computed(() =>
      currentDialogue.value.message.substring(0, displayLength.value)
    );

    return {currentDialogue, displayedText, advanceDialogue};
  },
};
</script>

<style scoped></style>
