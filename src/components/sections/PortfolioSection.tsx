"use client";
/* eslint-disable tailwindcss/no-arbitrary-value */
import type { Portfolio } from "@/types";

import Button from "@/components/ui/Button";
import Skeleton from "@/components/ui/Skeleton";
import useSwr from "@/hooks/useSwr";
import { ROUTES } from "@/lib/functions/constants";
import imageMug from "@public/images/mug-decoration.svg";

import { gql } from "graphql-request";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import React, { useMemo } from "react";

const PortfolioSection = () => {
    const gqlQuery = gql`
        query getPortfolios($keyword: String) {
            portfolios(keyword: $keyword, limit: 1000) {
                items {
                    id
                    name
                    body
                    thumbnailSrc {
                        original
                    }
                    basic {
                        isActive
                    }
                    images {
                        id
                        pathSrc {
                            original
                        }
                    }
                }
            }
        }
    `;

    const { data, isLoading } = useSwr(gqlQuery);

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
                                <Image src={imageMug} width={99} height={103} alt="Mug Mockup" className="absolute -right-5 z-0 size-auto" />
                                <span className="ts-title-3 font-outfit font-semibold text-orange-300">Agen & Reseller</span>
                                <h1 className="z-10 font-outfit text-[64px] font-medium leading-none text-neutral-700">
                                    Gabung Bersama<span className="text-info-500"> Kami</span>
                                </h1>
                            </div>
                            <p className="ts-lg-normal font-inter font-normal text-neutral-600">
                                Jadilah agen atau reseller AM Chicken. Dapatkan dukungan penuh dan akses ke produk ayam organik yang diminati pasar. Hubungi kami untuk bergabung!
                            </p>
                            <Button asLink size="large" style="outline" href={ROUTES.PORTFOLIO} className="text-primary-500">
                                Selengkapnya
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
