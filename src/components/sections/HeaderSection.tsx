/* eslint-disable tailwindcss/no-arbitrary-value */
import Breadcrumbs from "@/components/ui/Breadcrumbs";

import React from "react";

type HeaderSectionProps = {
    title: string;
};

const UnderlinedTitle = ({ title }: HeaderSectionProps) => {
    const words = title.split(" ");
    const lastWord = words.pop();
    const restOfTitle = words.join(" ");

    return (
        <div className="text-center font-outfit text-4xl font-medium text-neutral-950 md:text-5xl">
            <span>{restOfTitle} </span>
            <span className="underline decoration-secondary-600 decoration-4 underline-offset-[12px]">{lastWord}</span>
        </div>
    );
};

const HeaderSection = ({ title }: HeaderSectionProps) => {
    return (
        <header className="-mt-8 flex h-[340px] w-screen flex-col items-center justify-center gap-6 bg-primary-50 md:-mt-14">
            <Breadcrumbs />
            <UnderlinedTitle title={title} />
        </header>
    );
};

export default HeaderSection;
