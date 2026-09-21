<script setup lang="ts">
</script>

<template>
  <!-- page container -->
  <main class="relative flex h-screen w-full flex-col justify-between overflow-hidden bg-[#011d24]">
    <!-- page ambient background glow -->
    <SplashBackgroundGlow />

    <!-- container -->
    <div class="mx-auto flex h-full w-full max-w-[1200px] flex-col justify-between px-6 pt-14">
      <!-- page content -->
      <HeroAssetsSplashText />

      <!-- bottom navigation -->
      <NavigationNextSkip />

    </div>

  </main>
</template>