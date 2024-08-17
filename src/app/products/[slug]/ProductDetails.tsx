/* eslint-disable tailwindcss/no-arbitrary-value */
"use client";

import type { StoreCategory, StoreProduct } from "@/types";

import Button from "@/components/ui/Button";
import Skeleton from "@/components/ui/Skeleton";
// import useSwr from "@/hooks/useSwr";
import { slugify } from "@/lib/utils/slugify";

// import { gql } from "graphql-request";
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

    const mockData = {
        storeCategories: {
            items: [
                {
                    id: "1",
                    name: "Ayam Joper",
                    slug: "ayam-joper",
                    description:
                        "Ayam Joper adalah hasil persilangan antara ayam kampung dengan ayam broiler. Ayam ini memiliki pertumbuhan yang lebih cepat dibandingkan ayam kampung murni, namun tetap memiliki cita rasa yang lebih gurih dibandingkan ayam broiler. Daging ayam Joper umumnya lebih padat dan memiliki kandungan gizi yang lebih tinggi dibandingkan ayam broiler.",
                    products: [
                        {
                            id: "p1",
                            name: "Ayam Joper",
                            thumbnailSrc: {
                                md: "/images/joper-1.jpg",
                            },
                        },
                        {
                            id: "p2",
                            name: "Ayam Joper - Paket Spesial",
                            thumbnailSrc: {
                                md: "/images/joper-2.jpg",
                            },
                        },
                    ],
                },
                {
                    id: "2",
                    name: "Ayam Arab",
                    slug: "ayam-arab",
                    description:
                        "Ayam arab jantan adalah jenis ayam pedaging yang berasal dari Timur Tengah. Ayam ini memiliki daging yang tebal dan berlemak. Ayam arab jantan dikenal dengan pertumbuhannya yang cepat dan kemampuan beradaptasi yang baik dengan berbagai kondisi lingkungan.",
                    products: [
                        {
                            id: "p3",
                            name: "Ayam Arab",
                            thumbnailSrc: {
                                md: "/images/arab-1.jpg",
                            },
                        },
                        {
                            id: "p4",
                            name: "Ayam Arab - Super",
                            thumbnailSrc: {
                                md: "/images/arab-2.jpg",
                            },
                        },
                    ],
                },
                {
                    id: "3",
                    name: "Bibit Ayam DOC",
                    slug: "bibit-ayam-doc",
                    description:
                        "Langkah pertama adalah memilih bibit ayam yang unggul berusia 1 bulan. Setelah di karantina/diseleksi, ayam akan diberi perawatan yang intens untuk menjaga kualitas dan kesehatan ayam sebelum dipindahkan pada kandang yang terbuka.",
                    products: [
                        {
                            id: "p5",
                            name: "Bibit Ayam DOC",
                            thumbnailSrc: {
                                md: "/images/doc-1.jpg",
                            },
                        },
                        {
                            id: "p6",
                            name: "Bibit Ayam DOC - Super",
                            thumbnailSrc: {
                                md: "/images/doc-2.jpg",
                            },
                        },
                    ],
                },
                {
                    id: "4",
                    name: "Telur Ayam Kampung",
                    slug: "telur-ayam-kampung",
                    description: "Telur ayam kampung terkenal dengan kandungan nutrisi yang lebih tinggi dan rasa yang lebih gurih dibandingkan telur ayam ras.",
                    products: [
                        {
                            id: "p7",
                            name: "Telur Ayam Kampung",
                            thumbnailSrc: {
                                md: "/images/telur-kampung-1.jpg",
                            },
                        },
                        {
                            id: "p8",
                            name: "Telur Ayam Kampung - Paket Hemat",
                            thumbnailSrc: {
                                md: "/images/telur-kampung-2.jpg",
                            },
                        },
                    ],
                },
                {
                    id: "5",
                    name: "Pakan Organik",
                    slug: "pakan-organik",
                    description:
                        "Ayam organik diberi pakan yang terdiri dari bahan-bahan alami dan bebas dari bahan kimia sintetis atau GMO (Genetically Modified Organism). Pakan ini dapat berupa campuran biji-bijian, sayuran, dan sumber protein alami seperti serangga. Terkadang juga pengelola memanfaatkan sisa makanan yang didapatkan dari pesantren dan restoran yang telah menjalin kerja sama. dalam pemberian makan peternakan ayam AM Chicken memberikan perbedaan pangan untuk ayam baru. untuk ayam baru A.M chicken memberikan serat jagung sebagai pangan bahan organik dan terhindar dari kimia.",
                    products: [
                        {
                            id: "p9",
                            name: "Pakan Organik",
                            thumbnailSrc: {
                                md: "/images/pakan-1.jpg",
                            },
                        },
                        {
                            id: "p10",
                            name: "Pakan Organik GMO - Premium",
                            thumbnailSrc: {
                                md: "/images/pakan-2.jpg",
                            },
                        },
                    ],
                },
                {
                    id: "6",
                    name: "Jamu dan Vitamin",
                    slug: "jamu-dan-vitamin",
                    description:
                        "Jamu merupakan campuran herbal yang diberikan kepada ayam untuk menjaga kesehatan dan meningkatkan daya tahan tubuh. Bahan-bahan jamu bisa mencakup kunyit, jahe, temulawak, dan terkadang juga pace sebagai obat cacing. Jamu ini dapat diberikan dalam bentuk cairan atau dicampur ke dalam pakan. Prosedur pemberian jamu biasanya dilakukan secara rutin, sehari sekali. Dan juga pemberian karbohidrat tambahan pada nasi yang dicampur dengan tetes tebu sebagai tambahan gizi pada ayam.",
                    products: [
                        {
                            id: "p11",
                            name: "Jamu Herbal Ayam",
                            thumbnailSrc: {
                                md: "/images/jamu-1.jpg",
                            },
                        },
                        {
                            id: "p12",
                            name: "Vitamin Ayam",
                            thumbnailSrc: {
                                md: "/images/vitamin-1.jpg",
                            },
                        },
                    ],
                },
            ],
        },
    };

    // const { data } = useSwr(gqlQuery);
    // const gqlQuery = gql`
    //     query getStoreCategories($keyword: String) {
    //         storeCategories(keyword: $keyword, limit: 1000) {
    //             items {
    //                 id
    //                 name
    //                 slug
    //                 description
    //                 products {
    //                     id
    //                     name
    //                     thumbnailSrc {
    //                         original
    //                     }
    //                     images {
    //                         pathSrc {
    //                             original
    //                         }
    //                     }
    //                     category {
    //                         name
    //                     }
    //                     basic {
    //                         isActive
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `;

    const data = mockData;
    const isLoading = false;

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
                {isLoading ? <Skeleton className="w-1/2 brightness-75" /> : <h1 className="font-outfit text-5xl/normal font-medium text-neutral-950">{category?.name || "-"}</h1>}
                <Button onClick={() => router.back()}>
                    <CloseCircle size="34" color="#475569" />
                </Button>
            </div>
            {isLoading ? (
                <>
                    <Skeleton className="w-full" />
                    <Skeleton className="w-4/5" />
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
