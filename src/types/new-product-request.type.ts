export type NewProductRequest = {
    name: string;
    description: string;
    tags: Array<string>;
    images: Array<ProductImage>;
};

export type ProductImage = {
    url: string;
    main: boolean;
};
