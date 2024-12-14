<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
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
import { useFinanceStore } from "@/stores/store";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
const store = useFinanceStore();
const { monthData, bgColor } = defineProps({
  monthData: Array,
  bgColor: Array,
});
const chartData = {
  labels: store.monthsRegister(store.activeBar),
  datasets: [
    {
      label: store.activeBar,
      data: monthData,
      backgroundColor: bgColor,
    },
  ],
};
const chartOptions = {
  // animation: {
  //   duration: 1000, // Durée de l'animation en millisecondes
  //   easing: 'easeInOutBounce', // Type d'animation
  //   onComplete: () => {
  //     console.log('Animation terminée');
  //   },
  // },
  elements: {
    bar: {
      borderRadius: 10,
    },
  },
};
// onMounted(() => {
//   console.log("GraphicBarComponent monté");
//   // Ajoutez ici toute logique que vous souhaitez exécuter lors du montage
// });

// onUnmounted(() => {
//   console.log("GraphicBarComponent démonté");
//   // Ajoutez ici toute logique que vous souhaitez exécuter lors du démontage
// });
</script>
