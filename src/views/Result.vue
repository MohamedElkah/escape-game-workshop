<script setup>
 import useRoomStore from "@/store/roomStore.js";

 const {userAnswers} = useRoomStore()
</script>

<template>
 <h1>Tu as terminé ouaiiiis</h1>
 <code>
  {{JSON.stringify(userAnswers, null, 2)}}
 </code>
</template>
