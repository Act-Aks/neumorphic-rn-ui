## 🚀 What's Changed


### 🐛 Bug Fixes

- **ci,release:** upgrade actions and Node version, enhance release notes ([`b1cb886`](https://github.com/act-aks/neumorphic-rn-ui/commit/b1cb88643c85d39b5ae450f9ec61ad4c7c77fe9b))

<div align="center">

# 📋 Changelog

All notable changes to `neumorphic-rn-ui` are documented here.
Follows [Semantic Versioning](https://semver.org/) and [Conventional Commits](https://www.conventionalcommits.org/).

</div>

---

## 🎉 [1.0.0] — 2026-03-31

> The first public release of `neumorphic-rn-ui` — laying the foundation for a full neumorphic design system in React Native. Soft shadows, depth-first UI, and seamless light/dark theming out of the box.

---

### ✨ New Features

#### 🔘 `Button`

The flagship component. A fully pressable, neumorphic-styled button with raised shadow effects that respond to light and dark themes.

| Prop | Options | Default |
|---|---|---|
| `variant` | `default` · `primary` · `destructive` · `warning` | `default` |
| `size` | `default` · `icon` | `default` |
| `shape` | `default` · `circle` | `default` |

- Built with `tailwind-variants` for composable, type-safe styling
- Shadow depth adapts automatically to the active theme
- Commit: [`2586678`](https://github.com/act-aks/neumorphic-rn-ui/commit/2586678ad27bb9858f0bc6b99f2ab2c2bb03b78f)

#### 🌗 `ThemeSwitcher`

A horizontal scrollable picker to switch between light and dark modes at runtime.

- Powered by `@niibase/uniwind` for reactive theme state
- Active theme highlighted with primary color
- Minimal and composable — drop it anywhere in your layout
- Commit: [`2586678`](https://github.com/act-aks/neumorphic-rn-ui/commit/2586678ad27bb9858f0bc6b99f2ab2c2bb03b78f)

---

### 🐛 Bug Fixes

- Fixed package configuration and added release automation — [`f41abd9`](https://github.com/act-aks/neumorphic-rn-ui/commit/f41abd9b0ccb0ee84c62e6577f17edf0e4b41a4b)

---

### 🏗️ Infrastructure & Tooling

| Area | Detail |
|---|---|
| 📦 Build | `react-native-builder-bob` — dual CJS + ESM output with TypeScript declarations |
| 🔁 CI/CD | GitHub Actions pipelines for lint, type-check, build, and publish |
| 🚀 Release | `semantic-release` with auto changelog + GitHub release generation |
| 🧹 Linting | Biome `2.4.10` + Ultracite `7.4.0` enforced via Lefthook pre-commit hooks |
| 📬 Registry | Published to GitHub Packages under `@act-aks` scope |

---

### 🧰 Tech Baseline

| Package | Version |
|---|---|
| React Native | `0.83.4` |
| React | `19.2.4` |
| Expo SDK | `55` |
| expo-router | `55` |
| TypeScript | `6.0.2` |
| tailwindcss | `4.2.2` |
| tailwind-variants | `3.2.2` |
| @niibase/uniwind | `1.6.0` |
| react-native-reanimated | `4.2.1` |
| Bun | `1.3.11` |

---

### � Contributors

| | Name | Role |
|---|---|---|
| [![Act-Aks](https://github.com/act-aks.png?size=32)](https://github.com/act-aks) | [Act-Aks](https://github.com/act-aks) | 🧑‍💻 Author & Maintainer |

---

### 🔗 Links

- 📦 [Package](https://github.com/act-aks/neumorphic-rn-ui/packages)
- 🐛 [Report a Bug](https://github.com/act-aks/neumorphic-rn-ui/issues)
- 💡 [Request a Feature](https://github.com/act-aks/neumorphic-rn-ui/issues/new)
- 📖 [Docs & README](https://github.com/act-aks/neumorphic-rn-ui#readme)

---

## 🔮 What's Next

| Component | Description |
|---|---|
| `Card` | Neumorphic surface container with raised/inset modes |
| `Input` | Text input with inset shadow depth effect |
| `Badge` | Compact status and label indicators |
| `Avatar` | User avatar with soft shadow ring |
| `Checkbox` | Neumorphic checkbox with press animation |
| `Switch` | Toggle with raised thumb and depth track |
| `Slider` | Range slider with neumorphic thumb |
| `ProgressBar` | Inset progress indicator |

---

<div align="center">

_Built with 🖤 by [Act-Aks](https://github.com/act-aks)_

</div>
