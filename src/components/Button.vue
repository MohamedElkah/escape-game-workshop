<template>
    <button
      @click="action"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      :class="classes"
    >
      <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ButtonComponent",
    props: {
        action: Function,
        classes: String
    },
}
</script>
