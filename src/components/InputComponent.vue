<template>
  <div class="w-full flex items-center">
    <input
      type="text"
      class="bg-gray-200 px-3 py-2 rounded-lg rounded-e-none outline-none text-lg h-full placeholder:text-sm text-black font-semibold flex-grow"
      placeholder="Inc/Gift/1000 or Exp/Food/500"
      v-model="inputValue"
    />
    <button
      style="background-color: rgb(100, 181, 246)"
      class="h-full px-3 py-2 rounded-lg rounded-s-none text-white text-lg font-bold"
      @click="addInputToArray"
    >
      Add
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useFinanceStore } from "@/stores/store";

const store = useFinanceStore();
const inputValue = ref("");
const addInputToArray = () => {
  const splitted = inputValue.value.split("/");
  console.log(store.monthlyIncome[store.monthlyIncome.length - 1]);
  if (splitted[0] === "Inc") {
    store.monthlyIncome[store.monthlyIncome.length - 1] += parseInt(
      splitted[2]
    );
    console.log(store.monthlyIncome[store.monthlyIncome.length - 1]);
  } else {
    if (splitted[1] === "Travel")
      store.expenseSummary[11].travel += parseInt(splitted[2]);
    else if (splitted[1] === "Food")
      store.expenseSummary[11].food += parseInt(splitted[2]);
    else if (splitted[1] === "Rent")
      store.expenseSummary[11].rent += parseInt(splitted[2]);
    else store.expenseSummary[11].other += parseInt(splitted[2]);
    store.monthlyExpenses[11] += parseInt(splitted[2]);
  }
  inputValue.value = "";
};
</script>
