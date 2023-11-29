import { Box } from "@mui/material";
import "../../../css/App.css";
import { products } from "../../../data/Products";
import Carousel from "../../components/carousel/CarouselComponent";

export default function AboutPageComponent() {
    const items = products.slice(0, 5);

    return (
        <>
            <Carousel items={items} />
            <Box className="app-page-container"></Box>
        </>
    );
}
