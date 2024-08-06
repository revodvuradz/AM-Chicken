/* eslint-disable tailwindcss/no-arbitrary-value */
"use client";
import type { Testimonial } from "@/types";

import Clients from "@/components/sections/Clients";
import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import Skeleton from "@/components/ui/Skeleton";
import useSwr from "@/hooks/useSwr";
import { ArrowLeft, ArrowRight } from "@/lib/icons";
import imageTesti1 from "@public/images/home/testimonials/Testi_1.png";

// eslint-disable-next-line import/order
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { gql } from "graphql-request";
import React, { useMemo, useRef } from "react";

const TestimonialCard = ({ name, bio, message, imageSrc }: Testimonial) => (
    <SplideSlide>
        <div className="ts-regular-normal flex h-[288px] flex-col items-start gap-6 overflow-hidden rounded-2xl bg-white p-4">
            <Avatar src={imageSrc.sm || imageTesti1.src} alt={name ? `${name} photo` : "User profile picture"} />
            <div className="flex grow">
                <blockquote className="line-clamp-5 grow font-normal text-neutral-950">{message || "-"}</blockquote>
            </div>
            <p className="font-semibold text-orange-600">
                {name || "-"}
                <span className="text-neutral-600"> - {bio || "-"}</span>
            </p>
        </div>
    </SplideSlide>
);

const Testimonials = () => {
    const gqlQuery = gql`
        query getTestimonies($limit: Int) {
            testimonies(limit: $limit) {
                items {
                    id
                    name
                    bio
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

    const items = useMemo<Testimonial[]>(() => {
        return data?.testimonies.items || [];
    }, [data]);

    const testimonies = items.filter((testimony) => testimony?.basic?.isActive);

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
    return (
        <section className="flex w-full items-center justify-center overflow-hidden bg-primary-50">
            <div className="flex w-full max-w-screen-2xl shrink-0 flex-col items-center gap-[61px] px-[18px] py-16  md:px-12">
                <Clients />
                <div className="flex w-full max-w-[651px] flex-col items-center justify-center gap-[18px]">
                    <h1 className="items-center text-center font-outfit text-[3rem] font-semibold text-neutral-950 md:text-[4rem]">
                        Apa Kata<span className="text-info-500"> Mereka</span>?
                    </h1>
                    <p className="text-center font-inter text-xl font-normal text-neutral-600 md:text-2xl">Ratusan pimpinan perusahaan merasa puas dan terbantu dengan layanan kamila printing</p>
                </div>

                <div className="flex h-[296px] w-[1344px] flex-row items-center justify-center gap-5">
                    <Button aria-label="previous slide" iconOnly className="hidden bg-white drop-shadow-md lg:flex" onClick={prevSlide}>
                        <span className="sr-only">Previous Slide</span>
                        <ArrowLeft size={24} color="#0EA5E9" variant="Outline" />
                    </Button>
                    <div className="flex w-full flex-row items-center justify-center gap-4 overflow-hidden">
                        {isLoading ? (
                            Array.from({ length: 3 }).map((_, index) => <Skeleton key={index} className="flex h-[288px] w-1/3" />)
                        ) : (
                            <Splide
                                ref={splideRef}
                                options={{
                                    loop: true,
                                    type: "loop",
                                    perPage: 3,
                                    perMove: 1,
                                    autoplay: true,
                                    fixedHeight: "100%",
                                    fixedWidth: "21%",
                                    gap: 20,
                                    pagination: false,
                                    focus: "center",
                                    arrows: false,
                                    interval: 3000,
                                    drag: true,
                                }}
                            >
                                {testimonies.map((testimonial, id) => (
                                    <TestimonialCard key={id} {...testimonial} />
                                ))}
                            </Splide>
                        )}
                    </div>
                    <Button aria-label="next slide" iconOnly className="hidden bg-white drop-shadow-md lg:flex" onClick={nextSlide}>
                        <span className="sr-only">Next Slide</span>
                        <ArrowRight size={24} color="#0EA5E9" variant="Outline" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
