import { defineStore } from "pinia";
import { ref } from "vue";

export const useFinanceStore = defineStore("finance", () => {
  const switches = ref([
    { name: "Income", state: false },
    { name: "Expenses", state: false },
  ]);
  const toggleActive = (button) => {
    const clickedButton = switches.value.find((m) => m.name === button);
    const activeButton = switches.value.find((m) => m.state);
    if (!clickedButton.state)
        clickedButton.state = !clickedButton.state;
    if (activeButton && activeButton != clickedButton)
        activeButton.state = !activeButton.state
  };
  return { switches, toggleActive };
});
