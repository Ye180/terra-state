import type { Metadata } from "next";
import "../globals.css";

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
        <html className="h-full antialiased font-sans" lang="en">
            <body>{children}</body>
        </html>
    );
}
