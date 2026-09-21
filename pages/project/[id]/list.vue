<!-- FILE: pages/project-overview-2.vue -->
<script setup lang="ts">
function goBack() {
  navigateTo('/onboarding')
}

const units = [
  { id: 1, unitCode: 'Unit #528', details: '2 Bed · Floor 5 · 1,511 sqft', price: 'AED 2.016M' },
  { id: 2, unitCode: 'Unit #528', details: '2 Bed · Floor 3 · 1,489 sqft', price: 'AED 1.97M' },
  { id: 3, unitCode: 'Unit #G24', details: '2 Bed · Ground · Private Pool', price: 'AED 1.68M' }
]
</script>

<template>
  <!-- page container -->
  <main class="relative h-screen w-full overflow-hidden bg-[#05080D] text-white">
    <!-- background photo -->
    <img
      src="~/assets/projects/6.png"
      alt=""
      class="absolute inset-0 z-0 h-full w-full object-cover"
    >

    <!-- bottom fade so content stays readable -->
    <div class="absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-[#05080D] via-[#05080D]/80 to-transparent" />

    <!-- container -->
    <div class="relative z-20 mx-auto flex h-full w-full max-w-[1200px] flex-col justify-between px-6 pb-8 pt-6">
      <!-- top bar -->
      <div class="flex items-center justify-between rounded-2xl bg-black/30 p-3 backdrop-blur">
        <button
          type="button"
          class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"
          @click="goBack"
        >
          <IconsArrowLeft class="h-4 w-4" />
        </button>

        <div class="flex-1 px-3">
          <p class="flex items-center gap-1 text-[13px] font-medium text-white">
            <IconsR class="h-3.5 w-3.5" />
            Rechitta
          </p>
          <p class="truncate text-xs italic text-white/60">
            "The perfect first investment... "
          </p>
        </div>

        <button
          type="button"
          class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-indigo-500"
        >
          <IconsMic class="h-4 w-4 text-white" />
        </button>
      </div>

      <!-- bottom content -->
      <div>
        <h1 class="text-3xl font-semibold tracking-tight">
          Project Overview
        </h1>

        <div class="mt-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur">
          <CardUnitRow
            v-for="unit in units"
            :key="unit.id"
            :unit-code="unit.unitCode"
            :details="unit.details"
            :price="unit.price"
          />
        </div>

        <!-- pagination dots -->
        <div class="mt-5 flex items-center justify-center gap-1.5">
          <span class="h-1.5 w-1.5 rounded-full bg-white/30" />
          <span class="h-1.5 w-4 rounded-full bg-white" />
          <span class="h-1.5 w-1.5 rounded-full bg-white/30" />
        </div>
      </div>
    </div>
  </main>
</template>