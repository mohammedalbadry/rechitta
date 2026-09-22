
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


export const AudioOrb copy: typeof import("../components/AudioOrb copy.vue")['default']
export const AudioOrb: typeof import("../components/AudioOrb.vue")['default']
export const SkeletonProjectCard: typeof import("../components/Skeleton/ProjectCard.vue")['default']
export const CardsAdvisor: typeof import("../components/cards/Advisor.vue")['default']
export const CardsChatBubble: typeof import("../components/cards/ChatBubble.vue")['default']
export const CardsEmptyState: typeof import("../components/cards/EmptyState.vue")['default']
export const CardsNotice: typeof import("../components/cards/Notice.vue")['default']
export const CardsProject copy: typeof import("../components/cards/Project copy.vue")['default']
export const CardsProject: typeof import("../components/cards/Project.vue")['default']
export const CardsStat: typeof import("../components/cards/Stat.vue")['default']
export const CardsUnitRow: typeof import("../components/cards/UnitRow.vue")['default']
export const HeroAssetsSplashText: typeof import("../components/heroAssets/SplashText.vue")['default']
export const HeroAssetsLogo: typeof import("../components/heroAssets/logo.vue")['default']
export const HeroAssetsOrb: typeof import("../components/heroAssets/orb.vue")['default']
export const IconsArrowLeft: typeof import("../components/icons/ArrowLeft.vue")['default']
export const IconsArrowRight: typeof import("../components/icons/ArrowRight.vue")['default']
export const IconsCalendar: typeof import("../components/icons/Calendar.vue")['default']
export const IconsMessageBubble: typeof import("../components/icons/MessageBubble.vue")['default']
export const IconsMic: typeof import("../components/icons/Mic.vue")['default']
export const IconsShield: typeof import("../components/icons/Shield.vue")['default']
export const IconsR: typeof import("../components/icons/r.vue")['default']
export const NavigationNextSkip: typeof import("../components/navigation/NextSkip.vue")['default']
export const OnboardingBackgroundGlow: typeof import("../components/onboarding/BackgroundGlow.vue")['default']
export const SplashBackgroundGlow: typeof import("../components/splash/BackgroundGlow.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAudioOrb copy: LazyComponent<typeof import("../components/AudioOrb copy.vue")['default']>
export const LazyAudioOrb: LazyComponent<typeof import("../components/AudioOrb.vue")['default']>
export const LazySkeletonProjectCard: LazyComponent<typeof import("../components/Skeleton/ProjectCard.vue")['default']>
export const LazyCardsAdvisor: LazyComponent<typeof import("../components/cards/Advisor.vue")['default']>
export const LazyCardsChatBubble: LazyComponent<typeof import("../components/cards/ChatBubble.vue")['default']>
export const LazyCardsEmptyState: LazyComponent<typeof import("../components/cards/EmptyState.vue")['default']>
export const LazyCardsNotice: LazyComponent<typeof import("../components/cards/Notice.vue")['default']>
export const LazyCardsProject copy: LazyComponent<typeof import("../components/cards/Project copy.vue")['default']>
export const LazyCardsProject: LazyComponent<typeof import("../components/cards/Project.vue")['default']>
export const LazyCardsStat: LazyComponent<typeof import("../components/cards/Stat.vue")['default']>
export const LazyCardsUnitRow: LazyComponent<typeof import("../components/cards/UnitRow.vue")['default']>
export const LazyHeroAssetsSplashText: LazyComponent<typeof import("../components/heroAssets/SplashText.vue")['default']>
export const LazyHeroAssetsLogo: LazyComponent<typeof import("../components/heroAssets/logo.vue")['default']>
export const LazyHeroAssetsOrb: LazyComponent<typeof import("../components/heroAssets/orb.vue")['default']>
export const LazyIconsArrowLeft: LazyComponent<typeof import("../components/icons/ArrowLeft.vue")['default']>
export const LazyIconsArrowRight: LazyComponent<typeof import("../components/icons/ArrowRight.vue")['default']>
export const LazyIconsCalendar: LazyComponent<typeof import("../components/icons/Calendar.vue")['default']>
export const LazyIconsMessageBubble: LazyComponent<typeof import("../components/icons/MessageBubble.vue")['default']>
export const LazyIconsMic: LazyComponent<typeof import("../components/icons/Mic.vue")['default']>
export const LazyIconsShield: LazyComponent<typeof import("../components/icons/Shield.vue")['default']>
export const LazyIconsR: LazyComponent<typeof import("../components/icons/r.vue")['default']>
export const LazyNavigationNextSkip: LazyComponent<typeof import("../components/navigation/NextSkip.vue")['default']>
export const LazyOnboardingBackgroundGlow: LazyComponent<typeof import("../components/onboarding/BackgroundGlow.vue")['default']>
export const LazySplashBackgroundGlow: LazyComponent<typeof import("../components/splash/BackgroundGlow.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
