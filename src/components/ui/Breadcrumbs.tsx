"use client";
import { navLinks } from "@/components/sections/Navbar";

import { usePathname } from "next/navigation";
import React from "react";

const Breadcrumbs = () => {
    const currentRoute = usePathname();
    const activeLink = navLinks.find((link) => link.href === currentRoute);

    if (!activeLink) {
        return null;
    }

    return (
        // eslint-disable-next-line tailwindcss/no-arbitrary-value
        <div className="flex items-center justify-center gap-[6px] rounded-[36px] bg-white p-[10px]">
            {activeLink && (
                <>
                    <span className="ts-sm-none font-medium text-primary-600">HOME</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                        <circle cx="3.5" cy="3" r="3" fill="#64748B" />
                    </svg>
                    <span className="ts-sm-none font-normal uppercase text-neutral-400">{activeLink.label}</span>
                </>
            )}
        </div>
    );
};

export default Breadcrumbs;
