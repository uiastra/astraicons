# @astraicons/react

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
  Beautiful React icons from the Astra Icons collection. 900+ icons across 5 styles.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@astraicons/react"><img src="https://img.shields.io/npm/v/@astraicons/react?color=blue" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@astraicons/react"><img src="https://img.shields.io/npm/dm/@astraicons/react?color=blue" alt="npm downloads"></a>
  <a href="https://github.com/uiastra/astraicons/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
</p>

## Installation

```bash
npm install @astraicons/react
# or
yarn add @astraicons/react
# or
pnpm add @astraicons/react
```

## Usage

Import icons from their respective style directories:

```jsx
import { HomeIcon } from '@astraicons/react/linear';
import { HeartIcon } from '@astraicons/react/bold';
import { StarIcon } from '@astraicons/react/duotone';
import { AppleIcon } from '@astraicons/react/brand';
import { CubeIcon } from '@astraicons/react/3d';

function MyComponent() {
  return (
    <div>
      <HomeIcon className="w-6 h-6" />
      <HeartIcon className="w-6 h-6 text-red-500" />
      <StarIcon className="w-6 h-6 text-yellow-500" />
      <AppleIcon className="w-8 h-8" />
      <CubeIcon className="w-8 h-8 text-purple-500" />
    </div>
  );
}
```

## Icon Styles

### Linear (288 icons)
Outline icons with 1.5px stroke width. Perfect for modern, minimalist interfaces.

```jsx
import { ActivityIcon, BellIcon, CameraIcon } from '@astraicons/react/linear';
```

### Bold (288 icons)
Filled or bold stroke icons for emphasis and better visibility at smaller sizes.

```jsx
import { ActivityIcon, BellIcon, CameraIcon } from '@astraicons/react/bold';
```

### Duotone (288 icons)
Two-tone icons that combine filled and outline styles for depth and visual interest.

```jsx
import { ActivityIcon, BellIcon, CameraIcon } from '@astraicons/react/duotone';
```

### Brand (18 icons)
Company and service logos including social media platforms and popular brands.

```jsx
import { AppleIcon, GoogleIcon, TwitterIcon } from '@astraicons/react/brand';
```

### 3D (32 icons)
Modern three-dimensional style icons with depth and perspective for contemporary interfaces.

```jsx
import { CubeIcon, FolderIcon, BoxIcon } from '@astraicons/react/3d';
```

## Props

All icons accept standard SVG element props:

```tsx
interface IconProps extends React.SVGProps<SVGSVGElement> {
  title?: string;      // Accessibility title
  titleId?: string;    // ID for the title element
  className?: string;  // CSS classes
  style?: React.CSSProperties; // Inline styles
}
```

## Examples

### With Tailwind CSS

```jsx
<HomeIcon className="w-8 h-8 text-blue-500 hover:text-blue-600 transition-colors" />
```

### With inline styles

```jsx
<HomeIcon style={{ width: 32, height: 32, color: '#3B82F6' }} />
```

### With accessibility title

```jsx
<HomeIcon title="Navigate to home" />
```

### As a button icon

```jsx
<button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded">
  <SaveIcon className="w-5 h-5" />
  Save Changes
</button>
```

## TypeScript Support

All icons are fully typed. TypeScript will provide autocomplete for all available icons and their props.

```tsx
import { HomeIcon } from '@astraicons/react/linear';
import type { FC } from 'react';

const MyComponent: FC = () => {
  return <HomeIcon className="w-6 h-6" />;
};
```

## Tree Shaking

This package is optimized for tree shaking. Only the icons you import will be included in your bundle.

```jsx
// ✅ Good - only imports what you need
import { HomeIcon } from '@astraicons/react/linear';

// ❌ Avoid - imports entire style directory
import * as Icons from '@astraicons/react/linear';
```

## Package Info

- **Package Size**: ~14MB total (unpacked)
- **Files**: 3,524 files (JS + TypeScript definitions)
- **Tree-shakeable**: Yes - only imported icons are bundled
- **Peer Dependencies**: React >= 16

## Available Icons

View the complete list of icons:
- [Full Icon List](./ICON_LIST.md) - All 877 icons alphabetically
- [Browse on UNPKG](https://unpkg.com/browse/@astraicons/react/) - View package contents
- [Interactive Gallery](https://uiastra.com) - Search and preview icons

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

- [@astraicons/vue](https://www.npmjs.com/package/@astraicons/vue) - Vue components
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
