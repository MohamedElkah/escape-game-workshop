<template>
  <div class="room">
    <DialogBox :message="currentMessage" @next="handleNext" v-if="showDialog" />
    <QuestionBox
      :situation="currentSituation"
      @answer="handleAnswer"
      v-else-if="showQuestion"
    />
  </div>
</template>

<script>
import {ref} from "vue";
import DialogBox from "@/components/DialogBox.vue";
import QuestionBox from "@/components/QuestionBox.vue";
import {index} from "@/data/index.js";

export default {
  components: {
    DialogBox,
    QuestionBox,
  },
  setup() {
    const roomIndex = ref(0); // Pour garder une trace de la room actuelle
    const showQuestion = ref(false); // Pour gérer l'affichage des questions
    const showDialog = ref(true); // Pour gérer l'affichage des dialogues
    const currentMessage = ref("Bienvenue dans cette room !"); // Le message actuel à afficher

    const currentSituation = ref(index.rooms[roomIndex.value].situations[0]); // La situation/question actuelle

    // Passer au message suivant ou montrer la question
    const handleNext = () => {
      showDialog.value = false;
      showQuestion.value = true;
    };

    const handleAnswer = (isCorrect) => {
      if (isCorrect) {
        currentMessage.value = "Correct ! Passons à la situation suivante.";
      } else {
        currentMessage.value = "Incorrect. Réessayez.";
      }
      showQuestion.value = false;
      showDialog.value = true;
    };

    return {
      currentMessage,
      currentSituation,
      showDialog,
      showQuestion,
      handleNext,
      handleAnswer,
    };
  },
};
</script>
