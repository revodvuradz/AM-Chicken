import "@/styles/globals.css";

import type { Metadata } from "next";

import { PreloadResources } from "@/app/preload-resources";
import Navbar from "@/components/sections/Navbar";
import { mc } from "@/lib/functions";

import { Inter } from "next/font/google";

const font_inter = Inter({
    preload: true,
    adjustFontFallback: true,
    display: "swap",
    subsets: ["latin", "latin-ext"],
    style: ["normal"],
    weight: ["400", "500", "600"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: {
        template: "%s | AM Chicken",
        default: "AM Chicken",
    },
    metadataBase: new URL("https://amchicken.com"),
    description: "Lezat Dagingnya, Sehat Tubuhnya",
    openGraph: {
        type: "website",
        title: "AM Chicken | Lezat Dagingnya, Sehat Tubuhnya",
        description:
            "AM Chicken adalah usaha peternakan ayam yang dikelola oleh Pondok Pesantren Nurul Iman di Probolinggo. Kami berfokus pada produksi ayam organik yang sehat, lezat, dan berkualitas tinggi.",
        images: [
            {
                url: "/images/AMChickenLogo 1.png",
                alt: "AM Chicken website preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "AM Chicken | AM Chicken | Lezat Dagingnya, Sehat Tubuhnya",
        description: "AM Chicken adalah usaha peternakan ayam yang dikelola oleh Pondok Pesantren Nurul Iman di Probolinggo. Kami berfokus pada produksi ayam organik yang sehat, lezat, dan berkualitas tinggi.",
        images: ["images/AMChickenLogo 1.png"],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={mc(font_inter.variable)}>
            <PreloadResources />
            <body className="bg-white">
                <main className="flex flex-col items-center justify-center gap-8 overflow-hidden md:gap-14">
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
}
