import type { Metadata } from "next";
import "../globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
    title: "Terra .",
    description:
        "Terra est une plateforme de pointe pour la gestion et la visualisation des meilleurs établissements.",
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
