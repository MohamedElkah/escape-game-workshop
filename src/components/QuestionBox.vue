<template>
	<div class="room flex justify-center items-center min-h-screen bg-blue-200">
		<Box>
			<template v-if="hasNoMoreSituation">
				<p>Félicitations. Vous avez terminé la Room n°{{currentRoomId}}.</p>
				<div class="flex items-center gap-3">
					<ButtonComponent
						classes="flex-1 h-full"
						:action="onNextRoom"
						v-if="percentage >= 50"
					>
						Room suivante
					</ButtonComponent>
					<ButtonComponent classes="flex-1 h-full" v-else>
						Recommencer
					</ButtonComponent>

					<ButtonComponent
						classes="flex-1 h-full"
						:is-secondary="true"
						:action="() => isResultVisible = !isResultVisible"
					>
						Voir les résultats {{ isResultVisible ? "▲" : "▼"}}
					</ButtonComponent>
				</div>
				<result-display
					v-show="isResultVisible"
					:percentage="percentage"
					:current-room-id="currentRoomId"
				/>
			</template>
			<template v-else>
				<h2 class="text-lg font-bold w-fit bg-black text-white rounded-full py-1 px-3 mx-auto">{{ theme }}</h2>
				<p class="text-center">{{ situation.scenario }}</p>
				<slot></slot>
			</template>
		</Box>
	</div>
</template>

<script>
import {computed, ref} from "vue";
import Box from "./Box.vue";
import ButtonComponent from "./Button.vue";
import useRoomStore from "@/store/roomStore.js";
import Answers from "@/components/Answers.vue";
import ResultDisplay from "@/components/ResultDisplay.vue";

export default {
	components: {ResultDisplay, Answers, Box, ButtonComponent},
	props: {
		situation: Object,
		theme: String,
		hasNoMoreSituation: Boolean,
		onNextRoom: Function,
		roomAnswers: Array
	},
	setup(props) {
		const {currentRoomId} = useRoomStore()
		const isResultVisible = ref(false);
		const percentage = computed(() => {
			const result = props.roomAnswers
				.reduce((acc, answer) => {
					if (answer.isCorrect) acc++;
					return acc;
				}, 0) / props.roomAnswers.length * 100;
			return result.toFixed(2);
		})

		return {
			isResultVisible,
			percentage,
			currentRoomId
		};
	},
};
</script>

<style scoped></style>
