import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
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
            logo: `${siteConfig.url}/logo.png`,
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
        <html className={cn("h-full antialiased font-sans", "font-sans", geist.variable)} lang="en">
            <body>{children}</body>
        </html>
    );
}
