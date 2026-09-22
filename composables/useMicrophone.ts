import { computed, onUnmounted, ref } from 'vue'

export type MicrophoneState =
  | 'idle'
  | 'requesting'
  | 'listening'
  | 'silence'
  | 'denied'
  | 'no-device'
  | 'unsupported'
  | 'error'

interface UseMicrophoneOptions {
  onLevel?: (level: number) => void
  silenceTimeout?: number
  silenceThreshold?: number
}

export function useMicrophone(options: UseMicrophoneOptions = {}) {
  const { onLevel, silenceTimeout = 3000, silenceThreshold = 0.02 } = options

  const state = ref<MicrophoneState>('idle')
  const isActive = computed(() => state.value === 'listening' || state.value === 'silence')

  let audioContext: AudioContext | null = null
  let analyser: AnalyserNode | null = null
  let source: MediaStreamAudioSourceNode | null = null
  let stream: MediaStream | null = null
  let rafId: number | null = null
  let silenceTimer: ReturnType<typeof setTimeout> | null = null
  let dataArray: Uint8Array | null = null

  function resetSilenceTimer() {
    if (silenceTimer) clearTimeout(silenceTimer)
    silenceTimer = setTimeout(() => {
      if (state.value === 'listening') state.value = 'silence'
    }, silenceTimeout)
  }

  function tick() {
    if (!analyser || !dataArray) return
    analyser.getByteTimeDomainData(dataArray)

    let sum = 0
    for (let i = 0; i < dataArray.length; i++) {
      const v = (dataArray[i] - 128) / 128
      sum += v * v
    }
    const level = Math.min(1, Math.sqrt(sum / dataArray.length) * 4)

    onLevel?.(level)

    if (level > silenceThreshold) {
      if (state.value === 'silence') state.value = 'listening'
      resetSilenceTimer()
    }

    rafId = requestAnimationFrame(tick)
  }

  function cleanup() {
    if (rafId) cancelAnimationFrame(rafId)
    if (silenceTimer) clearTimeout(silenceTimer)
    rafId = null
    silenceTimer = null

    source?.disconnect()
    analyser?.disconnect()
    stream?.getTracks().forEach(t => t.stop())
    audioContext?.close().catch(() => {})

    audioContext = null
    analyser = null
    source = null
    stream = null
    dataArray = null
  }

  async function start() {
    if (state.value === 'requesting' || isActive.value) return

    if (!navigator.mediaDevices?.getUserMedia || !window.AudioContext) {
      state.value = 'unsupported'
      return
    }

    state.value = 'requesting'

    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    } catch (err: any) {
      if (err?.name === 'NotFoundError' || err?.name === 'OverconstrainedError') state.value = 'no-device'
      else if (err?.name === 'NotAllowedError' || err?.name === 'SecurityError') state.value = 'denied'
      else state.value = 'error'
      return
    }

    try {
      audioContext = new AudioContext()
      source = audioContext.createMediaStreamSource(stream)
      analyser = audioContext.createAnalyser()
      analyser.fftSize = 1024
      dataArray = new Uint8Array(analyser.fftSize)
      source.connect(analyser)

      state.value = 'listening'
      resetSilenceTimer()
      tick()
    } catch {
      cleanup()
      state.value = 'error'
    }
  }

  function stop() {
    cleanup()
    state.value = 'idle'
  }

  onUnmounted(cleanup)

  return { state, isActive, start, stop }
}