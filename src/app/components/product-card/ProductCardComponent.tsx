import { Stack } from "@mui/material";
// import { useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Product } from "../../../hooks/product-hooks/getManyProductsHook";
import useAppRouterHook from "../../../hooks/useAppRouterHook";
import { BuyButton, Container, DescriptionItem, Image, TitleItemName } from "./ProductCardStyles";

type params = {
    product: Product;
};

export default function ProductCardComponent({ product }: params) {
    const { router } = useAppRouterHook();
    const click = () => router.product_view.go(product.name);
    // const [cardHover, setCardHover] = useState<boolean>(false);

    // const mainImage = product.images.find(image => image.main == true) as ImageType;

    return (
        <Container
            // onMouseEnter={() => setCardHover(true)}
            // onMouseLeave={() => setCardHover(false)}
            elevation={2}
            onClick={click}
            sx={{ alignItems: "center" }}
        >
            <Image imgurl={product.mainImage}></Image>
            <Stack sx={{ padding: "0 10px 15px" }}>
                <TitleItemName component="h2" variant="subtitle1">
                    {product.name}
                </TitleItemName>
                <DescriptionItem variant="body2">
                    {product.description.slice(0, 90) + " ..."}
                </DescriptionItem>
            </Stack>
            <BuyButton size="small" variant="contained">
                Comprar
                <ArrowOutwardIcon sx={{ fontSize: 16 }} />
            </BuyButton>
        </Container>
    );
}
