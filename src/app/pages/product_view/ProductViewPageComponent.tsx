import { Check, Close, WhatsApp } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { BaseSyntheticEvent, useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Product, useGetManyProductsHook } from "../../../hooks/product-hooks/getManyProductsHook";
import OrderService from "../../../services/OrderService";
import ProductPageJsonLd from "../../../seo/ProductPageJsonLd";
import Seo from "../../../seo/Seo";
import PageLoader from "../../components/Loaders/page-loader/PageLoader";
import HeaderComponent from "../../components/header/HeaderComponent";
import { AlertError, AlertInfo } from "../../components/alert";
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

type LocationState = {
    name?: string;
};

export default function ProductViewPageComponent() {
    const { productName: productNameParam } = useParams<{ productName: string }>();
    const location = useLocation();
    const stateName = (location.state as LocationState | null)?.name;

    const productName = useMemo(() => {
        if (productNameParam) {
            try {
                return decodeURIComponent(productNameParam);
            } catch {
                return productNameParam;
            }
        }
        return stateName;
    }, [productNameParam, stateName]);

    const [product, setProduct] = useState<Product | null>(null);
    const [currentImageStyle, setCurrentImageStyle] = useState<stylesObj>({});
    const [currentUrlPage] = useState<string>(window.location.href);
    const [targetWppUrl, setTargetWppUrl] = useState<string | null>(null);
    const { data, fetch: fetchProducts, loading, error } = useGetManyProductsHook(false);
    const [upperImage, setUpperImage] = useState<boolean>(false);

    const productPath = product
        ? `/loja/produto/${encodeURIComponent(product.name)}`
        : productNameParam
          ? `/loja/produto/${productNameParam}`
          : "/loja/produto";

    useEffect(() => {
        if (!productName) return;
        fetchProducts({ name: productName });
    }, [productName, fetchProducts]);

    useEffect(() => {
        if (!data) return;
        if (!data.products?.length) {
            setProduct(null);
            return;
        }
        setProduct(data.products[0]);
        const image =
            data.products[0].images.find(img => img.main === true) || data.products[0].images[0];
        setCurrentImageStyle({ backgroundImage: `url(${image.url})` });
    }, [data]);

    useEffect(() => {
        if (product && currentUrlPage) {
            const wppUrl = OrderService.getSenderWppLink();
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

    const seoDescription = product
        ? product.description.slice(0, 160)
        : "Detalhes do produto na Sofa Decor House, Gravataí/RS.";

    return (
        <>
            {product ? (
                <>
                    <Seo
                        title={`${product.name} | Sofa Decor House`}
                        description={seoDescription}
                        canonicalPath={productPath}
                        ogImage={product.mainImage}
                        ogType="product"
                    />
                    <ProductPageJsonLd product={product} productPath={productPath} />
                </>
            ) : (
                <Seo
                    title="Produto | Sofa Decor House"
                    description="Detalhes do produto na Sofa Decor House, Gravataí/RS."
                    canonicalPath={productPath}
                    ogType="product"
                />
            )}

            <HeaderComponent />
            <Box className="app-page-container">
                {!productName ? (
                    <AlertInfo>
                        Endereço do produto inválido. Acesse a loja e escolha um item.
                    </AlertInfo>
                ) : error && !loading ? (
                    <AlertError>Não foi possível carregar o produto. Tente novamente mais tarde.</AlertError>
                ) : !loading && data && !data.products?.length ? (
                    <AlertInfo>Não encontramos este produto. Volte à loja e tente outro item.</AlertInfo>
                ) : product ? (
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
                                            key={img.url}
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
                                            Compre com segurança
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
                                            Em até 12x s/ juros
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
                ) : loading || !data ? (
                    <PageLoader />
                ) : null}
            </Box>

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
                        <Typography variant="overline">Fechar</Typography>
                    </ShowwingImageCloseIcon>
                </ImageShowingContainer>
            )}
        </>
    );
}
