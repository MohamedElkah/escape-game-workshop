<template>
  <div class="room flex justify-center items-center min-h-screen bg-blue-200">
    <Box>
      <h2
        class="text-lg font-bold w-fit bg-black text-white rounded-full py-1 px-3 mx-auto"
      >
        {{ theme }}
      </h2>
      <p class="text-center">{{ situation.scenario }}</p>
      <ul class="grid grid-cols-2 gap-3">
        <li
          v-for="(response, index) in situation.responses.sort(() =>
            Math.random() > 0.5 ? 1 : -1
          )"
          :key="index"
          class="h-full"
        >
          <ButtonComponent
            :classes="buttonClass(index) + ' w-full h-full'"
            :action="() => handleClick(response.is_correct, index)"
          >
            {{ response.text }}
          </ButtonComponent>
        </li>
      </ul>
    </Box>
  </div>
</template>

<script>
import {ref, defineEmits} from "vue";
import Box from "./Box.vue";
import ButtonComponent from "./Button.vue";

export default {
  components: {Box, ButtonComponent},
  props: {
    situation: Object,
    theme: String,
  },
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
      handleClick,
      buttonClass,
    };
  },
};
</script>

<style scoped></style>
