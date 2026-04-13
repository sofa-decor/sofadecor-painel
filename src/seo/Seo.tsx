import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { absoluteUrl, getSiteUrl } from "./site";

export type SeoProps = {
    title: string;
    description: string;
    canonicalPath?: string;
    ogImage?: string;
    ogType?: "website" | "product";
    noindex?: boolean;
};

export default function Seo({
    title,
    description,
    canonicalPath,
    ogImage,
    ogType = "website",
    noindex,
}: SeoProps) {
    const location = useLocation();
    const path = canonicalPath ?? location.pathname;
    const siteUrl = getSiteUrl();
    const canonical = `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

    const defaultOg = absoluteUrl("/favicon.png");
    const ogImageAbsolute =
        ogImage && (ogImage.startsWith("http://") || ogImage.startsWith("https://"))
            ? ogImage
            : ogImage
              ? absoluteUrl(ogImage.startsWith("/") ? ogImage : `/${ogImage}`)
              : defaultOg;

    const robots = noindex ? "noindex, nofollow" : "index, follow";

    return (
        <Helmet prioritizeSeoTags>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content={robots} />
            <link rel="canonical" href={canonical} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={ogImageAbsolute} />
            <meta property="og:locale" content="pt_BR" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImageAbsolute} />
        </Helmet>
    );
}
