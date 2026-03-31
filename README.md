<div align="center">

<img src="assets/icon.png" alt="neumorphic-rn-ui logo" width="100" height="100" style="border-radius: 24px;" />

# neumorphic-rn-ui

**A React Native UI library built around the neumorphic design language.**
Soft shadows, depth, and tactile feel — ready to drop into your app.

[![Version](https://img.shields.io/badge/version-1.0.0-6C63FF?style=flat-square)](https://github.com/act-aks/neumorphic-rn-ui/releases)
[![License](https://img.shields.io/badge/license-MIT-22C55E?style=flat-square)](./LICENSE)
[![React Native](https://img.shields.io/badge/React%20Native-0.83-61DAFB?style=flat-square&logo=react)](https://reactnative.dev)
[![Expo](https://img.shields.io/badge/Expo-55-000020?style=flat-square&logo=expo)](https://expo.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)

</div>

---

## What is this?

`neumorphic-rn-ui` is a component library for React Native that brings the **neumorphic design style** to mobile — think soft extruded surfaces, subtle inner/outer shadows, and a clean tactile aesthetic. Built on top of Expo, Tailwind Variants, and `@niibase/uniwind` for seamless light/dark theming.

> Components are minimal by design. Each one is fully typed, theme-aware, and ready to compose.

---

## Components

| Component | Status | Description |
|---|---|---|
| `Button` | ✅ Available | Pressable with neumorphic shadow, variants, shapes & sizes |
| `ThemeSwitcher` | ✅ Available | Light / dark theme toggle |
| `Card` | 🔜 Coming soon | Neumorphic surface container |
| `Input` | 🔜 Coming soon | Inset-shadow text input |
| `Badge` | 🔜 Coming soon | Status and label badges |
| `Avatar` | 🔜 Coming soon | User avatar with soft shadow |
| `Checkbox` | 🔜 Coming soon | Neumorphic checkbox control |
| `Switch` | 🔜 Coming soon | Toggle switch with depth effect |
| `Slider` | 🔜 Coming soon | Range slider with raised thumb |
| `ProgressBar` | 🔜 Coming soon | Inset progress indicator |

---

## Tech Stack

| Layer | Package | Version |
|---|---|---|
| Framework | React Native | 0.83.4 |
| Expo SDK | expo | 55 |
| Routing | expo-router | 55 |
| Theming | @niibase/uniwind | 1.6.0 |
| Styling | tailwind-variants | 3.2.2 |
| CSS Engine | tailwindcss | 4.2.2 |
| Animation | react-native-reanimated | 4.2.1 |
| Language | TypeScript | 6.0.2 |
| Runtime | React | 19.2.4 |
| Package Manager | Bun | 1.3.11 |
| Linting | Biome + Ultracite | 2.4.10 / 7.4.0 |

---

## Installation

Authenticate with GitHub Packages (one-time):

```sh
npm login --scope=@act-aks --registry=https://npm.pkg.github.com
```

Install the library:

```sh
npm install @act-aks/neumorphic-rn-ui
# or
bun add @act-aks/neumorphic-rn-ui
```

Install peer dependencies:

```sh
npm install react react-native tailwind-variants tailwindcss @niibase/uniwind
```

---

## Usage

```tsx
import { Button, ThemeSwitcher } from "@act-aks/neumorphic-rn-ui";
import { Text } from "react-native";

// Neumorphic button
<Button variant="primary" size="default">
  <Text>Get Started</Text>
</Button>

// Theme toggle
<ThemeSwitcher />
```

### Button API

| Prop | Options | Default |
|---|---|---|
| `variant` | `default` \| `primary` \| `destructive` \| `warning` | `default` |
| `size` | `default` \| `icon` | `default` |
| `shape` | `default` \| `circle` | `default` |

---

## Development

```sh
bun install
bun run start       # start Expo dev server
bun run build       # build the library
bun run check       # lint check
bun run fix         # auto-fix lint issues
```

---

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for release history.

---

## Contributing

Contributions are welcome. To get started:

1. Fork the repo and create a branch from `main`
2. Make your changes with clear, focused commits
3. Ensure `bun run check` passes before opening a PR
4. Open a pull request with a description of what you changed and why

Please follow the existing code style (Biome + Ultracite enforced via pre-commit hooks).

---

## Code of Conduct

This project follows a standard contributor code of conduct. Be respectful, constructive, and inclusive. Issues or PRs that violate this will be closed.

---

## Author

Built and maintained by [@act-aks](https://github.com/act-aks).

---

## License

MIT — see [LICENSE](./LICENSE) for details.
