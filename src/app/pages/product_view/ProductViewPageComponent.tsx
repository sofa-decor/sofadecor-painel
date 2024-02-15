import { Check, WhatsApp } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product, useGetManyProductsHook } from "../../../hooks/product-hooks/getManyProductsHook";
import OrderService from "../../../services/OrderService";
import PageLoader from "../../components/Loaders/page-loader/PageLoader";
import HeaderComponent from "../../components/header/HeaderComponent";
import { CurrentImage, ImagesContainer, ProductDetails } from "./ProductViewStyles";

export default function ProductViewPageComponent() {
    const { product: productUrlString } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [zoom, setZoom] = useState<object>({});
    const [currentUrlPage] = useState<string>(window.location.href);
    const [targetWppUrl, setTargetWppUrl] = useState<string | null>(null);
    const { data, fetch: fetchProducts } = useGetManyProductsHook(false);

    useEffect(() => {
        if (!productUrlString) return;
        const name = productUrlString.replace("-", " ");
        fetchProducts({ name });
    }, [productUrlString]);

    useEffect(() => {
        if (!data) return;
        setProduct(data.products[0]);
        const image =
            data.products[0].images.find(img => img.main === true) || data.products[0].images[0];
        setZoom({ backgroundImage: `url(${image.url})` });
    }, [data]);

    useEffect(() => {
        if (product && currentUrlPage) {
            const wppUrl = OrderService.getSenderWppLink(product, currentUrlPage);
            setTargetWppUrl(wppUrl);
        }
    }, [currentUrlPage, product]);

    const handleMouseMove = (e: BaseSyntheticEvent) => {
        const { offsetX, offsetY, target } = e.nativeEvent as MouseEvent;
        const { offsetWidth, offsetHeight } = target as HTMLElement;

        const percentageX = (offsetX / offsetWidth) * 100;
        const percentageY = (offsetY / offsetHeight) * 100;

        setZoom({
            ...zoom,
            backgroundPosition: `${percentageX}% ${percentageY}%`,
        });
    };

    return (
        <>
            <HeaderComponent />
            <Box className="app-page-container">
                {product ? (
                    <>
                        <Stack direction="row" gap={0.5}>
                            <Typography fontWeight={500} variant="caption">
                                Categorias:{" "}
                            </Typography>
                            {product.tags.map(key => (
                                <Typography
                                    fontWeight={500}
                                    fontStyle={"italic"}
                                    variant="caption"
                                    key={key}
                                >
                                    {key.toLowerCase()}
                                </Typography>
                            ))}
                        </Stack>
                        <Stack direction="row" gap={5}>
                            <ImagesContainer>
                                <CurrentImage onMouseMove={handleMouseMove} style={zoom} />
                            </ImagesContainer>
                            <ProductDetails>
                                <Box>
                                    <Typography
                                        fontSize={18}
                                        variant="overline"
                                        color="primary"
                                        fontWeight={500}
                                    >
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body1">
                                        A poltrona tangara tem revestimento em couro-veludo com os
                                        pes e pegador para maos em madeira de carvalho.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Stack direction="row" gap={1}>
                                        <Check />
                                        <Typography variant="subtitle1">
                                            Compre com seguranca
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" gap={1}>
                                        <Check />
                                        <Typography variant="subtitle1">
                                            Qualidade garantida
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" gap={1}>
                                        <Check />
                                        <Typography variant="subtitle1">
                                            Em ate 12X s/ juros
                                        </Typography>
                                    </Stack>
                                    <br />
                                    <Stack direction="row" gap={1}>
                                        {targetWppUrl && (
                                            <Button
                                                startIcon={<WhatsApp />}
                                                variant="contained"
                                                color="primary"
                                                sx={{ color: "#ffffff" }}
                                                target="_blank"
                                                href={targetWppUrl}
                                            >
                                                Falar com vendedor
                                            </Button>
                                        )}
                                    </Stack>
                                    <br />
                                    <Typography variant="caption">
                                        Finalize seu pedido no WhatsApp
                                    </Typography>
                                </Box>
                            </ProductDetails>
                        </Stack>
                    </>
                ) : (
                    <PageLoader />
                )}
            </Box>
        </>
    );
}
