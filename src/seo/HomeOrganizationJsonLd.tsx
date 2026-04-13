import { Helmet } from "react-helmet-async";
import { absoluteUrl } from "./site";

const BUSINESS = {
    name: "Sofa Decor House",
    telephone: "+55-51-3042-1212",
    streetAddress: "Av. Dorival Cândido Luz de Oliveira, 977",
    addressLocality: "Gravataí",
    addressRegion: "RS",
    postalCode: "94035-080",
    addressCountry: "BR",
};

export default function HomeOrganizationJsonLd() {
    const site = absoluteUrl("/");
    const graph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": `${site}#organization`,
                name: BUSINESS.name,
                url: site,
                logo: absoluteUrl("/favicon.png"),
            },
            {
                "@type": "FurnitureStore",
                "@id": `${site}#localbusiness`,
                name: BUSINESS.name,
                image: absoluteUrl("/favicon.png"),
                url: site,
                telephone: BUSINESS.telephone,
                address: {
                    "@type": "PostalAddress",
                    streetAddress: BUSINESS.streetAddress,
                    addressLocality: BUSINESS.addressLocality,
                    addressRegion: BUSINESS.addressRegion,
                    postalCode: BUSINESS.postalCode,
                    addressCountry: BUSINESS.addressCountry,
                },
            },
        ],
    };

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(graph)}</script>
        </Helmet>
    );
}
