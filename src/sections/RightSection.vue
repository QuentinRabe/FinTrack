<template>
  <section
    class="w-[35%] h-[80%] px-3 py-4 text-lg border rounded-lg flex flex-col justify-evenly gap-5"
  >
    <div class="w-full h-[10%] flex flex-col">
      <InputComponent />
      <p
        :key="store.currentBalance"
        class="text-lg text-black font-bold italic mt-5"
      >
        Your current balance :
        <span style="color: rgb(77, 182, 172);"> {{ store.currentBalance.toLocaleString() }}$ </span>
      </p>
    </div>
    <div class="w-full h-[80%] flex flex-col">
      <div class="w-full h-[30%] flex justify-between items-center">
        <TitleComponent title="Expense Summary" />
        <OptGroupComponent :months="store.months" />
      </div>
      <div class="w-full h-[70%]">
        <Transition name="fades">
          <div
            :key="store.monthSelected"
            class="w-full h-full grid grid-cols-2 items-center"
          >
            <GraphicDoughnutComponent
              :arrayData="store.expenseSummaryArray"
              :key="store.monthSelected + '-' + store.currentExpenseSummarySum"
            />
            <div class="grid grid-rows-5" :key="store.monthSelected">
              <p class="text-lg font-bold text-black">
                Totale :
                <span style="color: rgb(255, 138, 128)">
                  {{ store.currentExpenseSummarySum.toLocaleString() }}$
                </span>
              </p>
              <LabelsGraphComponent
                bgColor="rgb(161, 136, 127)"
                label="Travel"
              />
              <LabelsGraphComponent bgColor="rgb(255, 183, 77)" label="Food" />
              <LabelsGraphComponent bgColor="rgb(239, 154, 154)" label="Rent" />
              <LabelsGraphComponent
                bgColor="rgb(179, 229, 252)"
                label="Other"
              />
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
import InputComponent from "@/components/InputComponent.vue";
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
