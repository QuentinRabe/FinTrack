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
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const expenseSummary = ref([
    { id: "Jan", travel: 150, food: 600, rent: 1200, other: 300 },
    { id: "Feb", travel: 160, food: 620, rent: 1200, other: 320 },
    { id: "Mar", travel: 170, food: 650, rent: 1200, other: 350 },
    { id: "Apr", travel: 180, food: 700, rent: 1200, other: 400 },
    { id: "May", travel: 200, food: 750, rent: 1200, other: 420 },
    { id: "June", travel: 220, food: 800, rent: 1200, other: 450 },
    { id: "July", travel: 250, food: 850, rent: 1200, other: 470 },
    { id: "Aug", travel: 240, food: 820, rent: 1200, other: 460 },
    { id: "Sept", travel: 230, food: 780, rent: 1200, other: 440 },
    { id: "Oct", travel: 200, food: 750, rent: 1200, other: 410 },
    { id: "Nov", travel: 180, food: 700, rent: 1200, other: 380 },
    { id: "Dec", travel: 250, food: 850, rent: 1200, other: 450 },
  ]);

  const monthlyIncome = ref([
    4500, 4600, 4800, 4700, 5000, 5200, 5300, 5000, 4800, 4700, 4600, 4900,
  ]);

  const monthlyExpenses = ref([
    2250, 2300, 2420, 2480, 2570, 2670, 2770, 2720, 2650, 2560, 2460, 2750,
  ]);

  const currentBalance = computed(() => {
    return (
      monthlyIncome.value.reduce((sum, curval) => sum + curval, 0) -
      monthlyExpenses.value.reduce((sum, curval) => sum + curval, 0)
    );
  });
  const incomesColors = [
    "rgb(77, 182, 172)", // Vert menthe
    "rgb(100, 181, 246)", // Bleu clair
    "rgb(129, 212, 250)", // Bleu ciel
    "rgb(255, 241, 118)", // Jaune pâle
    "rgb(255, 204, 128)", // Orange clair
    "rgb(174, 213, 129)", // Vert herbe
    "rgb(255, 213, 79)", // Jaune doré
    "rgb(121, 134, 203)", // Bleu lavande
    "rgb(186, 104, 200)", // Violet orchidée
    "rgb(144, 202, 249)", // Bleu bébé
    "rgb(244, 143, 177)", // Rose pastel
    "rgb(159, 168, 218)", // Bleu ardoise
  ];

  const expensesColors = [
    "rgb(255, 138, 128)", // Rouge corail
    "rgb(244, 143, 177)", // Rose clair
    "rgb(255, 171, 145)", // Orange pâle
    "rgb(255, 204, 188)", // Saumon doux
    "rgb(255, 245, 157)", // Jaune citron
    "rgb(197, 202, 233)", // Violet doux
    "rgb(161, 136, 127)", // Brun taupe
    "rgb(255, 183, 77)", // Orange ambré
    "rgb(239, 154, 154)", // Rouge clair
    "rgb(179, 229, 252)", // Bleu pastel
    "rgb(207, 216, 220)", // Gris clair
    "rgb(255, 224, 178)", // Beige pastel
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
  const monthsRegister = (value) => {
    if (value === "Income")
      return [...months].splice(0, monthlyIncome.value.length);
    else return [...months].slice(0, monthlyExpenses.value.length);
  };
  const expenseSummaryArray = computed(() => {
    const obj = [...expenseSummary.value].find(
      (m) => m.id === monthSelected.value
    );
    const array = [obj.travel, obj.food, obj.rent, obj.other];
    currentExpenseSummarySum.value = array.reduce(
      (sum, currentValue) => sum + currentValue,
      0
    );
    return array;
  });
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
    currentBalance,
  };
});
