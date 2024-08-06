/* eslint-disable tailwindcss/no-arbitrary-value */
"use client";

import type { StoreCategory, StoreProduct } from "@/types";

import Button from "@/components/ui/Button";
import Skeleton from "@/components/ui/Skeleton";
import useSwr from "@/hooks/useSwr";
import { slugify } from "@/lib/utils/slugify";

import { gql } from "graphql-request";
import { CloseCircle } from "iconsax-react";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import React, { useMemo } from "react";

type ItemType = StoreCategory & {
    products: StoreProduct[];
};

const ProductDetails = (params: { slug: string }) => {
    const { slug } = params;
    const router = useRouter();

    const gqlQuery = gql`
        query getStoreCategories($keyword: String) {
            storeCategories(keyword: $keyword, limit: 1000) {
                items {
                    id
                    name
                    slug
                    description
                    products {
                        id
                        name
                        thumbnailSrc {
                            original
                        }
                        images {
                            pathSrc {
                                original
                            }
                        }
                        category {
                            name
                        }
                        basic {
                            isActive
                        }
                    }
                }
            }
        }
    `;

    const { data, isLoading } = useSwr(gqlQuery);

    const items = useMemo<ItemType[]>(() => {
        return data?.storeCategories?.items || [];
    }, [data]);

    const category = items.find((item) => (item.slug || slugify(item.name!)) === slug);

    if (!category && !isLoading) {
        return notFound();
    }

    return (
        <>
            <div className="flex items-start justify-between">
                {isLoading ? <Skeleton className="w-[50%] brightness-75" /> : <h1 className="font-outfit text-5xl/normal font-medium text-neutral-950">{category?.name || "-"}</h1>}
                <Button onClick={() => router.back()}>
                    <CloseCircle size="34" color="#475569" />
                </Button>
            </div>
            {isLoading ? (
                <>
                    <Skeleton className="w-full" />
                    <Skeleton className="w-[80%]" />
                </>
            ) : (
                <p className="ts-lg-normal font-normal text-neutral-600">{category?.description || "-"}</p>
            )}
            <div className="flex flex-col gap-4 rounded-3xl md:gap-6">
                <div className="relative aspect-[890/948] w-full rounded-3xl">
                    {isLoading ? (
                        <Skeleton />
                    ) : (
                        category?.products[0]?.thumbnailSrc?.original && (
                            <Image
                                alt={category?.name || "-"}
                                src={category?.products[0]?.thumbnailSrc?.original || "https://via.placeholder.com/900x900"}
                                sizes="(min-width: 940px) 417px, calc(46.94vw - 15px)"
                                className="rounded-2xl object-cover object-center"
                                quality={100}
                                fill
                            />
                        )
                    )}
                </div>

                <div className="relative aspect-[890/394] w-full rounded-xl">
                    {isLoading ? (
                        <Skeleton />
                    ) : (
                        category?.products[1]?.thumbnailSrc?.original && (
                            <Image
                                alt={category?.name || "-"}
                                src={category?.products[1]?.thumbnailSrc?.original || "https://via.placeholder.com/900x400"}
                                sizes="(min-width: 940px) 417px, calc(46.94vw - 15px)"
                                className="rounded-2xl object-cover object-center"
                                fill
                            />
                        )
                    )}
                </div>

                <div className="flex flex-row gap-4 rounded-3xl md:gap-6">
                    {[2, 3].map((index) => (
                        <div key={index} className="relative aspect-[435/554] w-1/2 rounded-3xl">
                            {isLoading ? (
                                <Skeleton />
                            ) : (
                                category?.products[index]?.thumbnailSrc?.original && (
                                    <Image
                                        alt={category?.name || "-"}
                                        src={category?.products[index]?.thumbnailSrc?.original || "https://via.placeholder.com/400x600"}
                                        sizes="(min-width: 940px) 417px, calc(46.94vw - 15px)"
                                        className="rounded-2xl object-cover object-center"
                                        fill
                                    />
                                )
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
