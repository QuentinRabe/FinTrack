<template>
  <div class="w-full h-full flex items-center">
    <Doughnut :data="data" :options="chartOptions" />
  </div>
</template>

<script setup>
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { onMounted, ref, watch } from "vue";
import { Doughnut } from "vue-chartjs";
import { Chart } from "chart.js/auto";
// import * as chartConfig from "./chartConfig.js";

// ChartJS.register(ArcElement, Tooltip, Legend);
const data = ref({
  datasets: [
    {
      data: arrayData,
      backgroundColor: [
        "rgb(161, 136, 127)", // Brun taupe
        "rgb(255, 183, 77)", // Orange ambré
        "rgb(239, 154, 154)", // Rouge clair
        "rgb(179, 229, 252)",
      ],
      hoverOffset: 4,
    },
  ],
});
const { arrayData } = defineProps({
  arrayData: Array,
});
onMounted(() => {
  console.log("Mounted" + arrayData);
});
const chartOptions = {
  animation: {
    duration: 1000, // Durée de l'animation en millisecondes
    easing: "easeInOutBounce", // Type d'animation
    onComplete: () => {
      console.log("Animation terminée");
    },
  },
};
</script>
