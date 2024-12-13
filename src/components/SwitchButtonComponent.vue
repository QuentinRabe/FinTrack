<template>
  <button
    :class="[
      'bg-none font-bold text-md px-3 py-1 rounded-lg transition-all',
      state ? 'text-black outline outline-1 shadow-lg' : 'text-gray-500',
    ]"
    @click="toggleActive"
  >
    {{ title }}
  </button>
</template>

<script setup>
import { ref } from "vue";

const { title } = defineProps({
  title: String,
  state: Boolean,
});
const isActive = ref(false);
const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>
