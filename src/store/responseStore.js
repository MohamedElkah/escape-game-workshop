import {defineStore} from "pinia";
import ky from "ky";
import {contextPrompt, userPrompt} from "@/data/instructions.js";

const useResponseStore = defineStore("response", {
  id: "ResponseStore",
  state: () => ({
    responses: [],
    loadingResponse: false,
    errorReponse: null,
  }),
  actions: {
    async generateResponses(scenario) {
      this.loading = true;
      this.error = null;

      try {
        const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
        if (!API_KEY) {
          throw new Error("API key is undefined");
        }

        const response = await ky.post(
          "https://api.openai.com/v1/chat/completions",
          {
            json: {
              model: "gpt-3.5-turbo",
              messages: [
                {role: "system", content: contextPrompt},
                {role: "user", content: userPrompt(scenario)},
              ],
              max_tokens: 300,
              stop: ["\n"],
            },
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );

        const data = await response.json();
        const generatedResponsesText = data.choices[0].text.trim().split("\n");
        this.responses = generatedResponsesText.map((respText, index) => ({
          id: index + 1,
          is_correct: index === 0, // La première réponse est toujours la bonne
          text: respText,
        }));
      } catch (error) {
        console.error("Error:", error);
        this.error =
          error.message || "An error occurred while generating responses.";
      } finally {
        this.loading = false;
      }
    },
  },
});

export default useResponseStore;
