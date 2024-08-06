"use client";
/* eslint-disable tailwindcss/no-arbitrary-value */
import type { Advantage } from "@/types";

import AdvantageCard from "@/components/cards/AdvantageCard";
import Skeleton from "@/components/ui/Skeleton";
import useSwr from "@/hooks/useSwr";

import { gql } from "graphql-request";
import Image from "next/image";
import React, { useMemo } from "react";

// const mockAdvantages = {
//     items: [
//         {
//             id: "1",
//             imageSrc: {
//                 sm: "/images/home/imageBox.svg",
//             },
//             name: "Kami Adalah Produsen",
//             message: "Kami adalah produsen yang memiliki fasilitas produksi lengkap dalam satu area workshop",
//             basic: {
//                 isActive: true,
//             },
//         },
//         {
//             id: "2",
//             imageSrc: {
//                 sm: "/images/home/imageTimerPause.svg",
//             },
//             name: "Hemat Waktu",
//             message: "Tidak perlu antri & tersedia price list yang dapat diakses secara langsung",
//             basic: {
//                 isActive: true,
//             },
//         },
//         {
//             id: "3",
//             imageSrc: {
//                 sm: "/images/home/imageMonitor.svg",
//             },
//             name: "Design on Web",
//             message: "Desain langsung dari website cepat & mudah",
//             basic: {
//                 isActive: true,
//             },
//         },
//         {
//             id: "4",
//             imageSrc: {
//                 sm: "/images/home/imageNote.svg",
//             },
//             name: "Design Template",
//             message: "Banyak pilihan desain yang dapat langsung dicetak tanpa harus pusing Praktis!",
//             basic: {
//                 isActive: true,
//             },
//         },
//     ],
// };

const Advantages = () => {
    const gqlQuery = gql`
        query {
            whyChooseUsAll(keyword: "") {
                items {
                    id
                    name
                    message
                    imageSrc {
                        sm
                    }
                    basic {
                        isActive
                    }
                }
            }
        }
    `;

    const { data, isLoading } = useSwr(gqlQuery);

    const items = useMemo<Advantage[]>(() => {
        return data?.whyChooseUsAll?.items || [];
    }, [data]);

    const advantages = items.filter((advantage) => advantage?.basic?.isActive);

    return (
        <section className="mx-4 flex w-full max-w-screen-2xl flex-col gap-10 md:mx-12">
            <div className="relative mx-4 flex flex-row gap-8 md:mx-12">
                <div className="flex flex-col justify-between gap-2">
                    <span className="font-outfit text-2xl/6 font-semibold text-info-500">Why Choose Us</span>
                    <h1 className="font-outfit text-6xl font-medium text-neutral-700 md:text-7xl">
                        Mengapa Memilih <span className="font-outfit text-orange-500">Kamila Printing</span>
                    </h1>
                </div>
                <Image src="images/home/imageMug.svg" width={99} height={103} alt="Mug" className="absolute right-0 top-0 -z-10 h-auto w-auto" />
            </div>
            <div className="mx-4 grid grid-cols-1 gap-4 md:mx-12 md:grid-cols-2 lg:grid-cols-4">
                {isLoading
                    ? Array.from({ length: 4 }).map((_, index) => (
                          <div key={index} className="flex h-72 w-full flex-col gap-9 rounded-xl border border-neutral-200 bg-white p-7">
                              <Skeleton className="aspect-square w-16" />
                              <div className="relative flex flex-col items-start gap-4">
                                  <Skeleton className="w-32 brightness-75" />
                                  <Skeleton className="w-full" />
                                  <Skeleton className="w-[50%]" />
                              </div>
                          </div>
                      ))
                    : advantages.map((advantage, i) => <AdvantageCard key={i} {...advantage} />)}
            </div>
        </section>
    );
};

export default Advantages;
