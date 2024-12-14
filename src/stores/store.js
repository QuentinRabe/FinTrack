import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useFinanceStore = defineStore("finance", () => {
  const switches = ref([
    { name: "Income", state: true },
    { name: "Expenses", state: false },
  ]);
  const activeBar = ref("Income");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
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
  };
});
