import DeleteIcon from "@mui/icons-material/Delete";
import GradeIcon from "@mui/icons-material/Grade";
import { Button, LinearProgress, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { ReactElement, SyntheticEvent, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { convertBase64 } from "../../../../../helpers";
import {
    Image,
    Product,
    useGetManyProductsHook,
} from "../../../../../hooks/product-hooks/getManyProductsHook";
import { useUpdateProductHook } from "../../../../../hooks/product-hooks/updateProductHook";
import useAppRouterHook from "../../../../../hooks/useAppRouterHook";
import { ProductTags } from "../../../../../types/product-tags.type";
import { AlertError, AlertSuccess } from "../../../../components/alert";
import { ImageIcon, ImageIconsContainer, ImageView, ImagesContainer } from "./styles";

type UpdateProductSubmited = {
    id: string | null;
    name: string;
    description: string;
    tags: Array<string>;
    rooms: Array<string>;
    images: Array<File>;
    image: Array<File>;
};

const successAlert = <AlertSuccess>Produto salvo com sucesso</AlertSuccess>;
const errorAlert = <AlertError>Erro ao tentar salvar o produto, tente novamente</AlertError>;

export default function AdminUpdateProductsPageComponent() {
    const location = useLocation();
    const productName = location.state.name;
    const { post, error, loading, data } = useUpdateProductHook();
    const { data: products, fetch } = useGetManyProductsHook(false);
    const { router } = useAppRouterHook();
    const { register, handleSubmit, setValue } = useForm();
    const [alert, setAlert] = useState<null | ReactElement>(null);
    const [product, setProduct] = useState<Product | null>(null);
    const [imagesObject, setImagesObject] = useState<Image[] | null>(null);

    useEffect(() => {
        // console.log(productName);
        if (!productName) return;
        fetch({ name: productName });
    }, [productName]);

    useEffect(() => {
        if (!products?.products[0]) return;
        const p: Product = products.products[0];
        setProduct(p);
        setImagesObject(p.images);
        setValue("name", p.name);
        setValue("description", p.description);
    }, [products?.products]);

    useEffect(() => {
        if (data) {
            setAlert(successAlert);
            router.admin_painel_products.go();
        }
    }, [data]);

    useEffect(() => {
        if (error) setAlert(errorAlert);
    }, [error]);

    const onSubmitForm = async (data: UpdateProductSubmited) => {
        if (!product || !imagesObject) return;
        const sendData = {
            id: product?.id,
            name: data.name,
            description: data.description,
            tags: data.tags || product.tags,
            rooms: data.rooms || product.rooms,
            images: imagesObject,
        };
        await post(sendData);
    };

    const setChangeImages = async (e: SyntheticEvent, main: boolean) => {
        if (!imagesObject) return;
        let list = [...imagesObject];
        const input = e.target as HTMLInputElement;
        if (!input.files) return;
        const file = input.files[0] as File;
        if (main) {
            list = imagesObject.map(img => ({ url: img.url, main: false }));
        }
        list.push({ url: await convertBase64(file), main: main });
        setImagesObject(list);
    };

    const removeImageObject = (img: Image) => {
        if (!imagesObject) return;
        const list = [...imagesObject];
        list.splice(list.indexOf(img), 1);
        setImagesObject(list);
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm as SubmitHandler<FieldValues>)}>
            <Stack direction="column" gap="10px">
                <Typography color="primary" variant="h6">
                    Adicione um novo item
                </Typography>
                <TextField
                    id="name"
                    fullWidth
                    aria-busy={true}
                    label="Nome do produto"
                    defaultValue="Carregando ..."
                    placeholder="Ex: Poltrona Amarela"
                    required
                    {...register("name")}
                />
                <TextField
                    id="description"
                    defaultValue="Carregando ..."
                    fullWidth
                    multiline
                    minRows={2}
                    maxRows={4}
                    label="Descrição do produto"
                    placeholder="Uma breve descrião ..."
                    required
                    {...register("description")}
                />
                <TextField
                    select
                    id="tags"
                    fullWidth
                    label="Tags"
                    required
                    defaultValue={[]}
                    SelectProps={{
                        multiple: true,
                    }}
                    {...register("tags")}
                >
                    {Object.values(ProductTags).map(name => (
                        <MenuItem key={name} value={name}>
                            {name}
                        </MenuItem>
                    ))}
                </TextField>
                <Typography color="primary" variant="body2">
                    Imagem de capa *
                </Typography>
                <TextField
                    id="image"
                    fullWidth
                    type="file"
                    onChange={e => setChangeImages(e, true)}
                />
                <Typography color="primary" variant="body2">
                    Outras imagens
                </Typography>
                <TextField
                    id="images"
                    fullWidth
                    type="file"
                    inputProps={{
                        multiple: true,
                    }}
                    onChange={e => setChangeImages(e, false)}
                />
                {imagesObject && (
                    <>
                        <Typography color="primary" variant="body2" marginTop={3}>
                            Imagens do produto
                        </Typography>
                        <ImagesContainer>
                            {imagesObject.map((img, i) => (
                                <ImageView url={img.url} key={i} main={!!img.main}>
                                    <ImageIconsContainer>
                                        {img.main && (
                                            <ImageIcon>
                                                <GradeIcon
                                                    sx={{ color: "#fff", fontSize: "16px" }}
                                                />
                                            </ImageIcon>
                                        )}
                                        <ImageIcon>
                                            <DeleteIcon
                                                sx={{
                                                    color: "#fff",
                                                    fontSize: "16px",
                                                    cursor: "pointer",
                                                }}
                                                onClick={() => removeImageObject(img)}
                                            />
                                        </ImageIcon>
                                    </ImageIconsContainer>
                                </ImageView>
                            ))}
                        </ImagesContainer>
                    </>
                )}
                {alert != null && alert}
                {loading ? (
                    <LinearProgress color="primary" />
                ) : (
                    <Button type="submit" variant="contained">
                        Salvar
                    </Button>
                )}
            </Stack>
        </form>
    );
}
