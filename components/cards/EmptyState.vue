<template>
    <div class="rounded-2xl bg-white/5 p-10 text-center ring-1 ring-white/10 backdrop-blur">
        <h3 class="text-xl font-semibold text-white">
        No Projects Available
        </h3>

        <p class="mx-auto mt-2 max-w-[300px] text-[15px] text-white/50">
        There are no projects to show right now. Please check back soon.
        </p>

        <NuxtLink
        to="/splash"
        class="mx-auto mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-[15px] font-medium text-black transition hover:bg-white/90"
        >
        Back to Home
        </NuxtLink>
    </div>
</template>