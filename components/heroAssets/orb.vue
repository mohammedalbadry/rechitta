<script setup lang="ts">
</script>

<template>
    <div class="h-full grow row-start-2 my-6 flex flex-col items-center justify-center lg:col-start-2 lg:row-start-1 lg:row-span-3">
        <!-- "you can ask" label -->
        <p class="my-8 text-center text-xs font-medium uppercase tracking-widest text-white">
        You can ask<br>
        Rechitta anything
        </p>

        <div class="relative h-full w-full flex flex-col items-center justify-center">
        <video
            class="object-cover absolute inset-0 z-9 h-full w-full max-h-[270px]"
            src="~/assets/images/orb_vedio.mp4"
            poster="~/assets/images/orb.png"
            autoplay
            loop
            muted
            playsinline
        />

        <!-- floating question bubbles, positioned around the orb -->
        <div class="h-full w-full  flex flex-col mx-auto mt-8 h-[340px] gap-y-6 w-full max-w-[320px] items-center justify-center">
            <div class="rotate-[3.75deg] self-start">
                <CardsChatBubble text="Is there a 2-bed available..." />
            </div>
            <div class="rotate-[2deg] self-end">
                <CardsChatBubble text="What's the price history?" />
            </div>
            <div class="-rotate-[4deg] self-start">
                <CardsChatBubble text="What is proximity to good schools" />
            </div>
            <div class="rotate-[3deg] self-end">
                <CardsChatBubble text="Show me the floor plan" />
            </div>
            <div class="rotate-[4.3deg] self-start">
                <CardsChatBubble text="How does the payment plan work..." />
            </div>
        </div>
        </div>
    </div>
</template>