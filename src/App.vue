<template>
  <div>
    <main>
      <router-view :key="route.fullPath"></router-view>
    </main>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";

const route = useRoute();

</script>
