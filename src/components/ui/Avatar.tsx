import { mc } from "@/lib/functions";

import Image from "next/image";
import React from "react";

type AvatarProps = {
    src: string;
    className?: string;
    alt: string;
};

const Avatar = ({ src, className, alt }: AvatarProps) => {
    return <Image src={src} width={64} height={64} className={mc("rounded-full object-center object-cover aspect-square", className)} alt={alt} />;
};

export default Avatar;
