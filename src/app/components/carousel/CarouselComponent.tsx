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
import appColors from "../../colors/appColors";
import { ContainerSlider, ItemImage, ItemInfosContent } from "./CarouselStyles";

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
        <CarouselMUI
            animation="slide"
            autoPlay
            indicators={false}
            duration={2000}
            interval={5000}
            stopAutoPlayOnHover
            swipe
        >
            {images.map((item: string, index: number) => (
                <ContainerSlider key={index}>
                    <ItemImage imageUrl={item} />
                    <ItemInfosContent>
                        <Typography
                            component="p"
                            sx={{
                                fontFamily: '"Lora", "Times New Roman", serif',
                                fontWeight: 600,
                                fontSize: { xs: "1.2rem", sm: "1.45rem", md: "1.65rem" },
                                lineHeight: 1.35,
                                letterSpacing: "-0.02em",
                                color: "text.primary",
                                maxWidth: "22ch",
                                mx: { xs: "auto", md: 0 },
                            }}
                        >
                            O design certo muda tudo.
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "text.secondary",
                                lineHeight: 1.65,
                                maxWidth: "36ch",
                                fontSize: { xs: "0.8125rem", md: "0.875rem" },
                                display: { xs: "none", sm: "block" },
                                mx: { xs: "auto", md: 0 },
                            }}
                        >
                            Ambientes pensados para o seu dia a dia — fale com um consultor e encontre
                            a peça ideal.
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="medium"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={OrderService.getSenderWppLink()}
                            endIcon={<ArrowOutwardIcon sx={{ fontSize: 18 }} />}
                            sx={{
                                mt: { xs: 0.5, md: 0 },
                                px: 2.5,
                                py: 1.1,
                                borderRadius: 0,
                                textTransform: "none",
                                fontWeight: 600,
                                letterSpacing: "0.06em",
                                fontSize: "0.8125rem",
                                borderWidth: 1.5,
                                alignSelf: { xs: "center", md: "flex-start" },
                                transition: "background-color 0.2s, color 0.2s, border-color 0.2s",
                                "&:hover": {
                                    borderWidth: 1.5,
                                    bgcolor: appColors.red,
                                    color: "#fff",
                                    borderColor: appColors.red,
                                },
                            }}
                        >
                            Explorar projetos
                        </Button>
                    </ItemInfosContent>
                </ContainerSlider>
            ))}
        </CarouselMUI>
    );
}
