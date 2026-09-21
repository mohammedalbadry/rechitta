
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  "AudioOrb copy": typeof import("../../components/AudioOrb copy.vue")['default']
  AudioOrb: typeof import("../../components/AudioOrb.vue")['default']
  SkeletonProjectCard: typeof import("../../components/Skeleton/ProjectCard.vue")['default']
  CardsAdvisor: typeof import("../../components/cards/Advisor.vue")['default']
  CardsChatBubble: typeof import("../../components/cards/ChatBubble.vue")['default']
  CardsEmptyState: typeof import("../../components/cards/EmptyState.vue")['default']
  CardsNotice: typeof import("../../components/cards/Notice.vue")['default']
  CardsProject: typeof import("../../components/cards/Project.vue")['default']
  CardsStat: typeof import("../../components/cards/Stat.vue")['default']
  CardsUnitRow: typeof import("../../components/cards/UnitRow.vue")['default']
  HeroAssetsSplashText: typeof import("../../components/heroAssets/SplashText.vue")['default']
  HeroAssetsLogo: typeof import("../../components/heroAssets/logo.vue")['default']
  HeroAssetsOrb: typeof import("../../components/heroAssets/orb.vue")['default']
  IconsArrowLeft: typeof import("../../components/icons/ArrowLeft.vue")['default']
  IconsArrowRight: typeof import("../../components/icons/ArrowRight.vue")['default']
  IconsCalendar: typeof import("../../components/icons/Calendar.vue")['default']
  IconsMessageBubble: typeof import("../../components/icons/MessageBubble.vue")['default']
  IconsMic: typeof import("../../components/icons/Mic.vue")['default']
  IconsShield: typeof import("../../components/icons/Shield.vue")['default']
  IconsR: typeof import("../../components/icons/r.vue")['default']
  NavigationNextSkip: typeof import("../../components/navigation/NextSkip.vue")['default']
  OnboardingBackgroundGlow: typeof import("../../components/onboarding/BackgroundGlow.vue")['default']
  SplashBackgroundGlow: typeof import("../../components/splash/BackgroundGlow.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  "LazyAudioOrb copy": LazyComponent<typeof import("../../components/AudioOrb copy.vue")['default']>
  LazyAudioOrb: LazyComponent<typeof import("../../components/AudioOrb.vue")['default']>
  LazySkeletonProjectCard: LazyComponent<typeof import("../../components/Skeleton/ProjectCard.vue")['default']>
  LazyCardsAdvisor: LazyComponent<typeof import("../../components/cards/Advisor.vue")['default']>
  LazyCardsChatBubble: LazyComponent<typeof import("../../components/cards/ChatBubble.vue")['default']>
  LazyCardsEmptyState: LazyComponent<typeof import("../../components/cards/EmptyState.vue")['default']>
  LazyCardsNotice: LazyComponent<typeof import("../../components/cards/Notice.vue")['default']>
  LazyCardsProject: LazyComponent<typeof import("../../components/cards/Project.vue")['default']>
  LazyCardsStat: LazyComponent<typeof import("../../components/cards/Stat.vue")['default']>
  LazyCardsUnitRow: LazyComponent<typeof import("../../components/cards/UnitRow.vue")['default']>
  LazyHeroAssetsSplashText: LazyComponent<typeof import("../../components/heroAssets/SplashText.vue")['default']>
  LazyHeroAssetsLogo: LazyComponent<typeof import("../../components/heroAssets/logo.vue")['default']>
  LazyHeroAssetsOrb: LazyComponent<typeof import("../../components/heroAssets/orb.vue")['default']>
  LazyIconsArrowLeft: LazyComponent<typeof import("../../components/icons/ArrowLeft.vue")['default']>
  LazyIconsArrowRight: LazyComponent<typeof import("../../components/icons/ArrowRight.vue")['default']>
  LazyIconsCalendar: LazyComponent<typeof import("../../components/icons/Calendar.vue")['default']>
  LazyIconsMessageBubble: LazyComponent<typeof import("../../components/icons/MessageBubble.vue")['default']>
  LazyIconsMic: LazyComponent<typeof import("../../components/icons/Mic.vue")['default']>
  LazyIconsShield: LazyComponent<typeof import("../../components/icons/Shield.vue")['default']>
  LazyIconsR: LazyComponent<typeof import("../../components/icons/r.vue")['default']>
  LazyNavigationNextSkip: LazyComponent<typeof import("../../components/navigation/NextSkip.vue")['default']>
  LazyOnboardingBackgroundGlow: LazyComponent<typeof import("../../components/onboarding/BackgroundGlow.vue")['default']>
  LazySplashBackgroundGlow: LazyComponent<typeof import("../../components/splash/BackgroundGlow.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
