import { Typography } from "@mui/material";
import Armchair from "../../../assets/armchair-w.png";
import Chair from "../../../assets/chair-w.png";
import Furniture from "../../../assets/furniture-w.png";
import ImageMaps from "../../../assets/location-maps.png";
import Sofa from "../../../assets/sofa-w.png";
import Stool from "../../../assets/stool-w.png";
import Table from "../../../assets/table-w.png";
import "../../../css/App.css";
import useAppRouterHook from "../../../hooks/useAppRouterHook";
import { ProductTags } from "../../../types/product-tags.type";
import Carousel from "../../components/carousel/CarouselComponent";
import HeaderComponent from "../../components/header/HeaderComponent";
import {
    ButtomCategoriesCard,
    ButtomsCategoriesContainer,
    LocationMapContent,
    PageContent,
    PagePadding,
} from "./AboutPageStyles";

export default function AboutPageComponent() {
    const { router } = useAppRouterHook();
    const categories = [
        { image: Sofa, name: ProductTags.sofas },
        { image: Chair, name: ProductTags.chairs },
        { image: Armchair, name: ProductTags.armchairs },
        { image: Table, name: ProductTags.tables },
        { image: Stool, name: ProductTags.stools },
        { image: Furniture, name: ProductTags.complements },
    ];
    return (
        <>
            <HeaderComponent />
            <PageContent>
                <Carousel />
                <PagePadding>
                    <Typography variant="h5" color="primary" fontWeight={500}>
                        Quem somos
                    </Typography>
                    <Typography variant="body2" fontSize={15}>
                        Sofá Decor é uma loja de móveis renomada em Gravataí, oferecendo uma vasta
                        seleção de móveis de alta qualidade para transformar qualquer casa em um
                        verdadeiro lar. Com opções que vão desde sofás elegantes a mesas de jantar
                        funcionais e beliches confortáveis, atendemos a todos os gostos e estilos de
                        decoração, garantindo que nossos clientes encontrem exatamente o que
                        precisam para seus espaços.
                        <br />
                        Nossa equipe está comprometida em proporcionar uma experiência de compra
                        excepcional, oferecendo atendimento personalizado e orientação especializada
                        para ajudar os clientes a escolherem os móveis perfeitos. Priorizamos a
                        qualidade em cada peça, garantindo durabilidade e resistência ao teste do
                        tempo.
                        <br />
                        Acreditamos que os móveis são elementos essenciais que contribuem para o
                        conforto e a estética de um ambiente. Por isso, estamos sempre em busca de
                        tendências e inovações no design de interiores, garantindo uma coleção
                        inspiradora e atualizada. Seja para pequenas atualizações ou grandes
                        reformas, a Sofá Decor é o destino ideal para encontrar móveis de alta
                        qualidade que transformam casas em lares acolhedores.
                    </Typography>
                </PagePadding>
                <ButtomsCategoriesContainer>
                    <Typography variant="h5" fontWeight={500} width="100%">
                        Qual ambiente deseja redecorar ?!
                    </Typography>
                    {categories.map(tag => (
                        <ButtomCategoriesCard
                            elevation={8}
                            onClick={() => router.products.go({ category: tag.name })}
                        >
                            <img height="50px" src={tag.image} alt="logo" />
                            <Typography fontWeight={500} fontSize={12} variant="body2">
                                {tag.name.toUpperCase()}
                            </Typography>
                        </ButtomCategoriesCard>
                    ))}
                </ButtomsCategoriesContainer>
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
                    >
                        Acesse o maps
                    </a>
                </LocationMapContent>
            </PageContent>
        </>
    );
}
