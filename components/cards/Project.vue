<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true
  },
  })
</script>

<template>
  <div class="relative w-full overflow-hidden rounded-2xl">
    <img
      :src="image"
      :alt="name"
      class="h-56 w-full object-cover"
    >

    <!-- top-left tag -->
    <span
      class="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white/80 backdrop-blur"
    >
      {{ tagTop }}
    </span>

    <!-- bottom gradient + title -->
    <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent px-4 pb-3 pt-10">
      <p class="text-[15px] font-semibold text-white">
        {{ name }}
      </p>
      <p class="text-xs text-white/60">
        {{ location }}
      </p>
    </div>
  </div>
</template>
