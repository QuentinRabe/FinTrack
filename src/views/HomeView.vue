<template>
  <main class="bg-white w-full h-screen flex px-10 py-5 gap-5">
    <MonthlyDetailsSection/>
    <RightSection/>
  </main>
</template>

<script setup>
import MonthlyDetailsSection from "@/sections/MonthlyDetailsSection.vue";
import RightSection from "@/sections/RightSection.vue";
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease;
}

.fade-enter-to,
.fade-leave-from {
  /* transform: scale(1); */
  opacity: 1;
  display: block;
  /* transform: scaleY(1); */
}

.fade-enter-from,
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  /* transform: scale(0); */
  opacity: 0;
  display: none;
  /* transform: scaleY(0); */
}
</style>
