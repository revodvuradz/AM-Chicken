/* eslint-disable tailwindcss/no-arbitrary-value */
"use client";
import { mc } from "@/lib/functions";
import { ROUTES } from "@/lib/functions/constants";
import imageLogo from "@public/images/AMChickenLogo.png";

import { IconBrandTiktok, IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type footerLink = {
    label: string;
    href: string;
};

export const footerLinks: footerLink[] = [
    {
        label: "Home",
        href: ROUTES.HOME,
    },
    {
        label: "About Us",
        href: ROUTES.ABOUT,
    },

    {
        label: "Products",
        href: ROUTES.PRODUCTS,
    },
];

const Footer = () => {
    const currentRoute = usePathname();
    const [activeLink, setActiveLink] = useState<string>();

    useEffect(() => {
        const firstPathname = `/${currentRoute.split("/")[1] || ""}`;
        setActiveLink(firstPathname);
    }, [currentRoute]);

    return (
        <footer className="bottom-0 flex h-[420px] w-full items-end justify-center bg-neutral-100 pb-[52px] pt-[120px] md:pb-[42px] md:pt-0">
            <div className="mx-8 mb-8 flex h-36 w-full max-w-screen-2xl flex-col items-center justify-between gap-4 py-3.5 md:mx-12 md:mb-4 md:h-16 md:flex-row">
                <Link href={ROUTES.HOME} className="focus:border-primary-300 focus:outline-none focus:ring">
                    <Image src={imageLogo.src} width={110} height={40} alt="AM Chicken Logo" />
                </Link>

                <div className="flex flex-col items-end gap-4">
                    <ul className="inline-flex items-center justify-center gap-8">
                        {footerLinks.map(({ href, label }, i) => {
                            const isActive = activeLink === href;
                            return (
                                <li key={i}>
                                    <Link
                                        href={href}
                                        className={mc(
                                            "line-clamp-1 cursor-pointer overflow-hidden font-quicksand duration-100",
                                            "focus:border-primary-300 focus:outline-none focus:ring",
                                            isActive ? "font-bold text-info-600" : "font-medium text-neutral-500"
                                        )}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex gap-4 text-neutral-500 focus:border-primary-300 focus:outline-none focus:ring">
                    <Link href="https://www.instagram.com/a.m_chicken" target="_blank" rel="noopener noreferrer">
                        <IconBrandInstagram />
                    </Link>
                    <Link href="https://www.tiktok.com/@a.m_chicken" target="_blank" rel="noopener noreferrer">
                        <IconBrandTiktok />
                    </Link>
                    <Link href="https://www.facebook.com/a.m_chicken" target="_blank" rel="noopener noreferrer">
                        <IconBrandFacebook />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
