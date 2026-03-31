# neumorphic-rn-ui

A neumorphic UI component library for React Native, built with Expo and Tailwind Variants.

## Features

- Neumorphic design system with raised/inset shadow effects
- Theme switching (light/dark) via `@niibase/uniwind`
- Tailwind-based styling with `tailwind-variants`
- Fully typed with TypeScript

## Installation

First, authenticate with GitHub Packages (one-time setup):

```sh
npm login --scope=@act-aks --registry=https://npm.pkg.github.com
```

Then install:

```sh
npm install @act-aks/neumorphic-rn-ui
# or
bun add @act-aks/neumorphic-rn-ui
```

### Peer Dependencies

```sh
npm install react react-native tailwind-variants tailwindcss @niibase/uniwind
```

## Usage

```tsx
import { Button } from "@act-aks/neumorphic-rn-ui";

<Button variant="primary" size="default">
  <Text>Get Started</Text>
</Button>
```

### Button Variants

| Prop      | Options                                          | Default     |
|-----------|--------------------------------------------------|-------------|
| `variant` | `default` \| `primary` \| `destructive` \| `warning` | `default` |
| `size`    | `default` \| `icon`                              | `default`   |
| `shape`   | `default` \| `circle`                            | `default`   |

## Components

- `Button` — Pressable button with neumorphic shadow and variant support
- `ThemeSwitcher` — Light/dark theme toggle

## Development

```sh
bun install
bun run start
```

Linting and formatting use [Biome](https://biomejs.dev/) via [Ultracite](https://github.com/haydenbleasel/ultracite):

```sh
bun run check   # lint check
bun run fix     # auto-fix
```

## License

MIT
