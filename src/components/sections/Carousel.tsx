/* eslint-disable tailwindcss/no-arbitrary-value */
"use client";
// import type { Slider } from "@/types";

import CarouselCard from "@/components/cards/CarouselCard";
import Button from "@/components/ui/Button";
import Skeleton from "@/components/ui/Skeleton";
// import useSwr from "@/hooks/useSwr";
import imageCarousel1 from "@public/images/home/carousel/ayam-organik-1.jpg";
// import imageCarousel2 from "@public/images/home/carousel/ayam-organik-2.jpg";
import imageCarousel3 from "@public/images/home/carousel/ayam-organik-3.jpg";
import imageCarousel4 from "@public/images/home/carousel/ayam-organik-4.jpg";
// import imageCarousel5 from "@public/images/home/carousel/ayam-organik-5.jpg";

import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import { gql } from "graphql-request";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import React, { useMemo, useRef } from "react";

const Carousel = () => {
    const splideRef = useRef<Splide | null>(null);
    const prevSlide = () => {
        if (splideRef.current) {
            splideRef.current.go("-1");
        }
    };

    const nextSlide = () => {
        if (splideRef.current) {
            splideRef.current.go("+1");
        }
    };

    // const gqlQuery = gql`
    //     query getContentSliders($keyword: String) {
    //         contentSliders(keyword: $keyword, limit: 99) {
    //             items {
    //                 id
    //                 name
    //                 description
    //                 href
    //                 image {
    //                     original
    //                 }
    //                 basic {
    //                     isActive
    //                 }
    //             }
    //         }
    //     }
    // `;

    // const { data, isLoading } = useSwr(gqlQuery);

    // const items = useMemo<Slider[]>(() => {
    //     return data?.contentSliders.items || [];
    // }, [data]);

    const staticData = {
        contentSliders: {
            items: [
                {
                    id: "1",
                    name: "Slider 1",
                    description: "Ayam organik berkualitas dari AM Chicken – Sehat, lezat, alami.",
                    href: "https://www.instagram.com/a.m_chicken",
                    image: {
                        original: imageCarousel1.src,
                    },
                    basic: {
                        isActive: true,
                    },
                },
                {
                    id: "2",
                    name: "Slider 2",
                    description: "Nikmati rasa asli ayam organik untuk gaya hidup sehat.",
                    href: "https://www.instagram.com/a.m_chicken",
                    image: {
                        original: imageCarousel3.src,
                    },
                    basic: {
                        isActive: true,
                    },
                },
                {
                    id: "3",
                    name: "Slider 3",
                    description: "Kualitas terbaik dari peternakan ke meja Anda.",
                    href: "https://www.instagram.com/a.m_chicken",
                    image: {
                        original: imageCarousel4.src,
                    },
                    basic: {
                        isActive: true,
                    },
                },
                // Add more slider items as needed
            ],
        },
    };
    const data = staticData;
    const isLoading = false; // Since the data is static, set isLoading to false

    const items = useMemo(() => {
        return data.contentSliders.items || [];
    }, [data]);

    return (
        <div className="relative h-fit max-w-screen-2xl items-center justify-center overflow-hidden animate-fade-left animate-delay-100">
            {isLoading ? (
                <div className="flex h-fit w-full max-w-screen-2xl flex-row items-center justify-center gap-4 overflow-hidden">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <Skeleton key={index} className="h-[162px] w-[253px] md:h-[364px] md:w-[576px]" />
                    ))}
                </div>
            ) : (
                <>
                    <Splide
                        ref={splideRef}
                        aria-label="Slider"
                        options={{
                            rewind: true,
                            loop: items.length > 2 ? true : false,
                            type: "loop",
                            perPage: 3,
                            perMove: 1,
                            autoplay: true,
                            drag: true,
                            gap: 20,
                            interval: 3000,
                            fixedWidth: "40%",
                            focus: "center",
                            arrows: false,
                            pagination: false,
                            breakpoints: {
                                0: {
                                    gap: 5,
                                    fixedWidth: "20%",
                                },
                                340: {
                                    gap: 15,
                                    fixedWidth: "20%",
                                },
                                768: {
                                    gap: 15,
                                    fixedWidth: "20%",
                                },
                                1240: {
                                    gap: 20,
                                    fixedWidth: "40%",
                                },
                            },
                        }}
                    >
                        {items
                            .filter((item) => item.basic?.isActive)
                            .map((slider, index) => (
                                <SplideSlide key={index}>
                                    <CarouselCard {...slider} />
                                </SplideSlide>
                            ))}
                    </Splide>
                    {/* eslint-disable-next-line tailwindcss/no-arbitrary-value */}
                    <div className="pointer-events-none absolute inset-x-[460px] inset-y-36 flex items-center justify-between">
                        <div className="hidden h-fit w-full items-center justify-between transition duration-500 ease-in-out md:flex">
                            <Button aria-label="Previous slide" iconOnly className="pointer-events-auto bg-white drop-shadow-md" onClick={prevSlide}>
                                <span className="sr-only">Previous Slide</span>
                                <ArrowLeft size={24} color="#35bb5d" variant="Outline" />
                            </Button>
                            <Button aria-label="Next slide" iconOnly className="pointer-events-auto bg-white drop-shadow-md" onClick={nextSlide}>
                                <span className="sr-only">Next Slide</span>
                                <ArrowRight size={24} color="#35bb5d" variant="Outline" />
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Carousel;
