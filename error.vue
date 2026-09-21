<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const HOME_ROUTE = '/splash' // TODO: dynamic - home route

const title = computed(() =>
  props.error.status === 404 ? 'Page Not Found' : 'Something Went Wrong' // TODO: dynamic - error titles
)

function goHome() {
  clearError({ redirect: HOME_ROUTE })
}
</script>

<template>
  <main class="flex min-h-screen items-center justify-center bg-black px-6 text-white">
    <div
      role="alert"
      class="w-full max-w-md rounded-2xl bg-white/5 p-8 text-center ring-1 ring-white/10 backdrop-blur"
    >
      <!-- error type -->
      <p class="text-6xl font-semibold tracking-tight text-white/90">
        {{ error.status }}
      </p>

      <h1 class="mt-4 text-xl font-semibold text-white">
        {{ title }}
      </h1>

      <!-- error message -->
      <p class="mx-auto mt-2 max-w-[300px] text-[15px] text-white/50">
        {{ error.statusText || error.message }}
      </p>

      <button
        type="button"
        class="mx-auto mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-[15px] font-medium text-black transition hover:bg-white/90"
        @click="goHome"
      >
        Back to Home
      </button>
    </div>
  </main>
</template>