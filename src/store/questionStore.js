import {defineStore} from "pinia";
import ky from "ky";

export const useQuestionStore = defineStore({
  id: "questionStore",

  state: () => ({
    question: null,
    responses: [],
    loading: false, // État de chargement pour les requêtes API
    error: null,
  }),

  actions: {
    async generateQuestion(promptText) {
      this.loading = true;
      this.error = null;

      try {
        const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

        const response = await ky.post(
          "https://api.openai.com/v1/engines/davinci-codex/completions",
          {
            json: {
              prompt: promptText,
              max_tokens: 100,
              n: 4, // Nombre de réponses à générer
              stop: ["\n"], // Arrêter la génération après un retour à la ligne
            },
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        this.question = data.choices[0].text.trim();
        this.responses = await this.generateResponses(this.question);
      } catch (error) {
        console.error("Error:", error);
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async generateResponses(questionText) {
      return [];
    },

    setResponses(responses) {
      this.responses = responses;
    },
  },
});

export default useQuestionStore;
