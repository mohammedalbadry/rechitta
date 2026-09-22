<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true
  },
  })
</script>

<template>
  <!-- TODO: dynamic - aspect ratio -->
  <div class="relative aspect-[5/6] w-full overflow-hidden rounded-2xl">
    <img
      :src="project.image"
      :alt="project.name"
      class="absolute inset-0 h-full w-full object-cover"
    >

    <!-- dynamic gradient (replaces the old bottom gradient) -->
    <!-- TODO: dynamic - gradient stops -->
    <div
      class="absolute inset-0"
      :style="{
        background: `
          linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 50%, #0a0a0a 100%),
          linear-gradient(to bottom, color-mix(in srgb, ${project.accentColor} ${project.accentOpacity}%, transparent), transparent 60%)
        `
      }"
    />

    <!-- top-left tag -->
    <span
      class="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white/80 backdrop-blur"
    >
      {{ project.tagTop }}
    </span>

    <!-- bottom title -->
    <div class="absolute inset-x-0 bottom-0 px-4 pb-3 pt-10">
      <NuxtLink
        :to="`/project/${project.id}`"
        class="text-[15px] font-semibold text-white">
        {{ project.name }}
      </NuxtLink>
      <p class="text-xs text-white/60">
        {{ project.location }}
      </p>
    </div>
  </div>
</template>