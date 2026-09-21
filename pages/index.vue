<script setup lang="ts">
useHead({
  title: 'Rechitta — Assignment Submission',
  htmlAttrs: {
    lang: 'en',
    class:
      'pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)] scroll-pt-[env(safe-area-inset-top,0px)]',
  },
  bodyAttrs: {
    class:
      'bg-[#05080D] text-[#F4F7FA] font-[family-name:Inter,system-ui,sans-serif] leading-[1.55] antialiased',
  },
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, viewport-fit=cover',
    },
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
    },
  ],
})
</script>

<template>
  <div>
    <div
      class="fixed -top-[20%] left-1/2 z-0 h-[900px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(0,169,207,0.16)_0%,transparent_65%)] pointer-events-none"
      aria-hidden="true"
    ></div>

    <div class="relative z-[1] mx-auto max-w-[880px] px-6 pb-24 pt-[72px]">
      <header class="mb-14">
        <div
          class="mb-[18px] inline-flex items-center gap-2 text-[13px] font-medium text-[#00A9CF] before:h-[6px] before:w-[6px] before:rounded-full before:bg-[#00A9CF] before:shadow-[0_0_8px_#00A9CF]"
        >
          Assignment submission
        </div>
        <h1
          class="mb-[14px] text-[length:clamp(32px,5vw,44px)] font-semibold tracking-[-0.02em]"
        >
          Frontend-Focused SWE Assignment
        </h1>
        <p class="mb-8 max-w-[60ch] text-[17px] text-[rgba(244,247,250,0.55)]">
          Built with Vue 3, Nuxt 3, Tailwind CSS and TypeScript, based on the provided Figma design.
          This page covers a short QA report on the source design, the stack and tools used, testing
          coverage, and how to run the project locally.
        </p>
        <div class="flex flex-wrap gap-3">
          <a
            id="download-link"
            href="#"
            class="inline-flex items-center gap-2 rounded-[999px] bg-white px-[22px] py-3 text-[14px] font-medium text-[#05080D] transition-[opacity,transform] ease-[ease] hover:opacity-[0.85] active:scale-[0.98]"
          >
            Download code (.zip)
          </a>
          <a
            id="live-link"
            href="#"
            class="inline-flex items-center gap-2 rounded-[999px] border border-[rgba(255,255,255,0.08)] px-[22px] py-3 text-[14px] font-medium transition-[opacity,transform] ease-[ease] hover:opacity-[0.85] active:scale-[0.98]"
          >
            Live preview
          </a>
        </div>
      </header>

      <section class="mt-16">
        <h2
          class="mb-5 border-b border-[rgba(255,255,255,0.08)] pb-[14px] text-[13px] font-semibold uppercase tracking-[0.08em] text-[rgba(244,247,250,0.55)]"
        >
          QA report — Figma design
        </h2>
        <div
          class="mb-[14px] rounded-xl border border-l-[3px] border-[rgba(255,255,255,0.08)] border-l-[#E8B95C] bg-[rgba(255,255,255,0.04)] px-5 py-[18px] last:mb-0 motion-safe:transition-[border-color] motion-safe:duration-200 motion-safe:ease-[ease]"
        >
          <h3 class="mb-[6px] text-[15px] font-semibold">
            Inconsistent pagination controls on Project Overview screens
          </h3>
          <p class="text-[14px] text-[rgba(244,247,250,0.55)]">
            The Project Overview screens show a page indicator (dots) without next/previous arrows,
            while every other screen that includes an indicator pairs it with navigation arrows.
            This was treated as a design inconsistency rather than an intentional pattern, and the
            implementation follows the arrow-paired pattern used elsewhere for consistency.
          </p>
        </div>
        <div
          class="mb-[14px] rounded-xl border border-l-[3px] border-[rgba(255,255,255,0.08)] border-l-[#E8B95C] bg-[rgba(255,255,255,0.04)] px-5 py-[18px] last:mb-0 motion-safe:transition-[border-color] motion-safe:duration-200 motion-safe:ease-[ease]"
        >
          <h3 class="mb-[6px] text-[15px] font-semibold">
            Background waves and glow differ between adjacent screens
          </h3>
          <p class="text-[14px] text-[rgba(244,247,250,0.55)]">
            The ambient background (wave lines and glow position/intensity) is not identical between
            the first screen and the ones that follow it, which causes a visible jump in the
            background when navigating from one screen to the next. The implementation standardizes
            this background across all screens to keep transitions visually continuous.
          </p>
        </div>
      </section>

      <section class="mt-16">
        <h2
          class="mb-5 border-b border-[rgba(255,255,255,0.08)] pb-[14px] text-[13px] font-semibold uppercase tracking-[0.08em] text-[rgba(244,247,250,0.55)]"
        >
          Stack &amp; tools
        </h2>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[14px]">
          <div
            class="rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-[18px] py-4 motion-safe:transition-[border-color] motion-safe:duration-200 motion-safe:ease-[ease]"
          >
            <p class="mb-2 text-[12px] text-[rgba(244,247,250,0.55)]">Framework &amp; language</p>
            <div class="flex flex-wrap gap-2">
              <span
                class="inline-block rounded-[999px] bg-[rgba(0,169,207,0.14)] px-3 py-[5px] text-[13px] font-medium text-[#00A9CF]"
                >Vue 3</span
              >
              <span
                class="inline-block rounded-[999px] bg-[rgba(0,169,207,0.14)] px-3 py-[5px] text-[13px] font-medium text-[#00A9CF]"
                >Nuxt 3</span
              >
              <span
                class="inline-block rounded-[999px] bg-[rgba(0,169,207,0.14)] px-3 py-[5px] text-[13px] font-medium text-[#00A9CF]"
                >TypeScript</span
              >
              <span
                class="inline-block rounded-[999px] bg-[rgba(0,169,207,0.14)] px-3 py-[5px] text-[13px] font-medium text-[#00A9CF]"
                >Tailwind CSS</span
              >
            </div>
          </div>
          <div
            class="rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-[18px] py-4 motion-safe:transition-[border-color] motion-safe:duration-200 motion-safe:ease-[ease]"
          >
            <p class="mb-2 text-[12px] text-[rgba(244,247,250,0.55)]">Development tools</p>
            <p class="text-[14px]">VS Code, Claude Code</p>
          </div>
          <div
            class="rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-[18px] py-4 motion-safe:transition-[border-color] motion-safe:duration-200 motion-safe:ease-[ease]"
          >
            <p class="mb-2 text-[12px] text-[rgba(244,247,250,0.55)]">Browsers tested</p>
            <p class="text-[14px]">Chrome, Firefox, Edge, Brave</p>
          </div>
          <div
            class="rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-[18px] py-4 motion-safe:transition-[border-color] motion-safe:duration-200 motion-safe:ease-[ease]"
          >
            <p class="mb-2 text-[12px] text-[rgba(244,247,250,0.55)]">Compatibility</p>
            <p class="text-[14px]">Screen readers, search engine crawlers</p>
          </div>
        </div>
      </section>

      <section class="mt-16">
        <h2
          class="mb-5 border-b border-[rgba(255,255,255,0.08)] pb-[14px] text-[13px] font-semibold uppercase tracking-[0.08em] text-[rgba(244,247,250,0.55)]"
        >
          Responsive testing coverage
        </h2>
        <div
          class="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-[22px] py-5 motion-safe:transition-[border-color] motion-safe:duration-200 motion-safe:ease-[ease]"
        >
          <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
            <div>
              <h4 class="mb-[10px] text-[13px] font-medium text-[rgba(244,247,250,0.55)]">Mobile</h4>
              <ul class="flex flex-col gap-[6px]">
                <li
                  class="relative pl-[14px] text-[14px] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[#00A9CF]"
                >
                  iPhone SE
                </li>
                <li
                  class="relative pl-[14px] text-[14px] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[#00A9CF]"
                >
                  iPhone 16
                </li>
                <li
                  class="relative pl-[14px] text-[14px] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[#00A9CF]"
                >
                  iPhone 16 Pro Max
                </li>
                <li
                  class="relative pl-[14px] text-[14px] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[#00A9CF]"
                >
                  Pixel 9
                </li>
                <li
                  class="relative pl-[14px] text-[14px] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[#00A9CF]"
                >
                  Pixel 9 Pro
                </li>
                <li
                  class="relative pl-[14px] text-[14px] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[#00A9CF]"
                >
                  Pixel 10
                </li>
                <li
                  class="relative pl-[14px] text-[14px] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[#00A9CF]"
                >
                  Samsung Galaxy A55
                </li>
              </ul>
            </div>
            <div>
              <h4 class="mb-[10px] text-[13px] font-medium text-[rgba(244,247,250,0.55)]">Foldables</h4>
              <ul class="flex flex-col gap-[6px]">
                <li
                  class="relative pl-[14px] text-[14px] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[#00A9CF]"
                >
                  Pixel 9 Pro Fold
                </li>
                <li
                  class="relative pl-[14px] text-[14px] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[#00A9CF]"
                >
                  Galaxy Z Fold 6
                </li>
              </ul>
            </div>
            <div>
              <h4 class="mb-[10px] text-[13px] font-medium text-[rgba(244,247,250,0.55)]">
                Tablets &amp; desktops
              </h4>
              <ul class="flex flex-col gap-[6px]">
                <li
                  class="relative pl-[14px] text-[14px] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[#00A9CF]"
                >
                  iPad Mini
                </li>
                <li
                  class="relative pl-[14px] text-[14px] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[#00A9CF]"
                >
                  iPad Pro 13
                </li>
                <li
                  class="relative pl-[14px] text-[14px] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[#00A9CF]"
                >
                  Surface Pro 10
                </li>
              </ul>
            </div>
            <div>
              <h4 class="mb-[10px] text-[13px] font-medium text-[rgba(244,247,250,0.55)]">
                Smart displays
              </h4>
              <ul class="flex flex-col gap-[6px]">
                <li
                  class="relative pl-[14px] text-[14px] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[#00A9CF]"
                >
                  Nest Hub Max
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-16">
        <h2
          class="mb-5 border-b border-[rgba(255,255,255,0.08)] pb-[14px] text-[13px] font-semibold uppercase tracking-[0.08em] text-[rgba(244,247,250,0.55)]"
        >
          Running the project
        </h2>

        <ol class="[counter-reset:step]">
          <li
            class="relative mb-[22px] pl-10 [counter-increment:step] before:absolute before:left-0 before:top-0 before:flex before:h-[26px] before:w-[26px] before:items-center before:justify-center before:rounded-full before:bg-[rgba(0,169,207,0.14)] before:text-[12px] before:font-semibold before:text-[#00A9CF] before:content-[counter(step)] last:mb-0"
          >
            <h4 class="mb-[6px] text-[14px] font-semibold">Local environment</h4>
            <p class="mb-[10px] text-[14px] text-[rgba(244,247,250,0.55)]">
              Requires an environment compatible with Nuxt 3. Developed and tested on Node
              <code class="font-[family-name:JetBrains_Mono,ui-monospace,monospace] text-[13px] text-[#B8E8F5]">v24.16.0</code> or newer.
            </p>
            <pre
              class="overflow-x-auto rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[#0A0F16] px-4 py-[14px]"
            ><code class="font-[family-name:JetBrains_Mono,ui-monospace,monospace] text-[13px] text-[#B8E8F5]">npm install
