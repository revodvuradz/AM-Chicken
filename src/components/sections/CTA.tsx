/* eslint-disable tailwindcss/no-arbitrary-value */
import Button from "@/components/ui/Button";
import { Whatsapp } from "@/lib/icons";
import imageCTA from "@public/images/cta.png";

import Image from "next/image";
import React from "react";

const CTA = () => {
    return (
        <section className="z-10 -mb-60 flex w-full max-w-screen-2xl flex-col px-4 md:px-8">
            <div className="flex w-full flex-col items-center justify-between gap-6 rounded-[18px] bg-white p-[30px] drop-shadow-xl md:flex-row">
                <div className="flex w-full grow flex-col items-start gap-[18px]">
                    <span className="ts-title-3 font-outfit font-semibold text-info-500">Get In Touch</span>
                    <h1 className="font-outfit text-4xl font-bold leading-normal text-orange-500 md:text-[40px]">
                        Konsultasikan<span className="text-neutral-950"> Kebutuhan Cetak Anda</span>
                    </h1>
                    <p className="ts-regular-normal font-inter font-normal text-neutral-600">
                        Ratusan, Ribuan hingga Jutaan pcs produksi, kami siap membantu dengan kekuatan mesin percetakan yang kami miliki. Big Corporate & UMKM Support!
                    </p>
                    <div className="flex w-full max-w-[338px] flex-row justify-between gap-2 rounded-[34px] bg-green-100 px-5 py-3">
                        <div className="flex shrink-0 flex-row items-center gap-1">
                            <Whatsapp color="#35BB5D" variant="Bold" width={20} height={20} />
                            <span className="font-outfit text-xl font-normal leading-none text-green-500">08117272323</span>
                        </div>
                        <Button asLink size="small" href="https://wa.me/628117272323" className="ts-xs-tight bg-gray-950 font-medium text-white md:ts-sm-tight">
                            Chat WhatsApp
                        </Button>
                    </div>
                </div>
                <div className="aspect-video w-full rounded-2xl">
                    <Image src={imageCTA.src} alt="CTA" width={1920} height={1080} className="rounded-2xl bg-gray-200 object-cover object-center" />
                </div>
            </div>
        </section>
    );
};

export default CTA;
