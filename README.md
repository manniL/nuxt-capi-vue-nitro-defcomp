# Nuxt Composition API `defineComponent` can't be mixed with Vue's `defineComponent` when Nitro is used

Hey all!

It is not possible to mix `import { defineComponent as foo } from '@vue/composition-api'` with `import { defineComponent } from '@nuxtjs/composition-api'`
when using Nitro. I guess it is related to rollup?

In this repo, the page uses Nuxt's defineComponent while the Logo component uses the method provided by the CAPI Vue plugin 

## Repro

1. Get deps (`yarn`)
2. Start dev server with `yarn dev`
3. See error (`Error: render function or template not defined in component: Logo`)
4. Stop server and start with `yarn dev:no-nitro`
5. See that error is not present.

## Expected

No error when mixing both APIs
