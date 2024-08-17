"use client";
/* eslint-disable tailwindcss/no-arbitrary-value */
import type { StoreCategory, StoreProduct } from "@/types";
import type { IconProps } from "iconsax-react";

import { mc } from "@/lib/functions";
import { ROUTES } from "@/lib/functions/constants";
import { BatteryEmpty } from "@/lib/icons";
import { slugify } from "@/lib/utils/slugify";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type ItemType = StoreCategory & {
    products: StoreProduct[];
};

type ServiceCardProps = {
    icon: React.FunctionComponent<IconProps>;
    iconColor: string;
    label: string;
    items: ItemType[];
};

const ProductCard = ({ icon: Icon, iconColor, label, items }: ServiceCardProps) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const shouldRotateIcon = Icon === BatteryEmpty;

    const category = items.find((item) => item.name === label);

    return (
        <Link
            key={category?.id}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            href={`${ROUTES.PRODUCTS}/${category?.slug || slugify(label)}`}
            className="rounded-xl focus:border-primary-300 focus:outline-none focus:ring"
        >
            <section
                className={mc("relative p-8 flex flex-col justify-end gap-y-[34px] rounded-xl border border-neutral-200 group", "hover:text-white")}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <div className={mc("w-[64px] z-20 transition-transform transform", "group-hover:-translate-y-[14px]", shouldRotateIcon && "-rotate-90", isFocused && "-translate-y-[14px]")}>
                    <Icon variant="Bold" size={64} color={isHovering || isFocused ? "#FFFFFF" : iconColor} />
                </div>

                <p className={mc("line-clamp-1 font-outfit text-3xl font-normal md:text-3xl z-20 text-neutral-950 duration-300", "group-hover:text-white", isFocused && "text-white")}>{label}</p>
                <div className={mc("absolute inset-0 opacity-0 overflow-hidden rounded-xl opacity-0 duration-300 ease-in-out", "group-hover:opacity-100", isFocused && "opacity-100")}>
                    <div className="absolute inset-0 z-10 bg-black/[.35]" />
                    <Image
                        src={category?.products[0]?.thumbnailSrc?.md || (category?.products[0]?.images && category.products[0].images[0].pathSrc.md) || "https://via.placeholder.com/400x600"}
                        alt={`photo of ${label}`}
                        fill
                        sizes="(min-width: 1520px) 432px, (min-width: 1040px) 28.91vw, (min-width: 780px) calc(50vw - 60px), calc(100vw - 34px)"
                        className={mc("bg-gray-200 object-cover object-center duration-100 ease-in-out", " group-hover:scale-105")}
                    />
                </div>
            </section>
        </Link>
    );
};

export default ProductCard;
