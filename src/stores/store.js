import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useFinanceStore = defineStore("finance", () => {
  const switches = ref([
    { name: "Income", state: true },
    { name: "Expenses", state: false },
  ]);
  const activeBar = ref("Income");
  const monthSelected = ref("Dec");
  const currentExpenseSummarySum = ref();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
 const expenseSummary = ref([
   { id: "Jan", travel: 200, food: 800, rent: 900, other: 250 },
   { id: "Feb", travel: 220, food: 850, rent: 900, other: 270 },
   { id: "Mar", travel: 180, food: 950, rent: 910, other: 260 },
   { id: "Apr", travel: 210, food: 1000, rent: 920, other: 280 },
   { id: "May", travel: 190, food: 1100, rent: 930, other: 300 },
   { id: "June", travel: 230, food: 1050, rent: 940, other: 320 },
   { id: "July", travel: 250, food: 900, rent: 950, other: 310 },
   { id: "Aug", travel: 220, food: 870, rent: 960, other: 330 },
   { id: "Sept", travel: 240, food: 950, rent: 970, other: 340 },
   { id: "Oct", travel: 210, food: 1000, rent: 980, other: 350 },
   { id: "Nov", travel: 260, food: 900, rent: 990, other: 360 },
   { id: "Dec", travel: 280, food: 1000, rent: 1000, other: 370 },
 ]);

  const monthlyIncome = [5000, 2500, 4000, 6000, 3750, 2600, 1400, 5900, 1200, 1300];
  const monthlyExpenses = [1000, 1500, 3000, 5000, 2050];
  const incomesColors = [
    "rgb(0, 123, 255)", // Bleu vif
    "rgb(40, 167, 69)", // Vert émeraude
    "rgb(23, 162, 184)", // Bleu sarcelle
    "rgb(255, 193, 7)", // Jaune doré
    "rgb(255, 87, 34)", // Orange vif
    "rgb(102, 187, 106)", // Vert clair
    "rgb(255, 152, 0)", // Orange pastel
    "rgb(33, 150, 243)", // Bleu clair
    "rgb(156, 39, 176)", // Violet intense
    "rgb(0, 172, 193)", // Cyan foncé
    "rgb(121, 85, 72)", // Brun clair
    "rgb(63, 81, 181)", // Bleu roi
  ];
  const expensesColors = [
    "rgb(244, 67, 54)", // Rouge vif
    "rgb(233, 30, 99)", // Rose foncé
    "rgb(255, 87, 34)", // Orange intense
    "rgb(255, 138, 101)", // Orange pastel
    "rgb(255, 202, 40)", // Jaune foncé
    "rgb(156, 39, 176)", // Violet foncé
    "rgb(121, 85, 72)", // Brun
    "rgb(255, 112, 67)", // Orange corail
    "rgb(229, 57, 53)", // Rouge profond
    "rgb(198, 40, 40)", // Rouge sombre
    "rgb(93, 64, 55)", // Marron cacao
    "rgb(239, 83, 80)", // Rouge rosé
  ];

  const toggleActive = (button) => {
    const clickedButton = switches.value.find((m) => m.name === button);
    const activeButton = switches.value.find((m) => m.state);
    if (activeButton && activeButton != clickedButton) {
      activeButton.state = !activeButton.state;
      clickedButton.state = !clickedButton.state;
      activeBar.value = clickedButton.name;
    }
    console.log(`Active bar =>> ${activeBar.value}`);
  };
  const monthsRegister = ((value) => {
    if (value === 'Income')
      return ([...months].splice(0, monthlyIncome.length));
    else
      return ([...months].slice(0, monthlyExpenses.length));
  });
  const expenseSummaryArray = computed(() => {
    const obj = [...expenseSummary.value].find((m) => m.id === monthSelected.value);
    const array = [obj.travel, obj.food, obj.rent, obj.other];
    currentExpenseSummarySum.value = array.reduce((sum, currentValue) => sum + currentValue, 0);
    return (array);
  })
  return {
    switches,
    toggleActive,
    months,
    monthlyIncome,
    monthlyExpenses,
    activeBar,
    incomesColors,
    expensesColors,
    monthsRegister,
    monthSelected,
    expenseSummary,
    expenseSummaryArray,
    currentExpenseSummarySum,
  };
});
