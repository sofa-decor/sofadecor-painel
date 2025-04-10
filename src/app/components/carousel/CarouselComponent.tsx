import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import CarouselMUI from "react-material-ui-carousel";
import AuroraRoom from "../../../assets/aurora-room.jpg";
import BanquetaJadeMesa from "../../../assets/banqueta-jade-mesa.jpg";
import BanquetaJade from "../../../assets/banqueta-jade.png";
import BiancaRoom from "../../../assets/bianca-room.jpg";
import CoraRoom from "../../../assets/cora-room.jpg";
import DrinkRoom from "../../../assets/drink-room.jpg";
import OrderService from "../../../services/OrderService";
import { ContainerSlider, ItemImage, ItemInfoMobileHide, ItemInfosContent } from "./CarouselStyles";

export default function Carousel() {
    const [images] = useState([
        BanquetaJade,
        BanquetaJadeMesa,
        AuroraRoom,
        CoraRoom,
        DrinkRoom,
        BiancaRoom,
    ]);

    return (
        <>
            <CarouselMUI
                animation="slide"
                autoPlay
                indicators={false}
                duration={2000}
                IndicatorIcon
                interval={4000}
            >
                {images.length &&
                    images.map((item: string, index: number) => {
                        return (
                            <ContainerSlider key={index}>
                                <ItemImage imageUrl={item} />
                                <ItemInfosContent>
                                    <ItemInfoMobileHide variant="body2" fontSize={16}>
                                        <Typography
                                            variant="h5"
                                            fontFamily={"Quicksand, sans-serif"}
                                            textAlign={"center"}
                                            fontSize={{
                                                xs: "1.2rem", // mobile
                                                sm: "1.4rem", // tablet
                                                md: "1.8rem", // desktop
                                                lg: "2rem", // large screens
                                            }}
                                        >
                                            O design certo muda tudo!
                                        </Typography>
                                    </ItemInfoMobileHide>

                                    <Button
                                        variant="outlined"
                                        target="_blank"
                                        href={OrderService.getSenderWppLink()}
                                    >
                                        <Typography
                                            color="primary"
                                            variant="body2"
                                            fontSize={{
                                                xs: "0.8rem", // mobile
                                                sm: "1rem", // tablet
                                                md: "1.2rem", // desktop
                                                lg: "1.2rem", // large screens
                                            }}
                                            alignItems={"center"}
                                            justifyContent={"center"}
                                            display={"flex"}
                                            gap={1}
                                        >
                                            Explore
                                            <ArrowOutwardIcon fontSize="small" />
                                        </Typography>
                                    </Button>
                                </ItemInfosContent>
                            </ContainerSlider>
                        );
                    })}
            </CarouselMUI>
        </>
    );
}
