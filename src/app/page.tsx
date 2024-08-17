/* eslint-disable tailwindcss/no-arbitrary-value */
import type { Metadata } from "next";

import { produk } from "@/components/sections/ProductSection";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@/components/sections/Carousel"));
const Advantages = dynamic(() => import("@/components/sections/Advantages"));
const CTA = dynamic(() => import("@/components/sections/CTA"));
const Footer = dynamic(() => import("@/components/sections/Footer"));
const Gallery = dynamic(() => import("@/components/sections/Gallery"));
const PortfolioSection = dynamic(() => import("@/components/sections/PortfolioSection"));
const ProductSection = dynamic(() => import("@/components/sections/ProductSection"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));

export const metadata: Metadata = {
    title: {
        absolute: "Home | AM Chicken",
    },
};

export default function Page() {
    return (
        <>
            <Carousel />

            <Advantages />

            <ProductSection title="Produk" products={produk} />

            <Testimonials />

            <Gallery />

            <PortfolioSection />
            <CTA />
            <Footer />
        </>
    );
}
