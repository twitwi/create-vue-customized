# create-vue-customized

This template should help get you started developing with Vue 3 in Vite.

Use typically with (pnpx or npx, tiged or degit)

```
pnpx tiged twitwi/create-vue-customized          folder-to-create
# OR
pnpx tiged twitwi/create-vue-customized#yjs      folder-to-create
# OR
pnpx tiged twitwi/create-vue-customized#pwa      folder-to-create
# OR
pnpx tiged twitwi/create-vue-customized#yjs+pwa  folder-to-create
```

Then consider modifying:

- `git init .`
- modifying `README.md` (remove most of it)
- modifying the name in `package.json` (and maybe the version)
- modifying informations in `.env`
  - VITE_APP_TITLE for HTML title (tab name)
  - VITE_LS_LOCAL_KEY for the local storage key used to store the local config
  - (#yjs) VITE_LS_SERVER (and/or hardcode in `src/main-yjs.ts` some behavior/configuration)
  - (#pwa) VITE_PWA_NAME, VITE_PWA_SHORT_NAME, VITE_PWA_DESCRIPTION for PWA configuration
- modifying the logo or its colors in `src/assets/logo.svg` (main) `public/logo.svg` (pwa)

---

---

---

---

---

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

---

Internal, how to update this repo:

```
pnpm create vue@latest
# all but testing
# ◇  Project name (target directory):
# │  ,,base
# │
# ◇  Select features to include in your project: (↑/↓ to navigate, space to select, a to toggle all, enter to confirm)
# │  TypeScript, JSX Support, Router (SPA development), Pinia (state management), ESLint (error prevention), Prettier (code formatting)
# │
# ◇  Install Oxlint for faster linting? (experimental)
# │  No

meld ,,base .
```
