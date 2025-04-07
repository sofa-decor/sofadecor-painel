import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Button } from "@mui/material";
import { useState } from "react";
import CarouselMUI from "react-material-ui-carousel";
import Image2 from "../../../assets/chair-w.png";
import Image from "../../../assets/decoracao.jpg";
import appColors from "../../colors/appColors";
import { ContainerSlider, ItemImage, ItemInfoMobileHide, ItemInfosContent } from "./CarouselStyles";

export default function Carousel() {
    const [images] = useState([Image, Image2]);

    return (
        <>
            <CarouselMUI
                animation="slide"
                autoPlay
                indicators={false}
                duration={3000}
                IndicatorIcon
                interval={6000}
            >
                {images.length &&
                    images.map((item: string, index: number) => {
                        return (
                            <ContainerSlider key={index}>
                                <ItemImage imageUrl={item} />
                                <ItemInfosContent>
                                    <ItemInfoMobileHide
                                        variant="h1"
                                        fontWeight={500}
                                        fontSize={24}
                                        color={appColors.red}
                                    >
                                        Item Name
                                    </ItemInfoMobileHide>
                                    <ItemInfoMobileHide variant="body2" fontSize={16}>
                                        "Description"
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
