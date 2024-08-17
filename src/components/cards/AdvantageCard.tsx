import type { Advantage } from "@/types";

import Image from "next/image";
import React from "react";

const AdvantageCard = ({ id, name, message, imageSrc }: Advantage) => {
    return (
        <article key={id} className="flex h-72 w-full flex-col gap-9 rounded-xl border border-neutral-200 bg-white p-7 animate-fade-up animate-delay-1000">
            <Image src={imageSrc.sm || "https://via.placeholder.com/60x60"} alt={`icon of ${name}`} height={64} width={64} className="aspect-square" />
            <div className="relative flex flex-col items-start gap-4">
                <h1 className="line-clamp-2 font-outfit text-2xl font-semibold text-neutral-950">{name || "-"}</h1>
                <p className="line-clamp-3 font-inter text-base font-normal text-neutral-500">{message || "-"}</p>
            </div>
        </article>
    );
};

export default AdvantageCard;
