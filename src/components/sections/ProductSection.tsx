"use client";
/* eslint-disable tailwindcss/no-arbitrary-value */
import type { StoreCategory, StoreProduct } from "@/types";
import type { IconProps } from "iconsax-react";

import ProductCard from "@/components/cards/ProductCard";
// import useSwr from "@/hooks/useSwr";
import { Blur, BagHappy, BatteryEmpty, Bookmark, Box, Sticker } from "@/lib/icons";

// import { gql } from "graphql-request";
import React, { useMemo } from "react";

type ItemType = StoreCategory & {
    products: StoreProduct[];
};

type ProductCard = {
    icon: React.FunctionComponent<IconProps>;
    label: string;
    iconColor: string;
    backgroundImage?: string;
};

type ProductSectionProps = {
    title: string;
    products: ProductCard[];
};

export const produk = [
    { icon: BagHappy, iconColor: "#eab308", label: "Ayam Joper" },
    { icon: Bookmark, iconColor: "#3B82F6", label: "Ayam Arab" },
    { icon: Box, iconColor: "#862AF3", label: "Bibit Ayam DOC" },
    { icon: Sticker, iconColor: "#35BB5D", label: "Telur Ayam Kampung" },
    { icon: Blur, iconColor: "#FF8614", label: "Pakan Organik" },
    { icon: BatteryEmpty, iconColor: "#EF4444", label: "Jamu dan Vitamin" },
];

const ProductSection = ({ title, products }: ProductSectionProps) => {
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
    //                         md
    //                     }
    //                     images {
    //                         pathSrc {
    //                             md
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
                                md: "/images/doc-1.jpeg",
                            },
                        },
                        {
                            id: "p6",
                            name: "Bibit Ayam DOC - Super",
                            thumbnailSrc: {
                                md: "/images/doc-1.jpeg",
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
                                md: "/images/telur-1.jpg",
                            },
                        },
                        {
                            id: "p8",
                            name: "Telur Ayam Kampung - Paket Hemat",
                            thumbnailSrc: {
                                md: "/images/telur-1.jpg",
                            },
                        },
                    ],
                },
                {
                    id: "5",
                    name: "Pakan Organik",
                    slug: "pakan-organik",
                    description:
                        "Ayam organik diberi pakan yang terdiri dari bahan-bahan alami dan bebas dari bahan kimia sintetis atau GMO (Genetically Modified Organism). Pakan ini dapat berupa campuran biji-bijian, sayuran, dan sumber protein alami seperti serangga.",
                    products: [
                        {
                            id: "p9",
                            name: "Pakan Organik",
                            thumbnailSrc: {
                                md: "/images/organik-2.jpg",
                            },
                        },
                        {
                            id: "p10",
                            name: "Pakan Organik GMO - Premium",
                            thumbnailSrc: {
                                md: "/images/orgnaik-2.jpg",
                            },
                        },
                    ],
                },
                {
                    id: "6",
                    name: "Jamu dan Vitamin",
                    slug: "jamu-dan-vitamin",
                    description:
                        "Jamu merupakan campuran herbal yang diberikan kepada ayam untuk menjaga kesehatan dan meningkatkan daya tahan tubuh. Bahan-bahan jamu bisa mencakup kunyit, jahe, temulawak, dan terkadang juga pace sebagai obat cacing.",
                    products: [
                        {
                            id: "p11",
                            name: "Jamu Herbal Ayam",
                            thumbnailSrc: {
                                md: "/images/jamu-3.jpg",
                            },
                        },
                        {
                            id: "p12",
                            name: "Vitamin Ayam",
                            thumbnailSrc: {
                                md: "/images/jamu-3.jpg",
                            },
                        },
                    ],
                },
            ],
        },
    };

    // const { data } = useSwr(gqlQuery);
    const data = mockData;
    const items = useMemo<ItemType[]>(() => {
        return data?.storeCategories?.items || [];
    }, [data]);

    return (
        <section className="w-full max-w-screen-2xl">
            <div className="mx-4 flex flex-col gap-7 md:mx-12">
                <p className="font-outfit text-5xl font-medium text-neutral-950 md:text-6xl">{title}</p>
                <div className="grid grid-cols-1 items-center justify-center gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product, i) => (
                        <ProductCard key={i} {...product} items={items} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
