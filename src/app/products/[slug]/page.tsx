/* eslint-disable tailwindcss/no-arbitrary-value */
import type { Metadata } from "next";

import ProductDetails from "@/app/products/[slug]/ProductDetails";

export const metadata: Metadata = {
    title: "Products",
};

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    return (
        <div className="flex w-full max-w-[890px] flex-col gap-[18px] px-4 pb-20">
            <ProductDetails slug={slug} />
        </div>
    );
}
