/* eslint-disable tailwindcss/no-arbitrary-value */
import type { Slider } from "@/types";

import { mc } from "@/lib/functions";
import { parseURL } from "@/lib/utils/parseURL";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const CarouselCard = ({ name, description, href, image }: Slider) => {
    const hasLink = Boolean(href);
    const linkProps = hasLink
        ? { href: parseURL(href || "/"), target: "_blank", rel: "noopener noreferrer", className: "focus:border-primary-300 focus:outline-none focus:ring" }
        : { href: "/", className: "cursor-auto" };
    return (
        <Link {...linkProps}>
            <figure className="group h-[162px] w-[213px] overflow-hidden rounded-xl md:h-[364px] md:w-[626px] md:rounded-2xl">
                <Image
                    src={image?.original || "https://via.placeholder.com/1280x1080"}
                    alt={name}
                    fill
                    className="rounded-2xl bg-gray-200 object-cover object-center"
                    sizes="(min-width: 800px) 576px, 288px"
                    priority
                />
                <div className={mc("absolute inset-0 hidden items-end justify-end rounded-2xl p-7 transition md:flex", "group-hover:bg-black-gradient")}>
                    <figcaption
                        className={mc(
                            "relative flex h-fit w-full items-center justify-center gap-4 overflow-hidden rounded-2xl bg-black/30 p-7 opacity-0 backdrop-blur-sm transition duration-300",
                            "group-hover:opacity-100"
                        )}
                    >
                        <p className="ts-title-3 max-h-full max-w-full overflow-hidden whitespace-nowrap text-center font-outfit font-semibold text-white">{description}</p>
                    </figcaption>
                </div>
            </figure>
        </Link>
    );
};

export default CarouselCard;
