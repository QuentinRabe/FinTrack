<template>
  <div class="bg-white w-full h-screen flex px-10 py-5 gap-5">
    <div class="w-[70%] h-[100%] flex flex-col gap-5">
      <div class="w-[100%] h-[60%] px-3 py-2 text-lg border rounded-lg">
        <div class="flex justify-between items-center h-[50px]">
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
      </div>
      <div class="bg-green-300 w-[100%] h-[40%]"></div>
    </div>
    <div class="bg-green-300 w-[30%] h-[100%]"></div>
  </div>
</template>

<script setup>
import TitleComponent from "@/components/TitleComponent.vue";
import SwitchButtonComponent from "@/components/SwitchButtonComponent.vue";
import { useFinanceStore } from "@/stores/store";

const store = useFinanceStore();
</script>
<style scoped></style>
