<template>
  <!-- TODO: dynamic - aspect ratio (must match ProjectCard) -->
  <div class="relative aspect-[5/6] w-full overflow-hidden rounded-2xl bg-neutral-800">
    <!-- bottom content -->
    <div class="absolute inset-x-0 bottom-0 flex items-end justify-between px-4 pb-4">
      <!-- left: arrow + label + title -->
      <div>
        <div class="mb-3 h-9 w-9 rounded-full bg-neutral-700" />
        <div class="h-3 w-20 rounded bg-neutral-700" />
        <div class="mt-2 h-4 w-32 rounded bg-neutral-700" />
      </div>

      <!-- right: est value -->
      <div class="flex flex-col items-end">
        <div class="h-2.5 w-14 rounded bg-neutral-700" />
        <div class="mt-2 h-3 w-16 rounded bg-neutral-700" />
      </div>
    </div>

    <div class="skeleton-overlay" />
  </div>
</template>

<style scoped>
.skeleton-overlay {
  position: absolute;
  left: -150%;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.02) 20%,
    rgba(255, 255, 255, 0.15) 40%,
    rgba(255, 255, 255, 0.22) 50%,
    rgba(255, 255, 255, 0.15) 60%,
    rgba(255, 255, 255, 0.02) 80%,
    transparent 100%
  );
  opacity: 0.2;
  animation: slideRight 2.5s ease-in-out infinite;
  z-index: 1;
}

@keyframes slideRight {
  0% {
    left: -150%;
  }
  100% {
    left: 150%;
  }
}
</style>