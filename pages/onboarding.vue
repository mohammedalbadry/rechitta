<script setup lang="ts">
const projects = useProjects()

// TODO: wire this to the real mic-permission / audio-reactive logic later
function onMicClick() {
  // placeholder
}
</script>

<template>
  <main>
    <!-- hero -->
    <div class="relative h-screen w-full overflow-y-hidden bg-[#000] text-white">
        <!-- page ambient background (waves + large glow) -->
        <SplashBackgroundGlow />

         <!-- container -->
        <div class="mx-auto flex h-full w-full max-w-[1200px] flex-col justify-between px-6 pt-14">
          <!-- page content -->
          <div
            class="relative z-10 grid h-[90%] w-full grid-cols-1 grid-rows-[auto_1fr_auto] text-white
                  md:content-center
                  lg:grid-cols-2 lg:grid-rows-[auto_auto_auto] lg:px-24 lg:pt-24"
          >
            <!-- headline -->
            <div class="row-start-1 text-center lg:col-start-1 lg:row-start-1 lg:mb-10 lg:text-start">
              <h1 class="mt-1 text-4xl font-semibold tracking-tight md:text-6xl">
                Speak to Discover
              </h1>
              <p class="mx-auto mt-5 max-w-xs text-[15px] leading-relaxed text-white/50 md:max-w-md md:text-lg lg:mx-0">
                Allow microphone access to search properties naturally, just as you would speak to an agent.
              </p>
            </div>

            <!-- orb / logo -->
            <HeroAssetsOrb />

            <!-- privacy notice -->
            <CardsNotice />
          </div>

          <!-- bottom navigation -->
          <NavigationNextSkip />
        </div>
     </div>
    
      <!-- project list -->
      <div class="mt-8 flex flex-col gap-4">
        <CardsProject v-for="project in projects" :key="project.id" :project="project"/>
      </div>

      <!-- schedule private viewing CTA -->
      <div class="mt-10 rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 backdrop-blur">
        <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
          <IconCalendar class="h-5 w-5" />
        </div>

        <h3 class="mt-4 text-xl font-semibold text-white">
          Schedule Private Viewing
        </h3>

        <p class="mx-auto mt-2 max-w-[260px] text-[15px] text-white/50">
          Experience Berkley Square North with our exclusive tour
        </p>

        <button
          type="button"
          class="mx-auto mt-5 flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-medium text-black transition hover:bg-white/90"
        >
          Book Appointment
          <IconArrowRight class="h-4 w-4" />
        </button>

        <p class="mt-3 text-xs text-white/40">
          Prestige Properties Group
        </p>
      </div>

  </main>
</template>
