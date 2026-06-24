/**
 * Ce fichier de configuration permet de définir les informations générales du site
 * Il contient le titre du site, la description, et les méta-données globales (SEO,
 * Open Graph, Twitter Cards, robots, icônes…) consommées par app/layout.tsx via
 * l'export `metadata`.
 *
 * ⚠️ Pensez à définir NEXT_PUBLIC_SITE_URL en production (sinon le fallback ci-dessous
 * est utilisé). Cette URL alimente metadataBase → canonical, Open Graph et sitemap.
 */

import type { Metadata } from 'next';

// URL absolue du site. Indispensable pour les canonical / Open Graph / sitemap.
export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://terra-state.vercel.app';

export const siteConfig = {
    url: SITE_URL,
    name: 'Terra',

    meta: {
        // Base utilisée pour résoudre les URLs relatives (canonical, OG images…)
        metadataBase: new URL(SITE_URL),

        title: {
            // Titre par défaut (home + pages sans titre propre)
            default:
                "Terra - Gestion et visualisation des meilleurs établissements architecturaux",
            // Les pages enfants n'ont qu'à exporter `title: 'X'` → "X · Terra ."
            template: '%s · Terra'
        },

        description:
            "Terra est une plateforme de gestion et de visualisation des meilleurs établissements architecturaux. Retrouvez nos numéros en version digitale et physique.",

        keywords: [
            'maison ivoirienne',
            "architecture Côte d'Ivoire",
            'maison moderne',
            'Terra .',
            "magazine Côte d'Ivoire"
        ],

        authors: [{ name: 'Terra .' }],
        creator: 'Terra .',
        publisher: 'Terra .',
        applicationName: 'Terra .',

        alternates: {
            canonical: '/'
        },

        openGraph: {
            type: 'website',
            locale: 'fr_CI',
            url: SITE_URL,
            siteName: 'Terra',
            title: 'Terra — Gestion et visualisation des meilleurs établissements architecturaux',
            description:
                "Terra est une plateforme de gestion et de visualisation des meilleurs établissements architecturaux. Numéros en version digitale et physique."
        },

        twitter: {
            card: 'summary_large_image',
            title: 'Terra',
            description:
                "Terra est une plateforme de gestion et de visualisation des meilleurs établissements architecturaux."
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
                'max-video-preview': -1
            }
        },

        icons: {
            icon: '/favicon.ico',
            shortcut: '/favicon.ico',
            apple: '/assets/terra.png'
        }
    } satisfies Metadata,

    logo: {
        default: '/assets/terra.png',
        colored: '/assets/terra.png'
    },
    icon: null
};
