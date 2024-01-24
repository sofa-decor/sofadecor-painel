import { SendRounded } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
// import { useState } from "react";
import { Product } from "../../../hooks/product-hooks/getManyProductsHook";
import useAppRouterHook from "../../../hooks/useAppRouterHook";
import { Container, Image } from "./ProductCardStyles";

type params = {
    product: Product;
};

export default function ProductCardComponent({ product }: params) {
    const { router } = useAppRouterHook();
    const click = () => router.product_view.go(product.name);
    // const [cardHover, setCardHover] = useState<boolean>(false);

    return (
        <Container
            // onMouseEnter={() => setCardHover(true)}
            // onMouseLeave={() => setCardHover(false)}
            elevation={2}
            onClick={click}
            sx={{ alignItems: "center" }}
        >
            <Image imgURL={product.images[0].url}></Image>
            <Stack sx={{ textAlign: "left" }}>
                <Typography variant="h1" fontWeight={700} fontSize={20} margin={1}>
                    {product.name}
                </Typography>
                <Typography variant="body2" sx={{ padding: "0 10px", wordWrap: "break-word" }}>
                    {product.description}
                </Typography>
            </Stack>
            <Button
                endIcon={<SendRounded />}
                variant="contained"
                sx={{
                    position: "absolute",
                    top: "17dvw",
                    right: "10px",
                }}
            >
                Comprar
            </Button>
        </Container>
    );
}
