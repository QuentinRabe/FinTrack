<template>
  <section
    class="w-[30%] h-full px-3 py-2 text-lg border rounded-lg flex flex-col justify-end"
  >
    <div class="w-full h-[30%] flex flex-col gap-1">
      <div class="w-full h-[20%] flex justify-between items-center">
        <TitleComponent title="Expense Summary" />
        <OptGroupComponent :months="store.months" />
      </div>
      <div class="w-full h-[80%]">
        <Transition name="fades">
          <div :key="store.monthSelected" class="w-full h-full grid grid-cols-2">
            <GraphicDoughnutComponent
              :arrayData="store.expenseSummaryArray"
              :key="store.monthSelected"
            />
            <div
              class="w-full h-full grid grid-rows-5"
              :key="store.monthSelected"
            >
              <p>
                <span class="text-lg font-bold text-black">Totale : 
                {{ store.currentExpenseSummarySum }} Euro </span>
              </p>
              <LabelsGraphComponent
                bgColor="rgb(33, 150, 243)"
                label="Travel"
              />
              <LabelsGraphComponent bgColor="rgb(76, 175, 80)" label="Food" />
              <LabelsGraphComponent bgColor="rgb(156, 39, 176)" label="Rent" />
              <LabelsGraphComponent bgColor="rgb(244, 67, 54)" label="Other" />
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import TitleComponent from "@/components/TitleComponent.vue";
import { useFinanceStore } from "@/stores/store";
import GraphicDoughnutComponent from "@/components/GraphicDoughnutComponent.vue";
import OptGroupComponent from "@/components/OptGroupComponent.vue";
import LabelsGraphComponent from "@/components/LabelsGraphComponent.vue";
const store = useFinanceStore();
</script>

<style scoped>
.fades-enter-active,
.fades-leave-active {
  transition: all 2s ease;
}

.fades-enter-to,
.fades-leave-from {
  /* transform: scale(1); */
  opacity: 1;
  display: grid;
  /* transform: scaleY(1); */
}

.fades-enter-from,
.fades-leave-to /* .fade-leave-active in <2.1.8 */ {
  /* transform: scale(0); */
  opacity: 0;
  display: none;
  /* transform: scaleY(0); */
}
</style>
