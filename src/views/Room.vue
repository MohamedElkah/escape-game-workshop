<template>
	<div class="room" v-if="currentRoom">
		<div class="background"
			 :style="{
				backgroundImage: `url(${currentSituation ? imgFolder + currentSituation.background : ''})`
			 }"
		>
			<img
				:src="currentSituation ? imgFolder + currentSituation.sprite : ''"
				alt="sprite"
				class="sprite"
			/>
		</div>
		<DialogBox
			:message="currentMessage"
			@next="handleNext"
			v-if="showDialog"
			:dialogues="currentRoom.dialog"
			:no-more-dialog-action="noMoreDialogAction" />
		<QuestionBox
			:theme="currentRoom.theme"
			:situation="currentSituation"
			@answer="handleAnswer"
			v-else-if="!showDialog"
		/>
	</div>
</template>

<script>
import {ref, onMounted, computed} from "vue";
import DialogBox from "@/components/DialogBox.vue";
import QuestionBox from "@/components/QuestionBox.vue";
import useRoomStore from "@/store/roomStore.js";
import jsonData from "@/data/index.json";

export default {
	components: {
		DialogBox,
		QuestionBox,
	},
	setup() {
		const {currentRoomId, currentRoom, addAnswer} = useRoomStore()
		const showDialog = ref(true);
		const currentMessage = ref("Chargement...");
		const imgFolder = ref("")
		const currentSituationId = ref(0);
		const currentSituation = computed(() => {
			return currentRoom.situations[currentSituationId.value];
		});

		onMounted(() => {
			try {
				imgFolder.value = jsonData.imagesFolder;
				currentMessage.value = "Bienvenue dans cette room !";
			} catch (err) {
				console.error("Erreur lors de la manipulation des données:", err);
				currentMessage.value = "Erreur lors de la manipulation des données.";
			}
		});

		const handleNext = () => {
			showDialog.value = false;
		};
		const handleAnswer = (index) => {
			console.log(currentRoomId)
			addAnswer({
				roomId: currentRoomId,
				situationId: currentSituation.value.id,
				answerId: index,
			})
			// if (isCorrect) {
			// 	currentMessage.value = "Correct ! Passons à la situation suivante.";
			// } else {
			// 	currentMessage.value = "Incorrect. Réessayez.";
			// }
			// showDialog.value = true;
			if (currentSituationId.value < currentRoom.situations.length - 1) {
				currentSituationId.value++;
			} else {
				console.log("test goToNextSituation() else")
			}
			// }
		};

		const noMoreDialogAction = () => {
			showDialog.value = false;
		};

		return {
			imgFolder,
			currentRoom,
			currentMessage,
			currentSituation,
			showDialog,
			handleNext,
			handleAnswer,
			noMoreDialogAction,
		};
	},
};
</script>

<style scoped>
.background {
	position: absolute;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
}

.sprite {
	position: absolute;
	width: 150px;
	height: 150px;
}
</style>
