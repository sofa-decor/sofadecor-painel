import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, Typography } from "@mui/material";
import CarouselMUI from "react-material-ui-carousel";
import { Product, useGetManyProductsHook } from "../../../hooks/product-hooks/getManyProductsHook";
import appColors from "../../colors/appColors";
import { ContainerSkeleton, ContainerSlider, ItemImage, ItemInfosContent } from "./CarouselStyles";

export default function Carousel() {
    const { data, loading } = useGetManyProductsHook();
    return (
        <>
            {loading && <ContainerSkeleton />}
            <CarouselMUI animation="slide" autoPlay indicators={false}>
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
                            <ContainerSlider key={item.id}>
                                <ItemImage imageUrl={url} />
                                <ItemInfosContent>
                                    <Typography variant="h1" fontWeight={900} fontSize={24}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" fontSize={16}>
                                        {getDescription()}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        endIcon={<ArrowForwardIosIcon fontSize="small" />}
                                        sx={{
                                            backgroundColor: "#ffffff",
                                            color: appColors.red,
                                        }}
                                    >
                                        Conhecer
                                    </Button>
                                </ItemInfosContent>
                            </ContainerSlider>
                        );
                    })}
            </CarouselMUI>
        </>
    );
}
