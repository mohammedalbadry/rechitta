```vue
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const video = ref<HTMLVideoElement | null>(null)
const isListening = ref(false)

let audioContext: AudioContext | null = null
let analyser: AnalyserNode | null = null
let animationFrame = 0
let stream: MediaStream | null = null
let frequencyData: Uint8Array<ArrayBuffer> | null = null

const scale = ref(1)
const glow = ref(0)

const startAudio = async () => {
  if (isListening.value) return

  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true })

    audioContext = new AudioContext()

    const source = audioContext.createMediaStreamSource(stream)

    analyser = audioContext.createAnalyser()
    analyser.fftSize = 256
    analyser.smoothingTimeConstant = 0.8

    frequencyData = new Uint8Array(analyser.frequencyBinCount)

    source.connect(analyser)

    isListening.value = true

    updateAudio()
  } catch (error) {
    console.error('Microphone access failed:', error)
  }
}

const updateAudio = () => {
  if (!analyser || !frequencyData) return

  analyser.getByteFrequencyData(frequencyData)

  let sum = 0

  for (const value of frequencyData) {
    sum += value
  }

  const average = sum / frequencyData.length
  const intensity = average / 255

  scale.value = 1 + intensity * 0.18
  glow.value = intensity

  animationFrame = requestAnimationFrame(updateAudio)
}

const stopAudio = () => {
  cancelAnimationFrame(animationFrame)

  stream?.getTracks().forEach(track => track.stop())

  audioContext?.close()

  stream = null
  audioContext = null
  analyser = null
  frequencyData = null

  isListening.value = false
  scale.value = 1
  glow.value = 0
}

onMounted(() => {
  if (video.value) {
    video.value.play().catch(() => {})
  }
})

onBeforeUnmount(() => {
  stopAudio()
})
</script>

<template>
  <div class="relative flex items-center justify-center">
    <div
      class="absolute inset-0 rounded-full blur-3xl transition-all duration-75"
      :style="{
        opacity: 0.25 + glow * 0.5,
        transform: `scale(${1 + glow * 0.25})`
      }"
    />

    <video
      ref="video"
      src="~/assets/images/orb_vedio.mp4"
      poster="~/assets/images/orb.png"
      autoplay
      muted
      loop
      playsinline
      class="relative h-full w-full object-contain"
      :style="{
        transform: `scale(${scale})`
      }"
    />

    <button
      v-if="!isListening"
      type="button"
      class="absolute inset-0"
      aria-label="Enable microphone"
      @click="startAudio"
    />
  </div>
</template>