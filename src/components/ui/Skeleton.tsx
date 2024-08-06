import { mc } from "@/lib/functions";

import React from "react";

type SkeletonProps = {
    className?: string;
};
const Skeleton = ({ className }: SkeletonProps) => {
    return (
        <div
            // eslint-disable-next-line tailwindcss/no-arbitrary-value
            className={mc(
                "h-full overflow-hidden relative rounded-lg space-y-5 bg-gray-300 bg-gradient-to-r from-transparent via-gray-100 to-transparent p-4 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-t before:border-gray-300 before:bg-gradient-to-r before:from-transparent before:via-gray-300 before:to-transparent cursor-wait",
                className
            )}
        />
    );
};

export default Skeleton;
