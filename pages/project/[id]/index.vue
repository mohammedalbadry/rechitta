<script setup lang="ts">
const route = useRoute()
const { data: project, pending, error } = useProject(route.params.id as string)

const activeTab = ref(0)

function goBack() {
  navigateTo('/onboarding')
}

function setTab(index: number) {
  if (index === 2) {
    alert('This view was not specified in the Figma design')
    return
  }
  activeTab.value = index
}
</script>

<template>
  <main class="relative h-screen w-full overflow-hidden bg-[#05080D] text-white">
    <div v-if="pending" class="flex h-full items-center justify-center">
      Loading...
    </div>

    <div v-else-if="error || !project" class="flex h-full items-center justify-center">
      Project not found
    </div>

    <template v-else>
      <img
        :src="project.image"
        alt=""
        class="absolute inset-0 z-0 h-full w-full object-cover"
      >

      <div class="absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-[#05080D] via-[#05080D]/80 to-transparent" />

      <div class="relative z-20 mx-auto flex h-full w-full max-w-[1200px] flex-col justify-between px-6 pb-8 pt-6">
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
              {{ project.name }}
            </p>
            <p class="truncate text-xs italic text-white/60">
              {{ project.location }}
            </p>
          </div>

          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-indigo-500"
          >
            <IconsMic class="h-4 w-4 text-white" />
          </button>
        </div>

        <div>
          <h1 class="text-3xl font-semibold tracking-tight">
            Project Overview
          </h1>

          <!-- Grid view -->
          <div v-if="activeTab === 0" class="mt-4 grid grid-cols-2 gap-3">
            <CardsStat label="Investment from..." :value="project.investmentFrom" meta="2 Bed · 1,489-2,300 sqft" />
            <CardsStat label="Handover" :value="project.handover" :meta="project.handoverProgress" />
            <CardsStat label="Market appreciation" :value="project.marketAppreciation" :meta="project.marketAppreciationMeta" />
            <CardsStat label="Rental ROI" :value="project.rentalRoi" :meta="project.rentalRoiMeta" />
          </div>

          <!-- List view -->
          <div v-else-if="activeTab === 1" class="mt-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur">
            <CardsUnitRow
              v-for="unit in project.units"
              :key="unit.id"
              :unit-code="unit.unitCode"
              :details="unit.details"
              :price="unit.price"
            />
          </div>

          <!-- pagination dots -->
          <div class="mt-5 flex items-center justify-center gap-1.5">
            <button
              v-for="i in 3"
              :key="i"
              type="button"
              class="h-1.5 rounded-full transition-all"
              :class="activeTab === i - 1 ? 'w-4 bg-white' : 'w-1.5 bg-white/30'"
              @click="setTab(i - 1)"
            />
          </div>
        </div>
      </div>
    </template>
  </main>
</template>