npm run dev</code></pre>
          </li>
          <li
            class="relative mb-[22px] pl-10 [counter-increment:step] before:absolute before:left-0 before:top-0 before:flex before:h-[26px] before:w-[26px] before:items-center before:justify-center before:rounded-full before:bg-[rgba(0,169,207,0.14)] before:text-[12px] before:font-semibold before:text-[#00A9CF] before:content-[counter(step)] last:mb-0"
          >
            <h4 class="mb-[6px] text-[14px] font-semibold">Docker (recommended)</h4>
            <p class="mb-[10px] text-[14px] text-[rgba(244,247,250,0.55)]">
              A Dockerfile is included with all project dependencies. Build and run the container
              from the project root:
            </p>
            <pre
              class="overflow-x-auto rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[#0A0F16] px-4 py-[14px]"
            ><code class="font-[family-name:JetBrains_Mono,ui-monospace,monospace] text-[13px] text-[#B8E8F5]">docker build -t rechitta-assignment .
docker run -p 3000:3000 rechitta-assignment</code></pre>
            <p class="my-[10px] text-[14px] text-[rgba(244,247,250,0.55)]">
              If a <code class="font-[family-name:JetBrains_Mono,ui-monospace,monospace] text-[13px] text-[#B8E8F5]">docker-compose.yml</code> is present instead, use:
            </p>
            <pre
              class="overflow-x-auto rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[#0A0F16] px-4 py-[14px]"
            ><code class="font-[family-name:JetBrains_Mono,ui-monospace,monospace] text-[13px] text-[#B8E8F5]">docker compose up --build</code></pre>
            <p class="my-[10px] text-[14px] text-[rgba(244,247,250,0.55)]">
              Once running, open <code class="font-[family-name:JetBrains_Mono,ui-monospace,monospace] text-[13px] text-[#B8E8F5]">http://localhost:3000</code> in the browser.
            </p>
          </li>
        </ol>
      </section>

      <footer
        class="mt-[72px] border-t border-[rgba(255,255,255,0.08)] pt-6 text-[13px] text-[rgba(244,247,250,0.55)]"
      >
        Prepared for the Rechitta Frontend-Focused SWE Assignment.
      </footer>
    </div>
  </div>
</template>