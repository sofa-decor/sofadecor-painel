import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material";
import Image from "../../../assets/decoracao.jpg";
import ImageMaps from "../../../assets/location-maps.png";
import LogoGottams from "../../../assets/logo-gottems.png";
import LogoJMarcon from "../../../assets/logo-jmarcon.png";
import TeamImage from "../../../assets/team.png";
import WallpaperImage from "../../../assets/wallpaper.png";
import appColors from "../../colors/appColors";
import Carousel from "../../components/carousel/CarouselComponent";
import HeaderComponent from "../../components/header/HeaderComponent";
import { LocationMapContent, PageContent, PagePadding } from "../about/AboutPageStyles";
import {
    LogoImage,
    SectionImage,
    SectionImageBox,
    SectionImageBoxColored,
    Wallpaper,
    WallpaperCategoriesContainer,
    WallpaperImageBackground,
    WallpaperImageContainer,
    WallpaperSubtitle,
    WallpaperTextsContainer,
    WallpaperTitle,
} from "./styles";

export default function MainPageComponent() {
    return (
        <>
            <HeaderComponent />

            <PageContent>
                <Wallpaper>
                    <WallpaperImageContainer image={WallpaperImage} />

                    <WallpaperTextsContainer>
                        <WallpaperTitle>Design que transforma espaços</WallpaperTitle>
                        <WallpaperSubtitle>elegância que transforma vidas</WallpaperSubtitle>
                    </WallpaperTextsContainer>

                    <WallpaperImageBackground />

                    <WallpaperCategoriesContainer>
                        <Typography
                            variant="body1"
                            color={appColors.background}
                            fontStyle="oblique"
                            fontWeight={700}
                            letterSpacing={1}
                        >
                            Cadeiras - Mesas - Poltronas - Sofas - Muito Mais
                        </Typography>
                    </WallpaperCategoriesContainer>
                </Wallpaper>

                <PagePadding>
                    <Typography
                        variant="h5"
                        color="primary"
                        fontWeight={500}
                        marginTop={10}
                        fontSize={{
                            xs: "1.2rem", // mobile
                            sm: "1.4rem", // tablet
                            md: "1.8rem", // desktop
                            lg: "2rem", // large screens
                        }}
                    >
                        Quem somos
                    </Typography>
                    <Divider />
                    <Stack
                        direction="row"
                        gap={10}
                        marginTop={3}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Typography
                            variant="body2"
                            fontSize={{
                                xs: "0.8rem", // mobile
                                sm: "1rem", // tablet
                                md: "1.2rem", // desktop
                                lg: "1.2rem", // large screens
                            }}
                            letterSpacing={0.5}
                        >
                            Desde o nosso início em 2015, temos nos dedicado a proporcionar uma
                            experiência de compra excepcional, baseada em valores como proximidade,
                            personalização e compromisso com a excelência. Nosso objetivo é oferecer
                            não apenas móveis, mas sim soluções que tornem os ambientes mais
                            acolhedores e inspiradores.
                            <br />
                            <br />
                            Trabalhamos com marcas renomadas no mercado nacional, como JMarcon,
                            Gottems, reconhecidas pela qualidade e inovação em mobiliário de alto
                            padrão.
                        </Typography>
                        <SectionImageBox>
                            <SectionImageBoxColored color={appColors.dark} />
                            <SectionImage image={Image} />
                        </SectionImageBox>
                    </Stack>
                </PagePadding>

                <PagePadding>
                    <Stack
                        direction="row"
                        gap={8}
                        marginTop={3}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <SectionImageBox>
                            <SectionImageBoxColored />
                            <SectionImage image={TeamImage} />
                        </SectionImageBox>

                        <Typography
                            variant="body2"
                            fontSize={{
                                xs: "0.8rem", // mobile
                                sm: "1rem", // tablet
                                md: "1.2rem", // desktop
                                lg: "1.2rem", // large screens
                            }}
                            letterSpacing={0.5}
                            alignItems={"center"}
                        >
                            <br />
                            Aqui, cada detalhe é pensado para valorizar seu ambiente e proporcionar
                            uma experiência de compra única, com atendimento personalizado e um
                            portfólio que une bom gosto e funcionalidade.
                            <br />
                            <br />
                            Na Sofá Decor House, você não encontra apenas móveis — encontra o toque
                            final que transforma sua casa em um verdadeiro lar.
                        </Typography>
                    </Stack>
                </PagePadding>

                <PagePadding
                // style={{ backgroundColor: appColors.dark, color: appColors.background }}
                >
                    <Typography
                        variant="h5"
                        fontWeight={500}
                        marginTop={10}
                        textAlign={"center"}
                        fontSize={{
                            xs: "1.2rem", // mobile
                            sm: "1.4rem", // tablet
                            md: "1.8rem", // desktop
                            lg: "2rem", // large screens
                        }}
                    >
                        Entre em contato e descubra como transformar seu espaço com a gente!
                    </Typography>
                    <Divider
                    // style={{ backgroundColor: appColors.background }}
                    />
                    <Stack
                        direction="row"
                        gap={12}
                        paddingInlineEnd={4}
                        marginTop={3}
                        justifyContent={"center"}
                        alignItems={"center"}
                        padding={10}
                    >
                        <Stack gap={2}>
                            <LogoImage image={LogoGottams} />
                            <LogoImage image={LogoJMarcon} />
                        </Stack>

                        <Stack gap={15}>
                            <Stack gap={2}>
                                <TextField label="Nome" placeholder="Fulano da Silva" />
                                <TextField label="Email" placeholder="meuemail@gmail.com" />
                            </Stack>
                            <Button variant="outlined">Chame nossa equipe</Button>
                        </Stack>
                    </Stack>
                </PagePadding>

                <PagePadding>
                    <Carousel />
                </PagePadding>

                <LocationMapContent
                    style={{ backgroundColor: appColors.dark, color: appColors.background }}
                >
                    <Typography
                        variant="h5"
                        fontWeight={500}
                        marginTop={8}
                        textAlign={"center"}
                        fontSize={{
                            xs: "1.2rem", // mobile
                            sm: "1.4rem", // tablet
                            md: "1.8rem", // desktop
                            lg: "2rem", // large screens
                        }}
                    >
                        Gotou? Vamos tomar um cafe!
                        <br />
                        Onde? No centro de Gravataí/RS
                    </Typography>
                    {/* <Divider style={{ backgroundColor: appColors.background }} /> */}

                    <Box
                        style={{
                            width: "100%",
                            height: "400px",
                            scale: 1 / 0.5,
                            backgroundImage: `url(${ImageMaps})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "contain",
                            margin: "60px 0",
                        }}
                    />
                    <a
                        href="https://www.google.com.br/maps/place/Av.+Dorival+C%C3%A2ndido+Luz+de+Oliveira,+977+-+Jansen,+Gravata%C3%AD+-+RS,+94035-080/@-29.9374306,-51.0065452,17z/data=!3m1!4b1!4m6!3m5!1s0x95190b4f3aaa2911:0xc923d5db199f41a0!8m2!3d-29.9374353!4d-51.0039703!16s%2Fg%2F11hbgpxjdy?entry=ttu"
                        target="_blank"
                        style={{
                            color: "#fff",
                            margin: "10px",
                            textAlign: "center",
                            fontFamily: "Quicksand, sans-serif",
                        }}
                    >
                        Acesse o Google Maps aqui
                    </a>
                </LocationMapContent>
            </PageContent>
        </>
    );
}
