import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Typography } from "@mui/material";
import BedRoom from "../../../assets/bed.png";
import Kitchen from "../../../assets/kitchen.png";
import LivingRoom from "../../../assets/living.png";
import ImageMaps from "../../../assets/location-maps.png";
import HomeOffice from "../../../assets/office.png";
import "../../../css/App.css";
import useAppRouterHook from "../../../hooks/useAppRouterHook";
import { ProductCategories } from "../../../types/product-categories.type";
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
        { image: Kitchen, name: ProductCategories.kitchen },
        { image: BedRoom, name: ProductCategories.bedroom },
        { image: LivingRoom, name: ProductCategories.livingroom },
        { image: HomeOffice, name: ProductCategories.office },
    ];
    return (
        <>
            <HeaderComponent />
            <PageContent>
                <Carousel />
                <PagePadding>
                    <Typography variant="h4" color="primary" fontWeight={500}>
                        Quem somos
                    </Typography>
                    <Typography variant="body2" fontSize={16}>
                        Nossa empresa surgiu para atender um mercado cada vez maior de pessoas e
                        empresas que demandam conteúdo textual de qualidade para alcançarem seus
                        objetivos e se diferenciarem no mercado moderno cada vez mais competitivo.
                        Nossa equipe operacional é formada por editores, revisores, escritores,
                        ghost writers e copywriters, pós-graduados, mestres e doutores, com formação
                        em humanas, exatas e biológicas e amplo e profundo conhecimento teórico e
                        prático em suas áreas de atuação. A expertise de nossos consultores garante
                        a produção de conteúdo textual de qualidade, em linha com as mais modernas
                        técnicas, filosofias e metodologias, em todas áreas do conhecimento,
                        trazendo para os textos a vanguarda existente no mundo acadêmico e
                        corporativo, no Brasil e no exterior. Seja uma monografia, um trabalho de
                        conclusão de curso, uma dissertação, uma tese, um artigo científico, uma
                        apresentação, uma palestra ou uma aula. Seja um manual, uma campanha, uma
                        comunicação interna, com seus colaboradores, ou externa, com o mercado ou
                        seus acionistas. Não importa onde você esteja, no Brasil ou no exterior. Não
                        importa se precisa de uma tradução em português ou para outro idioma.
                        Dedique-se ao que é realmente importante para você ou seu negócio. Deixe que
                        cuidamos do resto. Importante Não vendemos trabalhos acadêmicos prontos. Mas
                        te ajudamos do começo ao fim. Somos uma empresa de conteúdo que pode
                        auxiliá-lo em todas as suas necessidades e entregar um trabalho superior.
                    </Typography>
                </PagePadding>
                <ButtomsCategoriesContainer>
                    <Typography variant="h4" fontWeight={500} width="100%">
                        Qual ambiente deseja redecorar ?!
                    </Typography>
                    {categories.map(tag => (
                        <ButtomCategoriesCard
                            elevation={8}
                            onClick={() => router.products.go({ category: tag.name })}
                        >
                            <img height={"90dvw"} src={tag.image} alt="logo" />
                            <Typography fontWeight={500} variant="h5">
                                {tag.name}
                                <ArrowOutwardIcon fontSize="small" />
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
                </LocationMapContent>
            </PageContent>
        </>
    );
}
