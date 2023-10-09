<template>
  <div>
    <p>{{ situation.scenario }}</p>
    <button
      v-for="(response, index) in situation.responses"
      :key="index"
      :class="buttonClass(index)"
      @click="handleClick(response.is_correct, index)"
    >
      {{ response.text }}
    </button>
  </div>
</template>

<script>
import {ref, defineProps, defineEmits} from "vue";

export default {
  props: ["situation"],
  setup() {
    const emit = defineEmits();
    const selectedAnswerIndex = ref(null); // pour stocker l'index de la réponse sélectionnée
    const wasAnswerCorrect = ref(false); // pour stocker si la réponse sélectionnée est correcte ou non

    const handleClick = (isCorrect, index) => {
      selectedAnswerIndex.value = index;
      wasAnswerCorrect.value = isCorrect;
      emit("answer", isCorrect);
    };

    const buttonClass = (index) => {
      if (index !== selectedAnswerIndex.value) return "";
      return wasAnswerCorrect.value ? "bg-green-500" : "bg-red-500";
    };

    return {
      situation,
      handleClick,
      buttonClass,
    };
  },
};
</script>

<style scoped></style>
