<!-- FILE: components/StatCard.vue -->
<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string
    value: string
    meta: string
  }>(),
  {}
)
</script>

<template>
  <div class="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur">
    <p class="text-xs font-medium text-amber-300/80">
      {{ label }}
    </p>
    <p class="mt-1 text-xl font-semibold text-white">
      {{ value }}
    </p>
    <p class="mt-1 text-xs text-white/40">
      {{ meta }}
    </p>
  </div>
</template>