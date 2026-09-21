<script setup lang="ts">
</script>

<template>

    <div  class="relative z-10 grid h-[85%] w-full grid-cols-1 grid-rows-[auto_1fr_auto] text-white
            md:content-center lg:grid-cols-2 lg:grid-rows-[auto_auto_auto] lg:px-24 lg:pt-24">
        <!-- headline -->
        <div class="row-start-1 text-center lg:col-start-1 lg:row-start-1 lg:mb-10 lg:text-start">
          <p class="text-lg text-white/50 md:text-xl">
            Meet
          </p>
          <h1 class="mt-1 text-4xl font-semibold tracking-tight md:text-6xl">
            Rechitta
          </h1>
          <h2 class="mt-1 text-3xl font-normal text-white/90 md:text-5xl">
            Your AI Agent
          </h2>
          <p class="mx-auto mt-5 max-w-xs text-[15px] leading-relaxed text-white/50 md:max-w-md md:text-lg lg:mx-0">
            She guides your investment journey, answers your questions into a conversation, honest answers, plain language, no sales pitch.
          </p>
        </div>

        <!-- orb / logo -->
        <HeroAssetsLogo />

        <!-- advisor card -->
        <CardsAdvisor />
      </div>

</template>