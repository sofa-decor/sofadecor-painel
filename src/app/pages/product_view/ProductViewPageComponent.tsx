import { Check, Close, WhatsApp } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Product, useGetManyProductsHook } from "../../../hooks/product-hooks/getManyProductsHook";
import OrderService from "../../../services/OrderService";
import PageLoader from "../../components/Loaders/page-loader/PageLoader";
import HeaderComponent from "../../components/header/HeaderComponent";
import {
    CurrentImage,
    ImageOption,
    ImageShowingContainer,
    ImagesContainer,
    ImagesOptionsList,
    ProductDetails,
    ResponsivePageStack,
    ShowwingImageClicked,
    ShowwingImageCloseIcon,
} from "./ProductViewStyles";

type stylesObj = {
    backgroundImage?: string;
    backgroundPosition?: string;
};

export default function ProductViewPageComponent() {
    const location = useLocation();
    const productName = location.state.name;
    const [product, setProduct] = useState<Product | null>(null);
    const [currentImageStyle, setCurrentImageStyle] = useState<stylesObj>({});
    const [currentUrlPage] = useState<string>(window.location.href);
    const [targetWppUrl, setTargetWppUrl] = useState<string | null>(null);
    const { data, fetch: fetchProducts } = useGetManyProductsHook(false);
    const [upperImage, setUpperImage] = useState<boolean>(false);

    useEffect(() => {
        if (!productName) return;
        fetchProducts({ name: productName });
    }, [productName]);

    useEffect(() => {
        if (!data) return;
        setProduct(data.products[0]);
        const image =
            data.products[0].images.find(img => img.main === true) || data.products[0].images[0];
        setCurrentImageStyle({ backgroundImage: `url(${image.url})` });
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

        setCurrentImageStyle({
            ...currentImageStyle,
            backgroundPosition: `${percentageX}% ${percentageY}%`,
        });
    };

    const handleChangeCurrentImage = (imageUrl: string) => {
        setCurrentImageStyle({ ...currentImageStyle, backgroundImage: `url(${imageUrl})` });
    };

    const handleShowingImage = () => {
        setUpperImage(!upperImage);
    };

    return (
        <>
            <HeaderComponent />
            <Box className="app-page-container">
                {product ? (
                    <>
                        <Stack direction="row" gap={0.5} marginBottom={2}>
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
                        <ResponsivePageStack>
                            <ImagesContainer>
                                <CurrentImage
                                    onMouseMove={handleMouseMove}
                                    style={currentImageStyle}
                                    onClick={handleShowingImage}
                                />
                                <ImagesOptionsList>
                                    {product.images.map(img => (
                                        <ImageOption
                                            url={img.url}
                                            onClick={() => handleChangeCurrentImage(img.url)}
                                        />
                                    ))}
                                </ImagesOptionsList>
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
                                    <Typography variant="body1">{product.description}</Typography>
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
                                    <Stack direction="column" gap={1}>
                                        {targetWppUrl && (
                                            <>
                                                <Button
                                                    startIcon={<WhatsApp />}
                                                    variant="contained"
                                                    color="secondary"
                                                    sx={{
                                                        color: "#ffffff",
                                                        margin: "8px 0 1px",
                                                        width: "fit-content",
                                                    }}
                                                    target="_blank"
                                                    href={targetWppUrl}
                                                >
                                                    Falar com vendedor
                                                </Button>
                                                <Typography variant="caption">
                                                    Finalize seu pedido no WhatsApp
                                                </Typography>
                                            </>
                                        )}
                                    </Stack>
                                </Box>
                            </ProductDetails>
                        </ResponsivePageStack>
                    </>
                ) : (
                    <PageLoader />
                )}
            </Box>

            {/* Image cleked and showing big slide */}
            {upperImage && (
                <ImageShowingContainer>
                    <ShowwingImageClicked
                        style={{ backgroundImage: currentImageStyle.backgroundImage }}
                    />
                    <ShowwingImageCloseIcon>
                        <Close
                            color="primary"
                            fontSize="large"
                            sx={{ cursor: "pointer" }}
                            onClick={handleShowingImage}
                        />
                        <Typography variant="overline">Close</Typography>
                    </ShowwingImageCloseIcon>
                </ImageShowingContainer>
            )}
        </>
    );
}
