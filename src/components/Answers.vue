<script>
import ButtonComponent from "@/components/Button.vue";

export default {
	components: {ButtonComponent},
    props: {
        situation: Object,
		onClick: Function
    },
}
</script>

<template>
	<ul class="grid grid-cols-2 gap-3">
		<li
			v-for="(response) in situation.responses"
			:key="response.id"
			class="h-full"
		>
			<ButtonComponent
				classes="w-full h-full"
				:action="() => $emit('answer', response.id)"
			>
				{{ response.text }} - {{response.id}}
			</ButtonComponent>
		</li>
	</ul>
</template>
