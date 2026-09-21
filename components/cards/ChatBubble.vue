<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string
  }>(),
  {}
)
</script>

<template>
  <div
    class="pointer-events-none whitespace-nowrap rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[13px] text-white/90 backdrop-blur-md"
  >
    "{{ text }}"
  </div>
</template>
