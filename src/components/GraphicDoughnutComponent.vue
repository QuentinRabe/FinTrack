<template>
  <Doughnut :data="data" />
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
        "rgb(33, 150, 243)", // Bleu vif
        "rgb(76, 175, 80)", // Vert éclatant
        "rgb(156, 39, 176)", // Violet vif
        "rgb(255, 87, 34)", // Orange brûlé
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
