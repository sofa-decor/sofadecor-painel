import { Button, Typography } from "@mui/material";
import CarouselMUI from "react-material-ui-carousel";
import { Product } from "../../../models/product";
import { ItemContent, ItemSlider } from "./CarouselStyles";

type params = {
    items: Array<Product>;
};

export default function Carousel({ items }: params) {
    return (
        <CarouselMUI animation="slide" autoPlay indicators={false}>
            {items.map((item, i) => (
                <ItemSlider key={i} imageUrl={item.images[0]}>
                    <ItemContent>
                        <Typography fontSize={30} fontWeight={900}>
                            {item.name}
                        </Typography>
                        <Button variant="contained">Conhecer</Button>
                    </ItemContent>
                </ItemSlider>
            ))}
        </CarouselMUI>
    );
}
