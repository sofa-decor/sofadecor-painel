import { Button, Typography } from "@mui/material";
import { useState } from "react";
import useAppRouterHook from "../../../hooks/useAppRouterHook";
import { Product } from "../../../models/product";
import { Container, Image } from "./ProductCardStyles";

type params = {
    product: Product;
};

export default function ProductCardComponent({ product }: params) {
    const { router } = useAppRouterHook();
    const [cardHover, setCardHover] = useState<boolean>(false);
    const click = () => router.product_view.go(product.name);

    return (
        <Container
            elevation={2}
            onClick={click}
            onMouseEnter={() => setCardHover(true)}
            onMouseLeave={() => setCardHover(false)}
        >
            <Typography variant="h1" fontWeight={700} fontSize={20} margin={1}>
                {product.name}
            </Typography>
            <Image imgURL={product.images[0]}></Image>
            <Button
                // endIcon={
                //     product.name.startsWith("P") ? <SendRounded /> : undefined
                // }
                variant="contained"
                sx={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    display: cardHover ? "block" : "none",
                }}
            >
                Comprar
            </Button>
        </Container>
    );
}
