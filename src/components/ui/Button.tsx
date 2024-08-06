/* eslint-disable tailwindcss/no-arbitrary-value */
import { mc } from "@/lib/functions/mc";

import Link from "next/link";
import React from "react";

export type ButtonProps = {
    size?: "small" | "large" | "medium";
    style?: "primary" | "outline";
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string;
    asLink?: boolean;
    href?: string;
    iconOnly?: boolean;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size">;

const Button = ({ size, children, asLink, href, iconOnly, style, className, onClick, ...props }: ButtonProps) => {
    const Component = (asLink ? Link : "button") as React.ElementType;
    return (
        <Component
            href={href}
            onClick={onClick}
            className={mc(
                "flex items-center justify-center gap-2 overflow-hidden font-inter font-medium whitespace-nowrap",
                "hover:opacity-75 hover:cursor-pointer",
                "focus:border-primary-300 focus:outline-none focus:ring",
                iconOnly ? "px-3 py-3 rounded-full aspect-square min-w-[50px]" : "px-3 py-2.5 rounded-[36px]",
                style === "primary" && "bg-info-500",
                style === "outline" && "border border-primary-500",
                size === "small" && "w-full max-w-[130px]",
                size === "medium" && "w-full min-w-[149px] max-w-[149px]",
                size === "large" && "w-full min-w-[200px] max-w-[200px]",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Button;
