# Astra Icons

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
  A comprehensive icon library designed for modern web applications, featuring 880 beautifully crafted icons across multiple styles.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@astraicons/react"><img src="https://img.shields.io/npm/v/@astraicons/react?label=@astraicons/react&color=blue" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@astraicons/vue"><img src="https://img.shields.io/npm/v/@astraicons/vue?label=@astraicons/vue&color=green" alt="npm version"></a>
  <a href="https://github.com/uiastra/astraicons/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
</p>

## ✨ Features

- **880 Total Icons** - Comprehensive collection for all your UI needs
- **4 Distinct Styles** - Linear, Bold, Duotone, and Brand icons
- **288 Unique Icons** - Each available in multiple styles
- **16 Brand Icons** - Popular company and service logos
- **Framework Support** - Official React and Vue packages
- **TypeScript Support** - Fully typed for better developer experience
- **Tree Shakeable** - Import only the icons you need
- **Customizable** - Easy to style with CSS or utility classes
- **Accessible** - Built with accessibility in mind

## 📦 Installation

### React

```bash
npm install @astraicons/react
# or
yarn add @astraicons/react
# or
pnpm add @astraicons/react
```

### Vue

```bash
npm install @astraicons/vue
# or
yarn add @astraicons/vue
# or
pnpm add @astraicons/vue
```

## 🚀 Quick Start

### React

```jsx
import { HomeIcon } from '@astraicons/react/linear';
import { HeartIcon } from '@astraicons/react/bold';
import { StarIcon } from '@astraicons/react/duotone';
import { AppleIcon } from '@astraicons/react/brand';

function MyComponent() {
  return (
    <div>
      <HomeIcon className="w-6 h-6 text-gray-500" />
      <HeartIcon className="w-6 h-6 text-red-500" />
      <StarIcon className="w-6 h-6 text-yellow-500" />
      <AppleIcon className="w-8 h-8" />
    </div>
  );
}
```

### Vue

```vue
<template>
  <div>
    <HomeIcon class="w-6 h-6 text-gray-500" />
    <HeartIcon class="w-6 h-6 text-red-500" />
    <StarIcon class="w-6 h-6 text-yellow-500" />
    <AppleIcon class="w-8 h-8" />
  </div>
</template>

<script setup>
import { HomeIcon } from '@astraicons/vue/linear';
import { HeartIcon } from '@astraicons/vue/bold';
import { StarIcon } from '@astraicons/vue/duotone';
import { AppleIcon } from '@astraicons/vue/brand';
</script>
```

### Direct SVG Usage

Copy the SVG source from [uiastra.com](https://uiastra.com) and embed it directly into your HTML:

```html
<svg
  class="w-6 h-6 text-gray-500"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  stroke-width="1.5"
>
  <rect x="2" y="2" width="20" height="20" rx="10" />
  <path
    d="M9 3C7.66667 8.84 7.66667 15.16 9 21"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M15 3C16.3333 8.84 16.3333 15.16 15 21"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path d="M2 12L22 12" />
  <path d="M3 7L21 7" />
  <path d="M3 17L21 17" />
</svg>
```

## 🎨 Icon Styles

### Linear

Outline style icons with consistent 1.5px stroke width. Perfect for modern, minimalist interfaces.

```jsx
import { ActivityIcon, BellIcon, CameraIcon } from '@astraicons/react/linear';
```

### Bold

Filled or bold stroke icons for emphasis and better visibility at smaller sizes.

```jsx
import { ActivityIcon, BellIcon, CameraIcon } from '@astraicons/react/bold';
```

### Duotone

Two-tone icons that combine filled and outline styles for depth and visual interest.

```jsx
import { ActivityIcon, BellIcon, CameraIcon } from '@astraicons/react/duotone';
```

### Brand

Company and service logos including social media platforms and popular brands.

```jsx
import { AppleIcon, GoogleIcon, TwitterIcon } from '@astraicons/react/brand';
```

## 📋 Icon Naming Convention

Icons follow a consistent naming pattern:

- Upper camel case (PascalCase)
- Always end with `Icon` suffix
- Descriptive names for easy discovery

Examples:

- `HomeIcon`
- `ShoppingCartIcon`
- `ArrowRightIcon`
- `UserProfileIcon`

## 🔧 Customization

### Using Tailwind CSS

```jsx
<HomeIcon className="w-8 h-8 text-blue-500 hover:text-blue-600 transition-colors" />
```

### Using Inline Styles

```jsx
<HomeIcon style={{ width: 32, height: 32, color: '#3B82F6' }} />
```

### Using CSS

```css
.custom-icon {
  width: 2rem;
  height: 2rem;
  color: #3B82F6;
}
```

```jsx
<HomeIcon className="custom-icon" />
```

## 📚 Documentation

- [Full Icon List](./ICON_LIST.md) - Complete alphabetical list of all 877 icons
- [Icons by Category](./ICON_CATEGORIES.md) - Icons organized by functional groups
- [Browse React Icons](https://unpkg.com/browse/@astraicons/react/) - View all React icons on UNPKG
- [Browse Vue Icons](https://unpkg.com/browse/@astraicons/vue/) - View all Vue icons on UNPKG
- [Interactive Gallery](https://uiastra.com) - Search and preview all icons

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📦 Package Details

### React Package
- **Package**: `@astraicons/react`
- **Version**: 1.0.1
- **Size**: ~14MB unpacked
- **Files**: 3,524 (JS + TypeScript definitions)
- **Tree-shakeable**: ✅
- **TypeScript**: ✅
- **Peer Dependencies**: React >= 16

### Vue Package
- **Package**: `@astraicons/vue`
- **Version**: 1.0.1
- **Size**: ~14MB unpacked
- **Files**: 3,524 (JS + TypeScript definitions)
- **Tree-shakeable**: ✅
- **TypeScript**: ✅
- **Peer Dependencies**: Vue >= 3

## 🤝 Contributing

We welcome contributions to improve the library! However, please note:

- ✅ **Bug fixes** - Report or fix issues with existing icons
- ✅ **TypeScript improvements** - Enhance type definitions
- ✅ **Documentation** - Improve guides and examples
- ✅ **Performance** - Optimize build process or package size
- ❌ **New icons** - We're not accepting new icon contributions at this time

### Development Setup

```bash
# Clone the repository
git clone https://github.com/uiastra/astraicons.git
cd astraicons

# Install dependencies
npm install

# Build all packages
npm run build

# Build specific style
npm run build-linear
npm run build-bold
npm run build-duotone
npm run build-brand
```

## 🙏 Credits

- Icon design and curation by [UI Astra](https://uiastra.com)
- Build system inspired by [Heroicons](https://github.com/tailwindlabs/heroicons)
- Created with ❤️ for the developer community

## 📄 License

This library is MIT licensed. See [LICENSE](./LICENSE) for details.

---

<p align="center">
  Made with ❤️ by <a href="https://uiastra.com">UI Astra</a>
</p>