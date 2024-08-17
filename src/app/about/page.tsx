/* eslint-disable tailwindcss/no-arbitrary-value */
import type { Metadata } from "next";

import Advantages from "@/components/sections/Advantages";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import HeaderSection from "@/components/sections/HeaderSection";
import imageHero from "@public/images/AMChickenLogo 1.png";

import Image from "next/image";

export const metadata: Metadata = {
    title: "About",
};

export default function Page() {
    const visiMisiData = [
        {
            title: "Visi",
            content: "Menjadi pemimpin dalam produksi ayam organik yang berkualitas tinggi, mendukung gaya hidup sehat masyarakat Indonesia, serta berkontribusi pada pemberdayaan ekonomi lokal.",
        },
        {
            title: "Misi",
            content: [
                "Menyediakan daging ayam dan telur yang aman, sehat, dan berkualitas melalui metode peternakan organik.",
                "Menerapkan standar keberlanjutan dalam setiap tahap produksi, dari pemeliharaan hingga distribusi.",
                "Memberdayakan santri dan masyarakat sekitar melalui pendidikan dan pelatihan praktis di bidang peternakan.",
                "Menjalin kerjasama yang saling menguntungkan dengan mitra dan konsumen kami..",
            ],
        },
    ];
    return (
        <>
            <HeaderSection title="Tentang AM Chicken" />
            <section className="flex w-full max-w-screen-2xl flex-col items-center justify-center gap-5 px-4 md:px-12 lg:flex-row lg:items-start">
                <Image src={imageHero.src} alt="Hero Image" width={662} height={623} className="lg:w-1/2 animate-fade-down" priority />
                <div className="flex flex-col items-center gap-6 lg:w-1/2">
                    <h1 className="font-outfit text-[3rem] font-medium leading-normal text-neutral-950 md:text-[4rem]">
                        <span className="text-orange-300">Nikmat</span> Rasanya, <span className="text-info-500">Sehat</span> Tubuhnya
                    </h1>
                    <p className="font-inter text-xl font-normal text-neutral-700">
                        AM Chicken adalah usaha peternakan ayam yang dikelola oleh Pondok Pesantren Nurul Iman di Probolinggo. Kami berfokus pada produksi ayam organik yang sehat, lezat, dan
                        berkualitas tinggi. Setiap produk yang kami hasilkan adalah buah dari komitmen kami terhadap kesejahteraan hewan, keberlanjutan lingkungan, dan pemberdayaan masyarakat sekitar.
                        Melalui AM Chicken, kami tidak hanya menyediakan produk berkualitas, tetapi juga berkontribusi pada pendidikan dan pengembangan ekonomi lokal
                    </p>
                </div>
            </section>

            <div className="relative mb-32 mt-12">
                <div className="absolute -right-40 -top-44 -z-10 size-[304px] rounded-full bg-info-50 md:size-[500px]" />
                <div className="absolute -bottom-28 -left-28 -z-10 size-[154px] rounded-full bg-orange-50 md:size-[354px]" />

                <div className="mx-4 flex max-w-[980px] flex-col items-start gap-4 rounded-[34px] border border-neutral-200 bg-white p-4 md:mx-12 md:p-[34px]">
                    <h1 className="max-w-[662px] font-outfit text-5xl font-medium leading-normal text-neutral-950 lg:text-[64px]">
                        <span className="text-orange-300">Visi</span> & <span className="text-info-500">Misi</span> AM Chicken
                    </h1>

                    {visiMisiData.map(({ title, content }, i) => (
                        <div key={i} className="flex flex-col items-start justify-center gap-[14px] self-stretch rounded-[18px] bg-neutral-100 p-3 md:p-6">
                            <h2 className="text-xl font-bold text-neutral-950 md:ts-title-3">{title}</h2>
                            {Array.isArray(content) ? (
                                <ul className="list-decimal pl-6">
                                    {content.map((item, i) => (
                                        <li key={i} className="text-lg font-normal text-neutral-700 md:text-xl">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-xl font-normal text-neutral-700">{content}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Advantages />
            <CTA />
            <Footer />
        </>
    );
}
