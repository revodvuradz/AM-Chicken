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
                    <h1 className="font-outfit text-4xl font-bold leading-normal text-orange-300 md:text-[40px]">
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
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0637054756153!2d113.4302464!3d-7.783070599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7010025bda8d5%3A0x19566c8c2cc4510c!2sAM%20CHICKEN!5e0!3m2!1sid!2sid!4v1723789905877!5m2!1sid!2sid"
                        width="100%"
                        height="100%"
                        className="border-0 object-cover object-center"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default CTA;
