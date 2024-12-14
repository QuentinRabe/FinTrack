<template>
  <div class="h-full">
    <Doughnut :data="data" />
  </div>
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { onMounted, ref, watch } from "vue";
import { Doughnut } from "vue-chartjs";
// import * as chartConfig from "./chartConfig.js";

ChartJS.register(ArcElement, Tooltip, Legend);
const data = ref({
  datasets: [
    {
      data: arrayData,
      backgroundColor: [
        "rgb(244, 67, 54)", // Rouge vif
        "rgb(255, 202, 40)", // Jaune foncé
        "rgb(255, 112, 67)", // Orange corail
        "rgb(239, 83, 80)", // Rouge rosé
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
</script>
