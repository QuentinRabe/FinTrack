<template>
  <select v-model="store.monthSelected" @click="handleClick" class="px-3 py-2 rounded-md bg-gray-200 text-black">
    <optgroup label="Months">
      <option v-for="(month, index) in months" :key="index">{{ month }}</option>
    </optgroup>
  </select>
</template>

<script setup>
import { useFinanceStore } from '@/stores/store';

const store =  useFinanceStore();
const handleClick = () => {
    console.log(store.monthSelected);
    console.log(store.expenseSummaryArray);
}
const props = defineProps({
  months: {
    type: Array,
    required: true
  }
});
</script>