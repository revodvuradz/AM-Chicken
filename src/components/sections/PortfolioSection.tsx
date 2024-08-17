"use client";
/* eslint-disable tailwindcss/no-arbitrary-value */
import type { Portfolio } from "@/types";

import Button from "@/components/ui/Button";
import Skeleton from "@/components/ui/Skeleton";
import { ROUTES } from "@/lib/functions/constants";
import imageDeco from "@public/images/bg-deco-orange.svg";

import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import React, { useMemo } from "react";

const PortfolioSection = () => {
    //     const gqlQuery = gql`
    //         query getPortfolios($keyword: String) {
    //             portfolios(keyword: $keyword, limit: 1000) {
    //                 items {
    //                     id
    //                     name
    //                     body
    //                     thumbnailSrc {
    //                         original
    //                     }
    //                     basic {
    //                         isActive
    //                     }
    //                     images {
    //                         id
    //                         pathSrc {
    //                             original
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     `;

    const mockData = {
        portfolios: {
            items: [
                {
                    id: "1",
                    name: "Ayam Joper",
                    body: "Ayam Joper adalah hasil persilangan antara ayam kampung dengan ayam broiler, dikenal dengan pertumbuhan cepat dan kualitas daging yang baik.",
                    thumbnailSrc: {
                        original: "/images/joper-1.jpg",
                    },
                    basic: {
                        isActive: true,
                    },
                    images: [
                        {
                            id: "1-1",
                            pathSrc: {
                                original: "/images/joper-1.jpg",
                            },
                        },
                    ],
                },
                {
                    id: "2",
                    name: "Ayam Arab",
                    body: "Ayam Arab dikenal dengan produktivitas telur yang tinggi dan ketahanan yang baik terhadap penyakit.",
                    thumbnailSrc: {
                        original: "/images/arab-1.jpg",
                    },
                    basic: {
                        isActive: true,
                    },
                    images: [
                        {
                            id: "2-1",
                            pathSrc: {
                                original: "/images/arab-1.jpg",
                            },
                        },
                    ],
                },
                {
                    id: "3",
                    name: "Bibit Ayam DOC",
                    body: "Bibit Ayam DOC berkualitas yang siap dipelihara untuk menghasilkan ayam sehat dan berkualitas.",
                    thumbnailSrc: {
                        original: "/images/agen-3.jpeg",
                    },
                    basic: {
                        isActive: true,
                    },
                    images: [
                        {
                            id: "3-1",
                            pathSrc: {
                                original: "/images/agem-3.jpeg",
                            },
                        },
                    ],
                },
                {
                    id: "4",
                    name: "Telur Ayam Kampung",
                    body: "Telur Ayam Kampung organik yang kaya nutrisi, baik untuk kesehatan dan memiliki rasa yang lebih gurih.",
                    thumbnailSrc: {
                        original: "/images/agen-2.jpeg",
                    },
                    basic: {
                        isActive: true,
                    },
                    images: [
                        {
                            id: "4-1",
                            pathSrc: {
                                original: "/images/agen-2.jpeg",
                            },
                        },
                    ],
                },
            ],
        },
    };

    const data = mockData;
    const isLoading = false;
    const items = useMemo<Portfolio[]>(() => {
        return data?.portfolios?.items || [];
    }, [data]);

    const portfolios = items.filter((portfolio) => portfolio?.basic?.isActive);

    return (
        <section className="flex w-full items-center justify-center bg-primary-50">
            <div className="flex w-full max-w-screen-2xl flex-col items-center gap-[61px] px-[18px] py-16 md:px-12">
                <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
                    <div className="flex flex-col gap-5 md:gap-[31px]">
                        <div className="grid w-full grid-cols-2 gap-5">
                            <div className="relative aspect-[321/342]">
                                {isLoading ? (
                                    <Skeleton />
                                ) : (
                                    <Image
                                        src={portfolios[0]?.thumbnailSrc?.original || "https://via.placeholder.com/300x400"}
                                        sizes="(min-width: 1520px) 321px, (min-width: 1040px) 21.74vw, (min-width: 780px) calc(50vw - 58px), calc(50vw - 28px)"
                                        alt={`photo of ${portfolios[0]?.name}` || "-"}
                                        fill
                                        className="rounded-2xl bg-gray-200 object-cover object-center"
                                    />
                                )}
                            </div>
                            <div className="relative aspect-[321/342]">
                                {isLoading ? (
                                    <Skeleton />
                                ) : (
                                    <Image
                                        src={portfolios[1]?.thumbnailSrc?.original || "https://via.placeholder.com/300x400"}
                                        sizes="(min-width: 1520px) 321px, (min-width: 1040px) 21.74vw, (min-width: 780px) calc(50vw - 58px), calc(50vw - 28px)"
                                        alt={`photo of ${portfolios[1]?.name}` || "-"}
                                        fill
                                        className="rounded-2xl bg-gray-200 object-cover object-center"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="relative aspect-[662/415]">
                            {isLoading ? (
                                <Skeleton />
                            ) : (
                                <Image
                                    src={portfolios[2]?.thumbnailSrc?.original || "https://via.placeholder.com/700x400"}
                                    sizes="(min-width: 1520px) 662px, (min-width: 1040px) 43.48vw, (min-width: 780px) calc(100vw - 96px), calc(100vw - 36px)"
                                    alt={`photo of ${portfolios[2]?.name}` || "-"}
                                    fill
                                    className="rounded-2xl bg-gray-200 object-cover object-center"
                                />
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 lg:justify-between lg:gap-5">
                        <div className="relative aspect-[662/415]">
                            {isLoading ? (
                                <Skeleton />
                            ) : (
                                <Image
                                    src={portfolios[3]?.thumbnailSrc?.original || "https://via.placeholder.com/700x400"}
                                    sizes="(min-width: 1520px) 662px, (min-width: 1040px) 43.48vw, (min-width: 780px) calc(100vw - 96px), calc(100vw - 36px)"
                                    alt={`photo of ${portfolios[3]?.name}` || "-"}
                                    fill
                                    className="rounded-2xl bg-gray-200 object-cover object-center"
                                />
                            )}
                        </div>
                        <div className="flex w-full max-w-[548px] flex-col gap-8">
                            <div className="relative flex flex-col items-start gap-[18px]">
                                <Image src={imageDeco} width={99} height={103} alt="Background Decos" className="absolute -right-5 z-0 size-auto" />
                                <span className="ts-title-3 font-outfit font-semibold text-orange-300">Agen & Reseller</span>
                                <h1 className="z-10 font-outfit text-[64px] font-medium leading-none text-neutral-700">
                                    Gabung Bersama<span className="text-info-500"> Kami</span>
                                </h1>
                            </div>
                            <p className="ts-lg-normal font-inter font-normal text-neutral-600">
                                Jadilah agen atau reseller AM Chicken. Dapatkan dukungan penuh dan akses ke produk ayam organik yang diminati pasar. Hubungi kami untuk bergabung!
                            </p>
                            <Button asLink size="large" style="outline" href={ROUTES.ABOUT} className="text-primary-500">
                                Tentang Kami
                                <ArrowRight color="#35bb5d" size={24} variant="Outline" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
