<template>
  <div class="bg-white w-full h-screen flex px-10 py-5 gap-5">
    <div class="flex flex-col gap-5 w-[70%] h-full">
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
        <div class="w-full h-[90%] relative top-1/2 -translate-y-1/2">
          <template v-if="store.activeBar">
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
          </template>
        </div>
      </div>
    </div>
    <div class="w-[30%] h-full px-3 py-2 text-lg border rounded-lg flex flex-col justify-end">
      <div class="w-full h-[30%] flex flex-col gap-1 ">
        <div class="w-full h-[20%] flex justify-between items-center">
          <TitleComponent title="Expense Summary" />
          <OptGroupComponent :months="store.months" />
        </div>
        <div class="w-full h-[80%]">
          <GraphicDoughnutComponent
            :arrayData="store.expenseSummaryArray"
            :key="store.monthSelected"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TitleComponent from "@/components/TitleComponent.vue";
import SwitchButtonComponent from "@/components/SwitchButtonComponent.vue";
import GraphicBarComponent from "@/components/GraphicBarComponent.vue";
import { useFinanceStore } from "@/stores/store";
import GraphicDoughnutComponent from "@/components/GraphicDoughnutComponent.vue";
import OptGroupComponent from "@/components/OptGroupComponent.vue";
const store = useFinanceStore();
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-to,
.fade-leave-from {
  /* transform: scale(1); */
  opacity: 1;
  display: block;
}

.fade-enter-from,
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  /* transform: scale(0); */
  opacity: 0;
  display: none;
}
</style>
