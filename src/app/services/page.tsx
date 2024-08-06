import type { Metadata } from "next";

import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import HeaderSection from "@/components/sections/HeaderSection";
import ServiceSection, { kemasan, otherProducts } from "@/components/sections/ServiceSection";

export const metadata: Metadata = {
    title: "Services",
};

export default function Page() {
    return (
        <>
            <HeaderSection title="Layanan Kami" />
            <div className="w-full max-w-screen-2xl">
                <p className="px-4 text-xl font-normal text-neutral-700 md:px-12">
                    Di KAMILA, kami berkomitmen untuk memberikan layanan percetakan berkualitas tinggi yang memenuhi berbagai kebutuhan cetakan Anda. Dengan dukungan teknologi canggih dan tim yang
                    berpengalaman, kami siap membantu Anda dalam mencetak berbagai jenis materi dengan kualitas terbaik. Berikut adalah beberapa layanan utama yang kami tawarkan:
                </p>
            </div>

            <ServiceSection title="Kemasan" services={kemasan} />
            <ServiceSection title="Other Products" services={otherProducts} />
            <CTA />
            <Footer />
        </>
    );
}
