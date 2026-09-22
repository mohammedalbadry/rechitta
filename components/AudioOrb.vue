<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import type { MicrophoneState } from '~/composables/useMicrophone'
import orbVideo from '~/assets/images/orb_vedio.mp4'

const root = ref<HTMLElement | null>(null)
const video = ref<HTMLVideoElement | null>(null)

const MAX_SCALE_BOOST = 0.18
let reduceMotion = false

function applyLevel(level: number) {
  const el = root.value
  if (!el) return
  el.style.setProperty('--orb-glow', level.toFixed(3))
  el.style.setProperty('--orb-scale', (reduceMotion ? 1 : 1 + level * MAX_SCALE_BOOST).toFixed(3))
}

const { state, isActive, start, stop } = useMicrophone({ onLevel: applyLevel })

// TODO: dynamic - messages
const messages: Record<MicrophoneState, string> = {
  'idle': 'Tap the orb to enable the microphone',
  'requesting': 'Waiting for microphone permission...',
  'listening': 'Listening',
  'silence': 'I can\'t hear anything. Try speaking closer to the microphone.',
  'denied': 'Microphone access is blocked. Enable it from your browser\'s site settings, then try again.',
  'no-device': 'No microphone found. Connect one and try again.',
  'unsupported': 'Your browser doesn\'t support microphone access. Use a modern browser over HTTPS.',
  'error': 'The microphone stopped working. Please try again.'
}

const message = computed(() => messages[state.value])
const isMessageVisible = computed(() => state.value !== 'idle' && state.value !== 'listening')
const canRetry = computed(() => ['denied', 'no-device', 'error'].includes(state.value))
const isButtonDisabled = computed(() => state.value === 'requesting' || state.value === 'unsupported')

onMounted(() => {
  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const el = video.value
  if (!el) return

  if (reduceMotion) el.pause()
  else el.play().catch(() => {})
})

onUnmounted(() => {
  stop()
})
</script>

<template>
  <div ref="root" class="relative flex items-center justify-center">
    <!-- TODO: dynamic - glow color -->
    <div
      class="orb-glow pointer-events-none absolute inset-0 rounded-full bg-purple-500/40 blur-3xl"
      aria-hidden="true"
    />

    <video
      ref="video"
      :src="orbVideo"
      poster="~/assets/images/orb.png"
      autoplay
      muted
      loop
      playsinline
      aria-hidden="true"
      class="orb-video relative h-full w-full object-contain"
    />

    <button
      v-if="!isActive"
      type="button"
      class="absolute inset-0 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-default"
      aria-label="Enable microphone"
      :disabled="isButtonDisabled"
      @click="start"
    />

    <!-- TODO: dynamic - message position -->
    <div class="absolute left-1/2 top-full z-10 mt-3 flex w-max max-w-[260px] -translate-x-1/2 flex-col items-center gap-2 text-center">
      <p
        role="status"
        aria-live="polite"
        :class="isMessageVisible ? 'text-sm text-white/60' : 'sr-only'"
      >
        {{ message }}
      </p>

      <button
        v-if="canRetry"
        type="button"
        class="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
        @click="start"
      >
        Try again
      </button>
    </div>
  </div>
</template>

<style scoped>
.orb-glow {
  opacity: calc(0.25 + var(--orb-glow, 0) * 0.5);
  transform: scale(calc(1 + var(--orb-glow, 0) * 0.25));
  will-change: transform, opacity;
}

.orb-video {
  transform: scale(var(--orb-scale, 1));
  will-change: transform;
}
</style>