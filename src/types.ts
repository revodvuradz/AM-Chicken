export type BasicEntity = {
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
};

export type Image = {
    original?: string;
    md?: string;
    sm?: string;
    xs?: string;
};

export type Testimonial = {
    id: string;
    name: string;
    bio: string;
    message: string;
    imageSrc: Image;
    basic: BasicEntity;
};

export type StoreCategory = {
    id?: string;
    name?: string;
    slug?: string;
    description?: string;
};

export type StoreProductImage = {
    pathSrc: Image;
};

export type PortfolioImage = {
    id: string;
    pathSrc: Image;
};

export type StoreProduct = {
    id?: string;
    name?: string;
    slug?: string;
    body?: string;
    thumbnailSrc?: Image;
    price?: number;
    category?: StoreCategory;
    links?: Partial<{
        tokopedia: string;
        shopee: string;
        bukalapak: string;
        blibli: string;
        whatsapp: string;
    }>;
    images?: StoreProductImage[];
    basic?: BasicEntity;
};

export type Client = {
    id: string;
    name: string;
    imageSrc?: Image;
    basic?: BasicEntity;
};

export type Slider = {
    id: string;
    name: string;
    description: string;
    href?: string;
    image?: Image;
    basic?: BasicEntity;
};

export type Portfolio = {
    id: string;
    name: string;
    body: string;
    thumbnailSrc?: Image;
    images: PortfolioImage[];
    basic?: BasicEntity;
};

export type Advantage = {
    id: string;
    name: string;
    message: string;
    imageSrc: Image;
    basic?: BasicEntity;
};
