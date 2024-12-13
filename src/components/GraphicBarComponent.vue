<template>
  <div class="w-full h-[90%] max-h-[300px] flex justify-center">
    <Bar :data="chartData" :options="chartOptions"/>
  </div>
</template>

<script setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  elements,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
const { monthData, months } = defineProps({
  monthData: Array,
  months: Array,
});
const chartData = {
  labels: months,
  datasets: [
    {
      label: "Income",
      data: monthData,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};
const chartOptions = {
  animation: {
    duration: 1000, // Durée de l'animation en millisecondes
    easing: 'easeInOutBounce', // Type d'animation
    onComplete: () => {
      console.log('Animation terminée');
    },
  },
};
</script>
