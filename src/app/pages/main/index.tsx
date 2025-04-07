import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import Image from "../../../assets/decoracao.jpg";
import ImageMaps from "../../../assets/location-maps.png";
import Carousel from "../../components/carousel/CarouselComponent";
import HeaderComponent from "../../components/header/HeaderComponent";
import { LocationMapContent, PageContent, PagePadding } from "../about/AboutPageStyles";
import {
    Categories,
    SectionImage,
    SectionImageBox,
    SectionImageBoxColored,
    TopContainer,
    TopImage,
    TopImageBox,
    TopImageBoxText,
} from "./styles";

export default function MainPageComponent() {
    return (
        <>
            <HeaderComponent />

            <TopContainer>
                <TopImage image={Image} />

                <TopImageBoxText>
                    <Typography variant="caption" color="#fff" fontSize={60} fontWeight={600}>
                        SEU CONFORTO,
                        <br />
                        NOSSO COMPROMISSO!
                    </Typography>
                </TopImageBoxText>

                <TopImageBox />

                <Categories>
                    <Typography
                        variant="body1"
                        color="primary"
                        fontStyle="oblique"
                        fontWeight={800}
                    >
                        Cadeiras - Mesas - Poltronas - Sofas - Muito Mais
                    </Typography>
                </Categories>
            </TopContainer>

            <PageContent>
                <PagePadding>
                    <Carousel />
                </PagePadding>

                <PagePadding>
                    <Typography variant="h5" color="primary" fontWeight={500} marginTop={10}>
                        Quem somos
                    </Typography>
                    <Divider />
                    <Stack direction="row" gap={6} paddingInlineEnd={4} marginTop={3}>
                        <Typography variant="body2" fontSize={20}>
                            <br />
                            Desde o nosso início em 2015, temos nos dedicado a proporcionar uma
                            experiência de compra excepcional, baseada em valores como proximidade,
                            personalização e compromisso com a excelência. Nosso objetivo é oferecer
                            não apenas móveis, mas sim soluções que tornem os ambientes mais
                            acolhedores e inspiradores.
                            <br />
                            <br />
                            Com uma equipe dedicada e apaixonada pelo que faz, estamos sempre em
                            busca das últimas tendências e inovações em design de interiores,
                            garantindo que nossos clientes tenham acesso aos produtos mais
                            atualizados e de alta qualidade.
                        </Typography>
                        <SectionImageBox>
                            <SectionImageBoxColored />
                            <SectionImage image={Image} />
                        </SectionImageBox>
                    </Stack>
                </PagePadding>

                <PagePadding>
                    <Stack direction="row" gap={10} marginTop={3}>
                        <SectionImageBox>
                            <SectionImageBoxColored />
                            <SectionImage image={Image} />
                        </SectionImageBox>

                        <Typography variant="body2" fontSize={20}>
                            <br />
                            Desde o nosso início em 2015, temos nos dedicado a proporcionar uma
                            experiência de compra excepcional, baseada em valores como proximidade,
                            personalização e compromisso com a excelência. Nosso objetivo é oferecer
                            não apenas móveis, mas sim soluções que tornem os ambientes mais
                            acolhedores e inspiradores.
                            <br />
                            <br />
                            Com uma equipe dedicada e apaixonada pelo que faz, estamos sempre em
                            busca das últimas tendências e inovações em design de interiores,
                            garantindo que nossos clientes tenham acesso aos produtos mais
                            atualizados e de alta qualidade.
                        </Typography>
                    </Stack>
                </PagePadding>

                <PagePadding>
                    <Typography variant="h5" color="primary" fontWeight={500} marginTop={10}>
                        Entre em contato e faca seu orcamento!
                    </Typography>
                    <Divider />
                    <Stack
                        direction="row"
                        gap={6}
                        paddingInlineEnd={4}
                        marginTop={3}
                        justifyContent={"center"}
                    >
                        <Stack gap={2}>
                            <TextField label="Nome" placeholder="Fulano da Silva" />
                            <TextField label="Email" placeholder="meuemail@gmail.com" />
                            <Button variant="outlined">Chame nossa equipe</Button>
                        </Stack>
                    </Stack>
                </PagePadding>

                <LocationMapContent>
                    <div
                        style={{
                            width: "100%",
                            height: "300px",
                            backgroundImage: `url(${ImageMaps})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "contain",
                        }}
                    />
                    <a
                        href="https://www.google.com.br/maps/place/Av.+Dorival+C%C3%A2ndido+Luz+de+Oliveira,+977+-+Jansen,+Gravata%C3%AD+-+RS,+94035-080/@-29.9374306,-51.0065452,17z/data=!3m1!4b1!4m6!3m5!1s0x95190b4f3aaa2911:0xc923d5db199f41a0!8m2!3d-29.9374353!4d-51.0039703!16s%2Fg%2F11hbgpxjdy?entry=ttu"
                        target="_blank"
                        style={{
                            color: "#fff",
                            margin: "10px",
                        }}
                    >
                        Acesse o Google Maps aqui
                    </a>
                </LocationMapContent>
            </PageContent>
        </>
    );
}
