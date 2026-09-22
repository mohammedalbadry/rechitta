<script setup lang="ts">
function goNext() {
  const route = useRoute()

  if (route.path === '/onboarding') {
    navigateTo('/test')
  } else {
    navigateTo('/onboarding')
  }
}
function skip() {
  alert("skip for now")
}
</script>


<template>
    <div class="relative z-10 flex items-center justify-between px-6 pb-10 md:px-16 md:pb-14 lg:px-24">
        <button
            type="button"
            class="text-[15px] text-white/40 transition hover:text-white/70 md:text-base"
            @click="skip"
        >
            Skip
        </button>

        <div class="flex items-center gap-1.5">
            <span class="h-1.5 w-4 rounded-full bg-white" />
            <span class="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span class="h-1.5 w-1.5 rounded-full bg-white/30" />
        </div>

        <button
            type="button"
            class="flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-[15px] font-medium text-black transition hover:bg-white/90 md:px-6 md:py-3 md:text-base"
            @click="goNext"
        >
            Next
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
            />
            </svg>
        </button>
    </div>
</template>