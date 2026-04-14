import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import { ReactNode, useState } from "react";
import BedroomImage from "../../../assets/bedroom.png";
import LivingroomImage from "../../../assets/livingroom.jpg";
import ImageMaps from "../../../assets/location-maps.png";
import LogoGottams from "../../../assets/logo-gottems.png";
import LogoJMarcon from "../../../assets/logo-jmarcon.png";
import LogoRivatti from "../../../assets/logo-rivatti.png";
import WallpaperImage from "../../../assets/wallpaper.png";
import OrderService from "../../../services/OrderService";
import HomeOrganizationJsonLd from "../../../seo/HomeOrganizationJsonLd";
import Seo from "../../../seo/Seo";
import appColors from "../../colors/appColors";
import Carousel from "../../components/carousel/CarouselComponent";
import HeaderComponent from "../../components/header/HeaderComponent";
import { PageContent, PagePadding } from "../about/AboutPageStyles";
import {
    LogoImage,
    SectionAccentLine,
    SectionImage,
    SectionImageBox,
    Wallpaper,
    WallpaperAccentBar,
    WallpaperCategoriesContainer,
    WallpaperImageContainer,
    WallpaperOverlay,
    WallpaperSubtitle,
    WallpaperTextsContainer,
    WallpaperTitle,
} from "./styles";

const proseBody = {
    color: "text.secondary",
    lineHeight: 1.8,
    maxWidth: { md: "58ch" },
    fontSize: { xs: "0.9375rem", md: "1.02rem" },
};

function LandingSectionTitle({ children, eyebrow }: { children: ReactNode; eyebrow?: string }) {
    return (
        <Box sx={{ textAlign: "left", maxWidth: "min(1100px, 100%)" }}>
            {eyebrow && (
                <Typography
                    variant="overline"
                    sx={{
                        display: "block",
                        color: "primary.main",
                        letterSpacing: "0.22em",
                        fontWeight: 600,
                        mb: 0.75,
                        fontSize: "0.7rem",
                    }}
                >
                    {eyebrow}
                </Typography>
            )}
            <Typography
                component="h2"
                variant="h5"
                sx={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "text.primary",
                    fontSize: { xs: "1.35rem", sm: "1.55rem", md: "1.85rem" },
                    lineHeight: 1.2,
                }}
            >
                {children}
            </Typography>
            <SectionAccentLine aria-hidden />
        </Box>
    );
}

