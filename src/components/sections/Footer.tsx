/* eslint-disable tailwindcss/no-arbitrary-value */
"use client";
import { mc } from "@/lib/functions";
import { ROUTES } from "@/lib/functions/constants";
import imageLogo from "@public/images/AMChickenLogo.png";

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
        label: "Services",
        href: ROUTES.SERVICES,
    },
    {
        label: "Portfolio",
        href: ROUTES.PORTFOLIO,
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
        <footer className="bottom-0 flex h-[360px] w-full items-end justify-center bg-neutral-100 pb-[42px]">
            <div className="mx-4 mb-4 flex h-16 w-full max-w-screen-2xl items-center justify-between gap-4 py-3.5 xs:flex-col md:mx-12 md:flex-row">
                <Link href={ROUTES.HOME} className="focus:border-primary-300 focus:outline-none focus:ring">
                    <Image src={imageLogo.src} width={110} height={40} alt="AM Chicken Logo" />
                </Link>

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
        </footer>
    );
};

export default Footer;
