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
import Seo from "../../../seo/Seo";
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
            <Seo
                title="Quem somos | Sofa Decor House"
                description="Conheça a Sofa Decor House: móveis, sofás e decoração em Gravataí. Atendimento próximo, marcas selecionadas e ambientes que inspiram."
                canonicalPath="/sobre"
            />
            <HeaderComponent />
            <PageContent>
                <Carousel />
                <PagePadding>
                    <Typography variant="h5" color="primary" fontWeight={500}>
                        Quem somos
                    </Typography>
                    <Typography variant="body2" fontSize={15}>
                        <br />
                        Desde o nosso início em 2015, temos nos dedicado a proporcionar uma
                        experiência de compra excepcional, baseada em valores como proximidade,
                        personalização e compromisso com a excelência. Nosso objetivo é oferecer não
                        apenas móveis, mas sim soluções que tornem os ambientes mais acolhedores e
                        inspiradores.
                        <br />
                        <br />
                        Com uma equipe dedicada e apaixonada pelo que faz, estamos sempre em busca
                        das últimas tendências e inovações em design de interiores, garantindo que
                        nossos clientes tenham acesso aos produtos mais atualizados e de alta
                        qualidade.
                        <br />
                        <br />
                        Além disso, valorizamos a transparência e a honestidade em todas as nossas
                        interações, desde o primeiro contato até a entrega final. Sabemos que a
                        confiança dos nossos clientes é fundamental, e é por isso que trabalhamos
                        incansavelmente para conquistá-la e mantê-la a cada dia.
                        <br />
                        <br />
                        Seja para uma simples atualização na decoração ou para a criação de um
                        ambiente totalmente novo, na Sofá Decor House você encontrará não apenas
                        móveis, mas sim um parceiro comprometido em tornar suas ideias realidade.
                        Venha nos visitar e descubra como podemos transformar a sua casa em um
                        verdadeiro lar.
                    </Typography>
                </PagePadding>
                <ButtomsCategoriesContainer>
                    <Typography variant="h5" fontWeight={500} width="100%" textAlign="center">
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
