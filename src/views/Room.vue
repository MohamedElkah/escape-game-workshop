<template>
	<div class="room" v-if="room">
		<div class="background" :style="{
            backgroundImage: `url(${currentRoom.situations?.[0] ? imgFolder + currentRoom.situations?.[0].background : ''})`
        }">
            <img
                :src="currentRoom.situations?.[0] ? imgFolder + currentRoom.situations[0].sprite : ''"
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
import jsonData from "@/data/index.json";
import useRoomStore from "@/store/index.js";

export default {
	components: {
		DialogBox,
		QuestionBox,
	},
	setup() {
		const {currentRoomId, currentRoom} = useRoomStore()
		const showDialog = ref(true);
		const currentMessage = ref("Chargement...");
		const imgFolder = ref("")
		const room = computed(() => {
			return jsonData.rooms[currentRoomId];
		});
		const currentSituation = computed(() => {
			return currentRoom.situations[0];
		});

		onMounted(() => {
			console.log("jsonData:", jsonData);
			try {
				// room.value = jsonData.rooms[roomIndex.value];
				imgFolder.value = jsonData.imagesFolder;
				// currentSituation.value = currentRoom.situations[0];
				// console.log("room:", room.value);
				currentMessage.value = "Bienvenue dans cette room !";
			} catch (err) {
				console.error("Erreur lors de la manipulation des données:", err);
				currentMessage.value = "Erreur lors de la manipulation des données.";
			}
		});

		const handleNext = () => {
			showDialog.value = false;
		};

		const handleAnswer = (isCorrect) => {
			if (isCorrect) {
				currentMessage.value = "Correct ! Passons à la situation suivante.";
			} else {
				currentMessage.value = "Incorrect. Réessayez.";
			}
			showDialog.value = true;
		};

		const noMoreDialogAction = () => {
			console.log("noMoreDialogAction");
			showDialog.value = false;
		}

		return {
			room,
			imgFolder,
			currentRoom,
			bgImg,
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
