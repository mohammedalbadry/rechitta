<script setup lang="ts">
function goBack() {
  navigateTo('/onboarding')
}
</script>

<template>
  <!-- page container -->
  <main class="relative h-screen w-full overflow-hidden bg-[#05080D] text-white">
    <!-- background photo -->
    <img
      src="~/assets/projects/2.png"
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

        <div class="mt-4 grid grid-cols-2 gap-3">
          <CardStat
            label="Investment from..."
            value="AED 2.8M"
            meta="2 Bed · 1,489-2,300 sqft"
          />
          <CardStat
            label="Handover"
            value="Q3 2025"
            meta="64% completed"
          />
          <CardStat
            label="Market appreciation"
            value="+17.5%"
            meta="2.2B in 2026 - 5.7B in 2031"
          />
          <CardStat
            label="Rental ROI"
            value="12.73%"
            meta="2.2x 5-yr appreciation"
          />
        </div>

        <!-- pagination dots -->
        <div class="mt-5 flex items-center justify-center gap-1.5">
          <span class="h-1.5 w-4 rounded-full bg-white" />
          <span class="h-1.5 w-1.5 rounded-full bg-white/30" />
          <span class="h-1.5 w-1.5 rounded-full bg-white/30" />
        </div>
      </div>
    </div>
  </main>
</template>