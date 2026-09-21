<template>
  <!-- TODO: dynamic - aspect ratio (must match ProjectCard) -->
  <div class="relative aspect-[5/6] w-full overflow-hidden rounded-2xl bg-neutral-800">
    <!-- top-left tag -->
    <div class="absolute left-3 top-3 h-6 w-24 rounded-full bg-neutral-700" />

    <!-- bottom title -->
    <div class="absolute inset-x-0 bottom-0 px-4 pb-3 pt-10">
      <div class="h-4 w-40 rounded bg-neutral-700" />
      <div class="mt-2 h-3 w-24 rounded bg-neutral-700" />
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