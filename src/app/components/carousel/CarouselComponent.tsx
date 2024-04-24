import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Button } from "@mui/material";
import { useEffect } from "react";
import CarouselMUI from "react-material-ui-carousel";
import { Product, useGetManyProductsHook } from "../../../hooks/product-hooks/getManyProductsHook";
import appColors from "../../colors/appColors";
import {
    ContainerSkeleton,
    ContainerSlider,
    ItemImage,
    ItemInfoMobileHide,
    ItemInfosContent,
} from "./CarouselStyles";

export default function Carousel() {
    const { data, loading, fetch } = useGetManyProductsHook(false);

    useEffect(() => {
        fetch({ tags: [], currentPage: 1, itemsAmount: 10 });
    }, []);

    return (
        <>
            {loading && <ContainerSkeleton />}
            <CarouselMUI
                animation="slide"
                autoPlay
                indicators={false}
                duration={3000}
                IndicatorIcon
                interval={6000}
            >
                {data?.products &&
                    data.products.map((item: Product) => {
                        const url = item.images.find(img => img.main === true)?.url as string;

                        const getDescription = () => {
                            let description = "";
                            if (item.description.length < 5) {
                                description = "Venha conhecer mais sobre esse produto";
                            } else {
                                description = item.description.slice(0, 200);
                            }
                            description += "...";
                            return description;
                        };

                        return (
                            <ContainerSlider key={item._id}>
                                <ItemImage imageUrl={url} />
                                <ItemInfosContent>
                                    <ItemInfoMobileHide
                                        variant="h1"
                                        fontWeight={500}
                                        fontSize={24}
                                        color={appColors.red}
                                    >
                                        {item.name}
                                    </ItemInfoMobileHide>
                                    <ItemInfoMobileHide variant="body2" fontSize={16}>
                                        {getDescription()}
                                    </ItemInfoMobileHide>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#ffffff",
                                            color: appColors.red,
                                        }}
                                    >
                                        Conhecer
                                        <ArrowOutwardIcon fontSize="small" />
                                    </Button>
                                </ItemInfosContent>
                            </ContainerSlider>
                        );
                    })}
            </CarouselMUI>
        </>
    );
}
