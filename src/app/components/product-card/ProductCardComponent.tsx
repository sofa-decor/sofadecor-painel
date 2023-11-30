import { SendRounded } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import useAppRouterHook from "../../../hooks/useAppRouterHook";
import { Product } from "../../../models/product";
import { Container, Image } from "./ProductCardStyles";

type params = {
    product: Product;
};

export default function ProductCardComponent({ product }: params) {
    const { router } = useAppRouterHook();
    const click = () => router.product_view.go(product.name);

    return (
        <Container onClick={click}>
            <Image imgURL={product.images[0]} />
            <Typography variant="h1" fontWeight={700} fontSize={20} margin={1}>
                {product.name}
            </Typography>
            <Button
                endIcon={
                    product.name.startsWith("P") ? <SendRounded /> : undefined
                }
                size="small"
                variant="contained"
            >
                Comprar
            </Button>
        </Container>
    );
}
