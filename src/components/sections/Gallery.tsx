/* eslint-disable tailwindcss/no-arbitrary-value */
import { TaskSquare, LikeShapes, Blur } from "@/lib/icons";
import imageGallery3 from "@public/images/bibit-1.jpg";
import imageGallery4 from "@public/images/jamu-1.jpg";
import imageGallery5 from "@public/images/jamu-3.jpg";
import imageGallery1 from "@public/images/organik-2.jpg";
import imageGallery2 from "@public/images/organik-3.jpg";

import Image from "next/image";
import React from "react";

const Gallery = () => {
    return (
        <section className="flex w-full max-w-screen-2xl flex-col items-center justify-center gap-[26px] px-[18px] pb-12 md:px-12">
            <div className="flex max-w-[824px] flex-col items-center gap-[18px] text-center">
                <h1 className=" font-outfit text-5xl font-semibold text-neutral-950 md:text-[64px]">Peternakan Kami</h1>
                <p className="text-xl font-normal text-neutral-600 md:ts-title-3 md:leading-9">
                    Selamat datang di AM Chicken. Di sini, setiap proses dilakukan dengan dedikasi tinggi untuk memastikan kualitas ayam terbaik dan tetap organik
                </p>
            </div>
            <div className=" grid w-full grid-cols-1 gap-5 md:grid-cols-3">
                <div className="flex flex-col items-start gap-5">
                    <div className="relative aspect-[435/290] w-full">
                        <Image
                            src={imageGallery1.src}
                            sizes="(min-width: 1520px) 435px, (min-width: 780px) calc(30.56vw - 23px), calc(100vw - 36px)"
                            alt="am chicken employee printing"
                            fill
                            className="rounded-[14px] bg-gray-200 object-cover object-center"
                        />
                    </div>
                    <div className="flex w-full items-center justify-center gap-[10px] rounded-[14px] bg-secondary-100 p-[18px]">
                        <LikeShapes color="#862AF3" size={36} variant="Bold" />
                        <span className="ts-title-2 whitespace-nowrap text-center font-outfit font-normal text-secondary-600 md:ts-lg-none lg:ts-title-2">Pakan Organik</span>
                    </div>
                    <div className="relative aspect-[435/290] w-full">
                        <Image
                            src={imageGallery2.src}
                            sizes="(min-width: 1520px) 435px, (min-width: 780px) calc(30.56vw - 23px), calc(100vw - 36px)"
                            alt="am chicken employee printing"
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
                        <TaskSquare color="#F06806" size={36} variant="Bold" />
                        <span className="ts-title-2 text-center font-outfit font-normal text-orange-500 md:ts-lg-none lg:ts-title-2">Perawatan Berkala</span>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-5">
                    <div className="flex w-full items-center justify-center gap-[10px] rounded-[14px] bg-green-100 p-[18px]">
                        <Blur color="#259446" size={36} variant="Bold" />
                        <span className="ts-title-2 text-center font-outfit font-normal text-green-600 md:ts-lg-none lg:ts-title-2">Jamu dan Vitamin</span>
                    </div>

                    <div className="relative aspect-[435/290] w-full">
                        <Image
                            src={imageGallery4.src}
                            sizes="(min-width: 1520px) 435px, (min-width: 780px) calc(30.56vw - 23px), calc(100vw - 36px)"
                            alt="photo of am chicken employee"
                            fill
                            className="rounded-[14px] bg-gray-200 object-cover object-center"
                        />
                    </div>
                    <div className="relative aspect-[435/290] w-full">
                        <Image
                            src={imageGallery5.src}
                            sizes="(min-width: 1520px) 435px, (min-width: 780px) calc(30.56vw - 23px), calc(100vw - 36px)"
                            alt="photo of AM Chicken employees"
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
