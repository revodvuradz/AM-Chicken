import type { Metadata } from "next";

import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import HeaderSection from "@/components/sections/HeaderSection";
import ProductSection, { produk } from "@/components/sections/ProductSection";

export const metadata: Metadata = {
    title: "Products",
};

export default function Page() {
    return (
        <>
            <HeaderSection title="Hasil Produk Kami" />
            <div className="w-full max-w-screen-2xl">
                <p className="px-4 text-xl font-normal text-neutral-700 md:px-12">
                    Di AM Chicken, kami berkomitmen untuk menyediakan unggas organik berkualitas tinggi yang dipelihara dengan penuh perhatian dan dedikasi. Setiap ayam yang kami hasilkan mendapatkan
                    perawatan khusus dengan pakan organik yang bebas dari bahan kimia sintetis, serta lingkungan yang alami dan sehat. Dengan menjaga keseimbangan alam, kami memastikan unggas kami
                    tidak hanya tumbuh dengan baik, tetapi juga menghasilkan daging yang lebih sehat dan lezat. Kami percaya bahwa kualitas produk kami tercermin dari cara kami memelihara unggas. Dari
                    bibit unggul hingga proses pemeliharaan yang teliti, kami memastikan setiap langkah dijalankan dengan standar tertinggi. Produk unggas organik kami adalah pilihan tepat bagi Anda
                    yang mencari kualitas, kesehatan, dan rasa yang lebih baik.
                </p>
            </div>

            <ProductSection title="Produk" products={produk} />
            <CTA />
            <Footer />
        </>
    );
}
