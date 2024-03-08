export type NewProductRequest = {
    name: string;
    description: string;
    tags: Array<string>;
    rooms: Array<string>;
    mainImage: string;
    images: Array<ProductImage>;
};

export type ProductImage = {
    url: string;
    main: boolean;
};
