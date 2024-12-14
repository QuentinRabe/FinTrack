<template>
    <div class="w-full h-full flex items-center gap-2">
        <div class="w-10 h-3 rounded-sm" :style="{background:`${bgColor}`}"></div>
        <p class="text-sm text-black italic">{{ label }}</p>
    </div>
</template>

<script setup>
const {bgColor} = defineProps({
    bgColor: String,
    label: String,
})
</script>