import { Button, Stack, Typography } from "@mui/material";
// import { useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Image as ImageType, Product } from "../../../hooks/product-hooks/getManyProductsHook";
import useAppRouterHook from "../../../hooks/useAppRouterHook";
import { Container, Image } from "./ProductCardStyles";

type params = {
    product: Product;
};

export default function ProductCardComponent({ product }: params) {
    const { router } = useAppRouterHook();
    const click = () => router.product_view.go(product.name);
    // const [cardHover, setCardHover] = useState<boolean>(false);

    const mainImage = product.images.find(image => image.main == true) as ImageType;

    return (
        <Container
            // onMouseEnter={() => setCardHover(true)}
            // onMouseLeave={() => setCardHover(false)}
            elevation={2}
            onClick={click}
            sx={{ alignItems: "center" }}
        >
            <Image imgurl={mainImage.url}></Image>
            <Stack sx={{ textAlign: "left" }}>
                <Typography variant="h1" fontWeight={700} fontSize={20} margin={1}>
                    {product.name}
                </Typography>
                <Typography variant="body2" sx={{ padding: "0 10px", wordBreak: "break-word" }}>
                    {product.description.slice(0, 110) + " ..."}
                </Typography>
            </Stack>
            <Button
                size="small"
                variant="contained"
                sx={{
                    position: "absolute",
                    top: "11dvw",
                    right: "10px",
                }}
            >
                Comprar
                <ArrowOutwardIcon sx={{ fontSize: 16 }} />
            </Button>
        </Container>
    );
}
