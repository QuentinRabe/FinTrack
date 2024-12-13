<template>
  <h2 class="text-lg font-bold text-black">{{ title }}</h2>
</template>
<script setup>
const { title } = defineProps({
  title: String,
});
</script>
