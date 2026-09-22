<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true
  },
})
</script>

<template>
  <div class="relative aspect-[5/6] w-full overflow-hidden rounded-2xl">
    <img
      :src="project.image"
      :alt="project.name"
      class="absolute inset-0 h-full w-full object-cover"
    >

    <div
      class="absolute inset-0"
      :style="{
        background: `
          linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 50%, #0a0a0a 100%),
          linear-gradient(to bottom, color-mix(in srgb, ${project.accentColor} ${project.accentOpacity}%, transparent), transparent 60%)
        `
      }"
    />

    <!-- bottom content -->
    <div class="absolute inset-x-0 bottom-0 flex items-end justify-between px-4 pb-4">
      <!-- left: arrow + label + title -->
      <div>
        <NuxtLink :to="`/project/${project.id}`">
          <div
            class="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#c5a059] text-[#c5a059]"
          >
            <IconsArrowRight class="h-4 w-4" />
          </div>
        </NuxtLink>

        <span
          class="block text-[11px] font-medium uppercase tracking-wide text-[#c5a059]"
        >
          {{ project.tagTop }}
        </span>

        <NuxtLink
          :to="`/project/${project.id}`"
          class="text-[22px] font-semibold leading-tight text-white"
        >
          {{ project.name }}
        </NuxtLink>
      </div>

      <!-- right: est value -->
      <div class="text-right">
        <span class="block text-[10px] font-medium uppercase tracking-wide text-white/50">
          Est. Value
        </span>
        <span class="block text-sm font-medium text-white/80">
          {{ project.estValue }}
        </span>
      </div>
    </div>
  </div>
</template>