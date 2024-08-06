/* eslint-disable tailwindcss/no-arbitrary-value */
import { CpuCharge, Like, Mask } from "@/lib/icons";
import imageGallery1 from "@public/images/home/gallery/gallery-1.png";
import imageGallery2 from "@public/images/home/gallery/gallery-2.png";
import imageGallery3 from "@public/images/home/gallery/gallery-3.png";
import imageGallery4 from "@public/images/home/gallery/gallery-4.png";
import imageGallery5 from "@public/images/home/gallery/gallery-5.png";

import Image from "next/image";
import React from "react";

const Gallery = () => {
    return (
        <section className="flex w-full max-w-screen-2xl flex-col items-center justify-center gap-[26px] px-[18px] pb-12 md:px-12">
            <div className="flex max-w-[824px] flex-col items-center gap-[18px] text-center">
                <h1 className=" font-outfit text-5xl font-semibold text-neutral-950 md:text-[64px]">Teknologi Kami</h1>
                <p className="text-xl font-normal text-neutral-600 md:ts-title-3 md:leading-9">
                    2 Pabrik produksi, dibantu dengan mesin-mesin modern serta SDM terbaik, siap melayani setiap kebutuhan percetakan anda
                </p>
            </div>
            <div className=" grid w-full grid-cols-1 gap-5 md:grid-cols-3">
                <div className="flex flex-col items-start gap-5">
                    <div className="relative aspect-[435/290] w-full">
                        <Image
                            src={imageGallery1.src}
                            sizes="(min-width: 1520px) 435px, (min-width: 780px) calc(30.56vw - 23px), calc(100vw - 36px)"
                            alt="kamila employee printing"
                            fill
                            className="rounded-[14px] bg-gray-200 object-cover object-center"
                        />
                    </div>
                    <div className="flex w-full items-center justify-center gap-[10px] rounded-[14px] bg-secondary-100 p-[18px]">
                        <Mask color="#862AF3" size={36} variant="Bold" />
                        <span className="ts-title-2 whitespace-nowrap text-center font-outfit font-normal text-secondary-600 md:ts-lg-none lg:ts-title-2">Printer 4 Warna</span>
                    </div>
                    <div className="relative aspect-[435/290] w-full">
                        <Image
                            src={imageGallery2.src}
                            sizes="(min-width: 1520px) 435px, (min-width: 780px) calc(30.56vw - 23px), calc(100vw - 36px)"
                            alt="kamila employee printing"
                            fill
                            className="rounded-[14px] bg-gray-200 object-cover object-center"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-5">
                    <div className="relative aspect-[434/600] ">
                        <Image
                            src={imageGallery3.src}
                            sizes="(min-width: 1520px) 435px, (min-width: 780px) calc(30.56vw - 23px), calc(100vw - 36px)"
                            alt="advanced printing machines"
                            fill
                            className="rounded-[14px] bg-gray-200 object-cover object-center"
                        />
                    </div>
                    <div className="flex w-full items-center justify-center gap-[10px] rounded-[14px] bg-orange-100 p-[18px]">
                        <CpuCharge color="#F06806" size={36} variant="Bold" />
                        <span className="ts-title-2 text-center font-outfit font-normal text-orange-600 md:ts-lg-none lg:ts-title-2">Mesin UV</span>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-5">
                    <div className="flex w-full items-center justify-center gap-[10px] rounded-[14px] bg-green-100 p-[18px]">
                        <Like color="#259446" size={36} variant="Bold" />
                        <span className="ts-title-2 text-center font-outfit font-normal text-green-600 md:ts-lg-none lg:ts-title-2">Micro Emboss</span>
                    </div>

                    <div className="relative aspect-[435/290] w-full">
                        <Image
                            src={imageGallery4.src}
                            sizes="(min-width: 1520px) 435px, (min-width: 780px) calc(30.56vw - 23px), calc(100vw - 36px)"
                            alt="photo of kamila employee printing"
                            fill
                            className="rounded-[14px] bg-gray-200 object-cover object-center"
                        />
                    </div>
                    <div className="relative aspect-[435/290] w-full">
                        <Image
                            src={imageGallery5.src}
                            sizes="(min-width: 1520px) 435px, (min-width: 780px) calc(30.56vw - 23px), calc(100vw - 36px)"
                            alt="photo of kamila printing employees"
                            fill
                            className="rounded-[14px] bg-gray-200 object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
