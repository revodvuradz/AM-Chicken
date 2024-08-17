/* eslint-disable tailwindcss/no-arbitrary-value */
import type { Metadata } from "next";

import Categories from "@/app/portfolio/PortfolioCategories";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import HeaderSection from "@/components/sections/HeaderSection";

import React from "react";

export const metadata: Metadata = {
    title: "Portfolio",
};

export default function Page() {
    return (
        <>
            <HeaderSection title="Hasil Produk Kami" />
            <div className="relative flex w-full max-w-screen-2xl flex-col gap-9">
                <p className="px-4 text-xl font-normal text-neutral-700 md:px-12">
                    Selamat datang di portofolio KAMILA! Di bawah ini, Anda akan melihat beberapa contoh proyek cetakan yang telah kami kerjakan untuk pelanggan kami. Portofolio ini mencerminkan
                    beragam jenis proyek yang kami tangani dan kualitas cetakan yang kami tawarkan.
                </p>
                <Categories />
            </div>
            <CTA />
            <Footer />
        </>
    );
}
