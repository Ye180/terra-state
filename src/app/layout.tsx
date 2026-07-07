import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import "../globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    ...siteConfig.meta,
    other: {
        "application/ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}/assets/terra.png`,
            description:
                "Terra est une plateforme de gestion et de visualisation des meilleurs établissements architecturaux.",
        }),
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={cn("h-full antialiased font-sans", "font-sans", geist.variable)} lang="fr">
            <head>
                <link
                    rel="preload"
                    href="/assets/images/home-1.jpg"
                    as="image"
                    fetchPriority="high"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
