"use client";
/* eslint-disable tailwindcss/no-arbitrary-value */
import type { StoreCategory, StoreProduct } from "@/types";
import type { IconProps } from "iconsax-react";

import ServiceCard from "@/components/cards/ServiceCard";
import useSwr from "@/hooks/useSwr";
import { ArchiveBook, Bag2, BagHappy, BatteryEmpty, Book, Bookmark, Box, Gift, Notepad2, Personalcard, Sticker, TaskSquare } from "@/lib/icons";

import { gql } from "graphql-request";
import React, { useMemo } from "react";

type ItemType = StoreCategory & {
    products: StoreProduct[];
};

type ServiceCard = {
    icon: React.FunctionComponent<IconProps>;
    label: string;
    iconColor: string;
    backgroundImage?: string;
};

type ServiceSectionProps = {
    title: string;
    services: ServiceCard[];
};

export const kemasan = [
    { icon: BagHappy, iconColor: "#eab308", label: "Ayam Joper" },
    { icon: Bookmark, iconColor: "#3B82F6", label: "Ayam Arab" },
    { icon: Box, iconColor: "#862AF3", label: "Ayam Kampung" },
    { icon: Gift, iconColor: "#35BB5D", label: "Telur Ayam Kampung" },
    { icon: Sticker, iconColor: "#FF8614", label: "Ayam Potong Segar" },
    { icon: Bag2, iconColor: "#EF4444", label: "Ayam Potong Segar" },
];

export const otherProducts = [
    { icon: TaskSquare, iconColor: "#eab308", label: "Agenda" },
    { icon: Notepad2, iconColor: "#9742FF", label: "Brosur" },
    { icon: ArchiveBook, iconColor: "#FF8614", label: "Gift Set Agenda" },
    { icon: Book, iconColor: "#EF4444", label: "Gratitude Journal" },
    { icon: Personalcard, iconColor: "#35BB5D", label: "ID Card" },
    { icon: BatteryEmpty, iconColor: "#3B82F6", label: "Tumbler" },
];

const ServiceSection = ({ title, services }: ServiceSectionProps) => {
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
                            md
                        }
                        images {
                            pathSrc {
                                md
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

    const { data } = useSwr(gqlQuery);

    const items = useMemo<ItemType[]>(() => {
        return data?.storeCategories?.items || [];
    }, [data]);

    return (
        <section className="w-full max-w-screen-2xl">
            <div className="mx-4 flex flex-col gap-7 md:mx-12">
                <p className="font-outfit text-5xl font-medium text-neutral-950 md:text-6xl">{title}</p>
                <div className="grid grid-cols-1 items-center justify-center gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, i) => (
                        <ServiceCard key={i} {...service} items={items} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
