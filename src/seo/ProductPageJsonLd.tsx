import { Helmet } from "react-helmet-async";
import { Product } from "../hooks/product-hooks/getManyProductsHook";
import { absoluteUrl } from "./site";

type Props = {
    product: Product;
    productPath: string;
};

export default function ProductPageJsonLd({ product, productPath }: Props) {
    const site = absoluteUrl("/");
    const productUrl = absoluteUrl(productPath);
    const images = product.images?.length
        ? product.images.map(i => i.url)
        : product.mainImage
          ? [product.mainImage]
          : [];

    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Início",
                item: site,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Loja",
                item: absoluteUrl("/loja"),
            },
            {
                "@type": "ListItem",
                position: 3,
                name: product.name,
                item: productUrl,
            },
        ],
    };

    const productLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: images,
        brand: {
            "@type": "Organization",
            name: "Sofa Decor House",
            url: site,
        },
        url: productUrl,
    };

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
            <script type="application/ld+json">{JSON.stringify(productLd)}</script>
        </Helmet>
    );
}
