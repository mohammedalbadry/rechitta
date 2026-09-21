<!-- FILE: components/UnitRow.vue (NEW — reusable row for each unit in the list) -->
<script setup lang="ts">
withDefaults(
  defineProps<{
    unitCode: string
    details: string
    price: string
  }>(),
  {}
)
</script>

<template>
  <div class="flex items-center justify-between border-b border-white/10 py-4 last:border-0">
    <div>
      <p class="text-[15px] font-medium text-white">
        {{ unitCode }}
      </p>
      <p class="mt-0.5 text-xs text-white/40">
        {{ details }}
      </p>
    </div>
    <p class="text-[15px] font-semibold text-white">
      {{ price }}
    </p>
  </div>
</template>