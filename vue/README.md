# @astraicons/vue

<p align="center">
  <a href="https://uiastra.com" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/uiastra/astraicons/HEAD/.github/dark.jpg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/uiastra/astraicons/HEAD/.github/light.jpg">
      <img alt="AstraIcons" style="max-width: 100%" src="https://raw.githubusercontent.com/uiastra/astraicons/HEAD/.github/light.jpg">
    </picture>
  </a>
</p>

<p align="center">
  Beautiful Vue 3 icons from the Astra Icons collection. 900+ icons across 5 styles.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@astraicons/vue"><img src="https://img.shields.io/npm/v/@astraicons/vue?color=green" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@astraicons/vue"><img src="https://img.shields.io/npm/dm/@astraicons/vue?color=green" alt="npm downloads"></a>
  <a href="https://github.com/uiastra/astraicons/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
</p>

## Installation

```bash
npm install @astraicons/vue
# or
yarn add @astraicons/vue
# or
pnpm add @astraicons/vue
```

## Usage

Import icons from their respective style directories:

```vue
<template>
  <div>
    <HomeIcon class="w-6 h-6" />
    <HeartIcon class="w-6 h-6 text-red-500" />
    <StarIcon class="w-6 h-6 text-yellow-500" />
    <AppleIcon class="w-8 h-8" />
    <CubeIcon class="w-8 h-8 text-purple-500" />
  </div>
</template>

<script setup>
import { HomeIcon } from '@astraicons/vue/linear';
import { HeartIcon } from '@astraicons/vue/bold';
import { StarIcon } from '@astraicons/vue/duotone';
import { AppleIcon } from '@astraicons/vue/brand';
import { CubeIcon } from '@astraicons/vue/3d';
</script>
```

## Icon Styles

### Linear (288 icons)
Outline icons with 1.5px stroke width. Perfect for modern, minimalist interfaces.

```js
import { ActivityIcon, BellIcon, CameraIcon } from '@astraicons/vue/linear';
```

### Bold (288 icons)
Filled or bold stroke icons for emphasis and better visibility at smaller sizes.

```js
import { ActivityIcon, BellIcon, CameraIcon } from '@astraicons/vue/bold';
```

### Duotone (288 icons)
Two-tone icons that combine filled and outline styles for depth and visual interest.

```js
import { ActivityIcon, BellIcon, CameraIcon } from '@astraicons/vue/duotone';
```

### Brand (18 icons)
Company and service logos including social media platforms and popular brands.

```js
import { AppleIcon, GoogleIcon, TwitterIcon } from '@astraicons/vue/brand';
```

### 3D (32 icons)
Modern three-dimensional style icons with depth and perspective for contemporary interfaces.

```js
import { CubeIcon, FolderIcon, BoxIcon } from '@astraicons/vue/3d';
```

## Props

All icons are functional components that accept standard HTML attributes:

```vue
<template>
  <HomeIcon 
    class="custom-class"
    :style="{ color: 'blue' }"
    @click="handleClick"
    role="img"
    aria-label="Home"
  />
</template>
```

## Examples

### With Tailwind CSS

```vue
<template>
  <HomeIcon class="w-8 h-8 text-blue-500 hover:text-blue-600 transition-colors" />
</template>
```

### With inline styles

```vue
<template>
  <HomeIcon :style="{ width: '32px', height: '32px', color: '#3B82F6' }" />
</template>
```

### In a button

```vue
<template>
  <button class="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded">
    <SaveIcon class="w-5 h-5" />
    Save Changes
  </button>
</template>

<script setup>
import { SaveIcon } from '@astraicons/vue/linear';
</script>
```

### With Vue 3 Composition API

```vue
<template>
  <component :is="currentIcon" class="w-6 h-6" />
</template>

<script setup>
import { ref, computed } from 'vue';
import { HomeIcon, SettingsIcon } from '@astraicons/vue/linear';

const isHome = ref(true);
const currentIcon = computed(() => isHome.value ? HomeIcon : SettingsIcon);
</script>
```

## TypeScript Support

All icons are fully typed. TypeScript will provide autocomplete for all available icons.

```vue
<script setup lang="ts">
import { HomeIcon } from '@astraicons/vue/linear';
import type { FunctionalComponent } from 'vue';

const MyIcon: FunctionalComponent = HomeIcon;
</script>
```

## Tree Shaking

This package is optimized for tree shaking. Only the icons you import will be included in your bundle.

```js
// ✅ Good - only imports what you need
import { HomeIcon } from '@astraicons/vue/linear';

// ❌ Avoid - imports entire style directory
import * as Icons from '@astraicons/vue/linear';
```

## Package Info

- **Package Size**: ~14MB total (unpacked)
- **Files**: 3,524 files (JS + TypeScript definitions)
- **Tree-shakeable**: Yes - only imported icons are bundled
- **Peer Dependencies**: Vue >= 3

## Available Icons

View the complete list of icons:
- [Browse on UNPKG](https://unpkg.com/browse/@astraicons/vue/) - View package contents
- [Interactive Gallery](https://uiastra.com) - Search and preview icons
- [React Icon List](https://github.com/uiastra/astraicons/blob/main/react/ICON_LIST.md) - Complete list (same icons available in Vue)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

We welcome contributions to enhance the project. Our current focus:
- ✅ Bug fixes for existing icons
- ✅ TypeScript improvements
- ✅ Documentation updates
- ❌ New icon contributions (not accepted at this time)

## Related Packages

- [@astraicons/react](https://www.npmjs.com/package/@astraicons/react) - React components
- [astraicons](https://www.npmjs.com/package/astraicons) - SVG icon files

## Credits

- Icon design by [UI Astra](https://uiastra.com)
- Build system inspired by [Heroicons](https://github.com/tailwindlabs/heroicons)

## License

MIT © [UI Astra](https://uiastra.com)

## Links

- [GitHub Repository](https://github.com/uiastra/astraicons)
- [Icon Gallery](https://uiastra.com)
- [Report Issues](https://github.com/uiastra/astraicons/issues)
