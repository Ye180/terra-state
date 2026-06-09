# Documentation Technique — Terra State

## Stack

| Technologie    | Version   |
| -------------- | --------- |
| Next.js        | 16.2.6    |
| React          | 19.2.4    |
| TypeScript     | ~5        |
| Tailwind CSS   | ~4        |
| Biome          | 2.4.16    |
| pnpm           | —         |

## Structure du projet

```
terra-state/
├── app/                    # App Router (Next.js)
│   ├── globals.css         # Styles globaux Tailwind
│   ├── layout.tsx          # Layout racine (fonts Geist)
│   └── page.tsx            # Page d'accueil
├── features/               # Modules fonctionnels (Feature-Sliced)
│   └── auth/
│       ├── api/            # Appels API liés à l'auth
│       ├── components/     # Composants UI auth
│       ├── hooks/          # Hooks React auth
│       └── types/          # Types TypeScript auth
├── lib/                    # Utilitaires partagés
│   ├── axios/axios.ts      # Instance Axios (à configurer)
│   ├── react-query/        # Client TanStack Query (à configurer)
│   └── utils/utils.ts      # Fonctions utilitaires
├── types/                  # Types globaux
├── public/                 # Assets statiques
└── docs/                   # Documentation
```

## Architecture

### Feature-Sliced Design (FSD)

Le projet suit une architecture modulaire découpée par fonctionnalités (`features/`). Chaque feature contient ses propres `api/`, `components/`, `hooks/` et `types/`.

### App Router

Next.js 16 utilise l'App Router. Les routes sont définies par l'arborescence `app/` avec des fichiers `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, etc.

### Alias `@/`

Le `tsconfig.json` configure l'alias `@/*` pointant vers la racine du projet :

```ts
import { utils } from "@/lib/utils/utils";
```

## Styles

- **Tailwind CSS v4** via `@tailwindcss/postcss`
- Fichier global : `app/globals.css`
- Polices Geist chargées via `next/font/google`

## Conventions de code

- **Formatter** : Biome (indentation 4 espaces, double quotes, trailing commas)
- **Linter** : Biome (règles recommandées + React et Next.js domains)
- **Organisation des imports** : automatique via Biome `assist.organizeImports`
- `console.log` interdit (seulement `console.warn`, `console.error`, `console.info`)

## Scripts disponibles

```bash
pnpm dev          # Serveur de développement
pnpm build        # Build de production
pnpm start        # Lancement du build
pnpm lint         # Biome lint
pnpm format       # Biome format --write
pnpm check        # Biome check --write
```

## Dépendances prévues

Les fichiers stubs dans `lib/` indiquent les librairies à intégrer :

- **axios** — Client HTTP
- **@tanstack/react-query** — Gestion d'état serveur et cache

Le fichier `pnpm-workspace.yaml` est configuré pour un éventuel monorepo.