export default function MainPageComponent() {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    return (
        <>
            <Seo
                title="Sofa Decor House | Móveis e decoração em Gravataí"
                description="Design que transforma espaços. Móveis de alto padrão, sofás, mesas e atendimento personalizado em Gravataí/RS. Marcas Gottems, Rivatti e JMarcon."
                canonicalPath="/"
            />
            <HomeOrganizationJsonLd />
            <HeaderComponent />

            <PageContent>
                <Wallpaper>
                    <WallpaperImageContainer image={WallpaperImage} />
                    <WallpaperOverlay />

                    <WallpaperTextsContainer>
                        <Typography
                            variant="overline"
                            sx={{
                                display: "block",
                                color: "rgba(255,255,255,0.72)",
                                letterSpacing: "0.28em",
                                mb: 1.5,
                                fontSize: "0.68rem",
                                fontWeight: 600,
                            }}
                        >
                            Gravataí · Rio Grande do Sul
                        </Typography>
                        <WallpaperAccentBar />
                        <WallpaperTitle>Design que transforma espaços</WallpaperTitle>
                        <WallpaperSubtitle>elegância que transforma vidas</WallpaperSubtitle>
                    </WallpaperTextsContainer>

                    <WallpaperCategoriesContainer>
                        Cadeiras · Mesas · Poltronas · Sofás · e muito mais
                    </WallpaperCategoriesContainer>
                </Wallpaper>

                <Box sx={{ bgcolor: appColors.background, py: { xs: 0.5, md: 1 } }}>
                    <PagePadding>
                        <LandingSectionTitle eyebrow="Sobre nós">Quem somos</LandingSectionTitle>
                        <Stack
                            direction={{ xs: "column", md: "row" }}
                            gap={{ xs: 4, md: 8 }}
                            sx={{ mt: 4 }}
                            justifyContent="space-between"
                            alignItems={{ xs: "flex-start", md: "center" }}
                        >
                            <Typography
                                variant="body2"
                                sx={{ ...proseBody, minWidth: 0, flex: { md: "1 1 0%" } }}
                            >
                                Desde o nosso início em 2015, temos nos dedicado a proporcionar uma
                                experiência de compra excepcional, baseada em valores como
                                proximidade, personalização e compromisso com a excelência. Nosso
                                objetivo é oferecer não apenas móveis, mas sim soluções que tornem
                                os ambientes mais acolhedores e inspiradores.
                                <br />
                                <br />
                                Trabalhamos com marcas renomadas no mercado nacional, como JMarcon e
                                Gottems, reconhecidas pela qualidade e inovação em mobiliário de
                                alto padrão.
                            </Typography>
                            <SectionImageBox>
                                <SectionImage image={BedroomImage} />
                            </SectionImageBox>
                        </Stack>
                    </PagePadding>
                </Box>

                <Box
                    sx={{
                        background:
                            "linear-gradient(180deg, rgba(248,249,251,1) 0%, rgba(241,243,247,1) 100%)",
                        py: { xs: 0.5, md: 1 },
                    }}
                >
                    <PagePadding>
                        <Stack
                            direction={{ xs: "column-reverse", md: "row" }}
                            gap={{ xs: 4, md: 8 }}
                            justifyContent="space-between"
                            alignItems={{ xs: "flex-start", md: "center" }}
                        >
                            <SectionImageBox>
                                <SectionImage image={LivingroomImage} />
                            </SectionImageBox>

                            <Typography
                                variant="body2"
                                sx={{ ...proseBody, minWidth: 0, flex: { md: "1 1 0%" } }}
                            >
                                Aqui, cada detalhe é pensado para valorizar seu ambiente e
                                proporcionar uma experiência de compra única, com atendimento
                                personalizado e um portfólio que une bom gosto e funcionalidade.
                                <br />
                                <br />
                                Na Sofá Decor House, você não encontra apenas móveis — encontra o
                                toque final que transforma sua casa em um verdadeiro lar.
                            </Typography>
                        </Stack>
                    </PagePadding>
                </Box>

                <Box sx={{ bgcolor: appColors.background, py: { xs: 1, md: 2 } }}>
                    <PagePadding>
                        <LandingSectionTitle eyebrow="Contato">Vamos conversar</LandingSectionTitle>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            textAlign="left"
                            sx={{ mt: 2.5, mb: 0, maxWidth: "48ch", lineHeight: 1.65 }}
                        >
                            Conte-nos seu nome e e-mail; abriremos o WhatsApp com uma mensagem
                            pronta para nossa equipe.
                        </Typography>
                        <Box
                            sx={{
                                maxWidth: 440,
                                mx: "auto",
                                mt: 4,
                                borderRadius: "16px",
                                p: "3px",
                                background: `linear-gradient(135deg, ${appColors.red} 0%, rgba(228,1,8,0.45) 40%, ${appColors.green} 100%)`,
                            }}
                        >
                            <Box
                                sx={{
                                    bgcolor: "#ffffff",
                                    borderRadius: "14px",
                                    px: { xs: 2, sm: 3 },
                                    py: { xs: 3, sm: 3.5 },
                                }}
                            >
                                <Stack gap={2.5}>
                                    <TextField
                                        fullWidth
                                        label="Nome"
                                        placeholder="Seu nome"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        variant="outlined"
                                    />
                                    <TextField
                                        fullWidth
                                        label="E-mail"
                                        placeholder="seuemail@exemplo.com"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        type="email"
                                        variant="outlined"
                                    />
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={OrderService.getSenderWppLink(name, email)}
                                        sx={{
                                            py: 1.4,
                                            fontWeight: 600,
                                            textTransform: "none",
                                            fontSize: "1rem",
                                            borderRadius: 2,
                                            boxShadow: "0 8px 24px rgba(33, 188, 59, 0.35)",
                                        }}
                                    >
                                        Falar com a equipe no WhatsApp
                                        <ArrowOutwardIcon sx={{ ml: 0.75, fontSize: 20 }} />
                                    </Button>
                                </Stack>
                            </Box>
                        </Box>

                        <Typography
                            variant="overline"
                            display="block"
                            textAlign="center"
                            color="text.secondary"
                            sx={{
                                mt: 5,
                                mb: 2,
                                letterSpacing: "0.2em",
                                fontWeight: 600,
                                width: "100%",
                            }}
                        >
                            Marcas parceiras
                        </Typography>
                        <Stack
                            direction="row"
                            flexWrap="wrap"
                            gap={{ xs: 4, md: 6 }}
                            alignItems="center"
                            justifyContent="center"
                            sx={{ py: 1, width: "100%" }}
                        >
                            <LogoImage image={LogoGottams} />
                            <LogoImage image={LogoRivatti} />
                            <LogoImage image={LogoJMarcon} />
                        </Stack>
                    </PagePadding>
                </Box>

                <Box
                    sx={{
                        py: { xs: 2, md: 3 },
                        background:
                            "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(243,246,249,1) 100%)",
                    }}
                >
                    <PagePadding>
                        <LandingSectionTitle eyebrow="Portfólio">Ambientes e inspiração</LandingSectionTitle>
                        <Box sx={{ mt: { xs: 3, md: 5 }, maxWidth: "min(1100px, 100%)", mx: "auto" }}>
                            <Carousel />
                        </Box>
                    </PagePadding>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        px: { xs: "clamp(16px, 5vw, 24px)", md: "clamp(16px, 5vw, 64px)" },
                        py: { xs: 15, md: 20 },
                        background: `linear-gradient(165deg, #141414 0%, ${appColors.dark} 45%, #0d0d0d 100%)`,
                        color: appColors.background,
                        position: "relative",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: { xs: 1, md: 1.25 },
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "1px",
                            background:
                                "linear-gradient(90deg, transparent, rgba(228,1,8,0.5), transparent)",
                        },
                    }}
                >
                    <Typography
                        component="h2"
                        variant="h5"
                        fontWeight={700}
                        marginTop={0}
                        width="100%"
                        textAlign="center"
                        fontFamily='"Quicksand", sans-serif'
                        letterSpacing="-0.03em"
                        fontSize={{ xs: "1.35rem", sm: "1.55rem", md: "1.85rem" }}
                    >
                        Visite a loja
                    </Typography>
                    <Typography
                        variant="body2"
                        textAlign="center"
                        sx={{
                            mt: 1,
                            mb: 0,
                            opacity: 0.85,
                            maxWidth: "42ch",
                            mx: "auto",
                            lineHeight: 1.7,
                            width: "100%",
                        }}
                    >
                        Gostou? Vamos tomar um café no centro de Gravataí/RS.
                    </Typography>

                    <Box
                        component="img"
                        src={ImageMaps}
                        alt="Mapa da localização da Sofá Decor House em Gravataí"
                        sx={{
                            width: "100%",
                            maxWidth: "min(1100px, 100%)",
                            height: "auto",
                            display: "block",
                            mt: { xs: 1.5, md: 2 },
                            mb: { xs: 1, md: 1.25 },
                            flexShrink: 0,
                            borderRadius: 3,
                            border: "1px solid rgba(255,255,255,0.08)",
                            boxShadow: "0 24px 48px rgba(0,0,0,0.35)",
                        }}
                    />
                    <Box textAlign="center" pb={{ xs: 0.5, md: 1 }} width="100%">
                        <Link
                            href="https://www.google.com.br/maps/place/Av.+Dorival+C%C3%A2ndido+Luz+de+Oliveira,+977+-+Jansen,+Gravata%C3%AD+-+RS,+94035-080/@-29.9374306,-51.0065452,17z/data=!3m1!4b1!4m6!3m5!1s0x95190b4f3aaa2911:0xc923d5db199f41a0!8m2!3d-29.9374353!4d-51.0039703!16s%2Fg%2F11hbgpxjdy?entry=ttu"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="none"
                            sx={{
                                color: appColors.background,
                                fontFamily: '"Quicksand", sans-serif',
                                fontWeight: 600,
                                px: 2.5,
                                py: 1,
                                borderRadius: 2,
                                border: "1px solid rgba(255,255,255,0.25)",
                                display: "inline-block",
                                transition: "background 0.2s, border-color 0.2s",
                                "&:hover": {
                                    bgcolor: "rgba(255,255,255,0.08)",
                                    borderColor: "rgba(228,1,8,0.6)",
                                },
                            }}
                        >
                            Abrir no Google Maps
                        </Link>
                    </Box>
                </Box>
            </PageContent>
        </>
    );
}
