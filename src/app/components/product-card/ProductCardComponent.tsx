import { SendRounded } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Product } from "../../../hooks/product-hooks/getManyProductsHook";
import useAppRouterHook from "../../../hooks/useAppRouterHook";
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
            <Image imgURL={product.images[0].url}></Image>
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

export function ProductCardComponentOP2({ product }: params) {
    const { router } = useAppRouterHook();
    const click = () => router.product_view.go(product.name);

    return (
        <Container elevation={2} onClick={click}>
            <Image imgURL={product.images[0].url}></Image>
            <Typography variant="h1" fontWeight={700} fontSize={20} margin={1}>
                {product.name}
            </Typography>
            <Button sx={{ marginBottom: "10px" }} variant="contained">
                Comprar
            </Button>
        </Container>
    );
}

export function ProductCardComponentOP3({ product }: params) {
    const { router } = useAppRouterHook();
    const click = () => router.product_view.go(product.name);

    return (
        <Container elevation={2} onClick={click} sx={{ alignItems: "center" }}>
            <Image imgURL={product.images[0].url}></Image>
            <Stack sx={{ textAlign: "left" }}>
                <Typography variant="h1" fontWeight={700} fontSize={20} margin={1}>
                    {product.name}
                </Typography>
                <Typography variant="body2" sx={{ padding: "0 10px" }}>
                    ITem muito valioso com materiais extremamente resistentes e com durabilidade
                    garantida, acabamento premium.
                </Typography>
            </Stack>
            <Button endIcon={<SendRounded />} sx={{ margin: "10px 0" }} variant="contained">
                Comprar
            </Button>
        </Container>
    );
}

export function ProductCardComponentOP4({ product }: params) {
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
            <Image imgURL={product.images[0].url}></Image>
            <Typography variant="h1" fontWeight={700} fontSize={20} margin={1}>
                {product.name}
            </Typography>
            <Typography variant="body2" sx={{ padding: "0 10px", marginBottom: "5px" }}>
                ITem muito valioso com materiais extremamente resistentes e com durabilidade
                garantida, acabamento premium.
            </Typography>
            <Button
                endIcon={<SendRounded />}
                variant="contained"
                sx={{
                    position: "absolute",
                    top: "55%",
                    right: "10px",
                    display: cardHover ? "flex" : "none",
                }}
            >
                Comprar
            </Button>
        </Container>
    );
}
