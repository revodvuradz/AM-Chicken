/* eslint-disable tailwindcss/no-arbitrary-value */
import type { Metadata } from "next";

import Advantages from "@/components/sections/Advantages";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import HeaderSection from "@/components/sections/HeaderSection";
import imageHero from "@public/images/about/imageHero.png";

import Image from "next/image";

export const metadata: Metadata = {
    title: "About",
};

export default function Page() {
    const visiMisiData = [
        {
            title: "Visi",
            content: "Menjadi mitra percetakan terkemuka yang diakui secara nasional dan internasional, dikenal dengan kualitas cetakan terbaik, inovasi teknologi, dan layanan pelanggan yang unggul.",
        },
        {
            title: "Misi",
            content: [
                "Memberikan Kualitas Unggul: Kami bertekad untuk memberikan produk cetakan dengan kualitas terbaik. Kami terus meningkatkan proses produksi dan mengikuti praktik terbaik dalam industri untuk memastikan kepuasan pelanggan dan hasil cetakan yang berkualitas.",
                "Inovasi Teknologi: Kami berkomitmen untuk terus berinvestasi dalam teknologi percetakan terbaru. Kami akan mengadopsi mesin dan peralatan canggih serta sistem manajemen yang memungkinkan kami untuk tetap berada di garis depan dalam industri percetakan.",
                "Layanan Pelanggan Unggul: Kami percaya bahwa keberhasilan kami tergantung pada kepuasan pelanggan. Kami akan selalu mendengarkan kebutuhan pelanggan kami dan memberikan layanan yang responsif, profesional, dan personal sesuai kebutuhan mereka.",
                "Berkelanjutan dan Ramah Lingkungan: Kami akan berusaha untuk meminimalkan dampak lingkungan dengan memperkenalkan praktik-praktik ramah lingkungan dalam operasi kami. Kami akan mendukung penggunaan bahan cetakan yang berkelanjutan dan mengurangi limbah produksi.",
                "Pengembangan Karyawan: Kami berkomitmen untuk memberdayakan tim kami dengan pelatihan, pengembangan, dan kesempatan untuk berkembang dalam perusahaan. Kami percaya bahwa karyawan yang berdedikasi adalah aset berharga.",
                "Kemitraan Strategis: Kami akan menjalin kemitraan strategis dengan pemasok, pelanggan, dan rekan bisnis lainnya. Kami berusaha untuk menciptakan jaringan yang saling menguntungkan untuk pertumbuhan dan kesuksesan bersama.",
            ],
        },
    ];
    return (
        <>
            <HeaderSection title="Tentang Kamila Printing" />
            <section className="flex w-full max-w-screen-2xl flex-col items-center justify-center gap-5 px-4 md:px-12 lg:flex-row lg:items-start">
                <Image src={imageHero.src} alt="Hero Image" width={662} height={623} className="lg:w-1/2" priority />
                <div className="flex flex-col items-center gap-6 lg:w-1/2">
                    <h1 className="font-outfit text-[3rem] font-medium leading-normal text-neutral-950 md:text-[4rem]">
                        Premium giftbox, <span className="text-info-500">Printing</span> and Packaging
                    </h1>
                    <p className="font-inter text-xl font-normal text-neutral-700">
                        KAMILA adalah sebuah perusahaan yang bergerak di bidang industri percetakan. Sebagai perusahaan percetakan, KAMILA fokus pada berbagai layanan yang terkait dengan mencetak
                        berbagai jenis materi, termasuk tetapi tidak terbatas pada buku, majalah, brosur, pamflet, kartu nama, poster, dan produk cetakan lainnya. Perusahaan ini memiliki berbagai
                        fasilitas dan peralatan yang modern untuk memenuhi kebutuhan cetakan pelanggan dengan kualitas tinggi dan efisiensi.
                    </p>
                </div>
            </section>
            <div className="relative mb-32 mt-12">
                <div className="absolute -right-40 -top-44 -z-10 h-[304px] w-[304px] rounded-full bg-info-50 md:h-[500px] md:w-[500px]" />
                <div className="absolute -bottom-28 -left-28 -z-10 h-[154px] w-[154px] rounded-full bg-orange-50 md:h-[354px] md:w-[354px]" />

                <div className="mx-4 flex max-w-[980px] flex-col items-start gap-4 rounded-[34px] border-[1px] border-neutral-200 bg-white p-4 md:mx-12 md:p-[34px]">
                    <h1 className="max-w-[662px] font-outfit text-5xl font-medium leading-normal text-neutral-950 lg:text-[64px]">
                        <span className="text-orange-400">Visi</span> dan <span className="text-info-500">Misi</span> Kamila Printing
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
