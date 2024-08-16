/* eslint-disable tailwindcss/no-arbitrary-value */
"use client";
import Button from "@/components/ui/Button";
import { mc } from "@/lib/functions";
import { ROUTES } from "@/lib/functions/constants";
import { HambergerMenu, Whatsapp } from "@/lib/icons";
import imageLogo from "@public/images/AMChickenLogo.png";

import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

type NavLink = {
    label: string;
    href: string;
};

export const navLinks: NavLink[] = [
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

const Navbar = () => {
    const segments = useSelectedLayoutSegments();
    const [activeLink, setActiveLink] = useState<string>();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuRef = useRef(null);

    const closeMobileMenu = useCallback(() => {
        setMobileMenuOpen(false);
    }, [setMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    useEffect(() => {
        const firstPathname = segments.length > 0 ? `/${segments[0]}` : "/";
        setActiveLink(firstPathname);
    }, [segments]);

    const handleOutsideClick = useCallback(
        (event: MouseEvent) => {
            if (menuRef.current && (menuRef.current as HTMLDivElement).contains(event.target as Node)) {
                closeMobileMenu();
            }
        },
        [menuRef, closeMobileMenu]
    );

    useEffect(() => {
        const handleResize = () => {
            closeMobileMenu();
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleResize);
        };
    }, [closeMobileMenu]);

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [menuRef, handleOutsideClick]);

    return (
        <nav className="relative top-0 z-50 flex h-16 w-full max-w-screen-2xl items-center justify-between px-4 py-3.5 md:px-4">
            <Link href={ROUTES.HOME} className="focus:border-primary-300 focus:outline-none focus:ring">
                <Image src={imageLogo.src} width={110} height={40} alt="AM Chicken Logo" priority />
            </Link>
            <Button
                role="button"
                className="flex md:hidden"
                onClick={toggleMobileMenu}
                aria-label="Toggle Mobile Menu"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        toggleMobileMenu();
                    }
                }}
            >
                <HambergerMenu size="32" color="#000000" />
            </Button>
            <div className="hidden max-h-10 items-center gap-2 bg-white md:flex lg:gap-8">
                <ul className="hidden max-h-10 items-center justify-center space-x-2 md:flex">
                    {navLinks.map(({ href, label }, i) => {
                        const isActive = activeLink === href;
                        return (
                            <li key={i}>
                                <Link
                                    href={href}
                                    className={mc(
                                        "rounded-full h-full cursor-pointer items-center text-center py-2.5 px-4 lg:px-8 font-inter duration-100",
                                        "focus:outline-none focus:ring focus:border-primary-200",
                                        isActive ? "bg-info-100 font-bold text-info-600" : "text-neutral-500"
                                    )}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                    <Button asLink size="medium" href="https://wa.me/628117272323" className="ts-sm-tight hidden bg-green-500 text-white md:flex">
                        <Whatsapp color="#FFFFFF" variant="Bold" width={20} height={20} />
                        Kontak Kami
                    </Button>
                </ul>
            </div>
            {isMobileMenuOpen && (
                <div ref={menuRef} className="absolute inset-0 h-screen w-screen transition duration-300 ease-in-out">
                    <ul className="absolute inset-0 top-16 z-40 h-fit w-full max-w-screen-2xl flex-col items-center justify-center space-y-2 bg-white p-4 transition duration-300 ease-in-out">
                        {navLinks.map(({ href, label }, i) => {
                            const isActive = activeLink === href;
                            return (
                                <li key={i}>
                                    <Link
                                        href={href}
                                        className={mc("flex h-full w-full cursor-pointer items-start text-start")}
                                        onClick={() => {
                                            closeMobileMenu();
                                        }}
                                    >
                                        <span className={mc("py-2.5 font-inter duration-100", isActive ? "px-8 rounded-full bg-info-100 font-bold text-info-600" : "text-neutral-500")}>{label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                        <Button asLink size="medium" href="https://wa.me/628117272323" className="ts-sm-tight bg-green-500 text-white">
                            <Whatsapp color="#FFFFFF" variant="Bold" width={20} height={20} />
                            Kontak Kami
                        </Button>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
