<template>
  <section class="flex flex-col gap-5 w-[70%] h-full">
    <div
      class="w-full h-full px-3 py-2 text-lg border rounded-lg flex flex-col"
    >
      <div class="flex justify-between items-center h-[10%]">
        <TitleComponent title="Monthly Details" />
        <div class="flex gap-10">
          <SwitchButtonComponent
            v-for="(switchBtn, index) in store.switches"
            :key="index"
            :title="store.switches[index].name"
            @click="store.toggleActive(switchBtn.name)"
            :state="store.switches[index].state"
          />
        </div>
      </div>
      <div class="w-full h-[90%] grid grid-cols-1 items-center">
        <transition name="fade">
          <GraphicBarComponent
            :key="store.activeBar"
            :monthData="
              store.activeBar === 'Income'
                ? store.monthlyIncome
                : store.monthlyExpenses
            "
            :bgColor="
              store.activeBar === 'Income'
                ? store.incomesColors
                : store.expensesColors
            "
          />
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import TitleComponent from "@/components/TitleComponent.vue";
import SwitchButtonComponent from "@/components/SwitchButtonComponent.vue";
import GraphicBarComponent from "@/components/GraphicBarComponent.vue";
import { useFinanceStore } from "@/stores/store";
import { onMounted } from "vue";
const store = useFinanceStore();
onMounted(() => {
  console.log(`Hello Mounted`);
});
</script>
