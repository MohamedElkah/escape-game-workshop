<script setup>
	import {defineProps} from "vue";
	defineProps({
		percentage: String,
	})
</script>

<template>
	<div>
		<strong>{{percentage}}%</strong> {{" "}}
		<span>de bonnes réponses à cette room.</span>
	</div>
</template>
