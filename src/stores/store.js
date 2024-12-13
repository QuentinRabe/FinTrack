import { defineStore } from "pinia";
import { ref } from "vue";

export const useFinanceStore = defineStore("finance", () => {
  const switches = ref([
    { name: "Income", state: true },
    { name: "Expenses", state: false },
  ]);
  const activeBar = ref("Income");
  const months = ["January", "February", "March", "April", "May"];
  const monthlyIncome = [5000, 2500, 4000, 6000, 3750];
  const monthlyExpenses = [1000, 1500, 3000, 5000, 2050];
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
  return { switches, toggleActive, months, monthlyIncome, monthlyExpenses, activeBar };
});
