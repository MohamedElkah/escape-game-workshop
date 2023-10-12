<script setup>
import useRoomStore from "@/store/roomStore.js";
import jsonData from "@/data/index.json";
import {computed} from "vue";

const {userAnswers} = useRoomStore()

const finalResults = computed(() => (
	Object.values(userAnswers).map((value) => {
		const situation = jsonData.rooms[value.roomId].situations[value.situationId - 1]
		const situationAnswer = situation.responses.find(response => response.is_correct)
		return {
			situation: situation.scenario,
			answer: situationAnswer,
			isCorrect: value.isCorrect
		}
	})
))

const percentage = computed(() => {
	const result = userAnswers
		.reduce((acc, answer) => {
			if (answer.isCorrect) acc++;
			return acc;
		}, 0) / userAnswers.length * 100;
	return result.toFixed(2);
})
</script>

<template>
	<div class="flex flex-col gap-3 p-3">
		<h1 class="text-center font-xl font-bold">Résultat: {{percentage}}%</h1>
		<ul class="flex flex-col gap-3">
			<li
				v-for="result in finalResults"
				:class="['gray p-3 rounded w-full border-2', result.isCorrect ? 'border-green-500' : 'border-red-500']"
			>
				<h2 class="font-bold text-lg">{{result.situation}}</h2>
				<hr class="mb-3" />
				<p>{{result.answer.text}}</p>
			</li>
		</ul>
	</div>
</template>
