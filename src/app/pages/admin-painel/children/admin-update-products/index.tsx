import DeleteIcon from "@mui/icons-material/Delete";
import GradeIcon from "@mui/icons-material/Grade";
import { Button, LinearProgress, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { convertBase64 } from "../../../../../helpers";
import {
    Image,
    Product,
    useGetManyProductsHook,
} from "../../../../../hooks/product-hooks/getManyProductsHook";
import { useUpdateProductHook } from "../../../../../hooks/product-hooks/updateProductHook";
import { ProductTags } from "../../../../../types/product-tags.type";
import { AlertError, AlertSuccess } from "../../../../components/alert";
import { ImageIcon, ImageIconsContainer, ImageView, ImagesContainer } from "./styles";

type UpdateProductSubmited = {
    id: string | null;
    name: string;
    description: string;
    tags: Array<string>;
    rooms: Array<string>;
    images: Array<Image>;
    image: Array<File>;
};

const successAlert = (message: string) => <AlertSuccess>{message}</AlertSuccess>;
const errorAlert = (message: string) => <AlertError>{message}</AlertError>;

export default function AdminUpdateProductsPageComponent() {
    const location = useLocation();
    const productName = location.state.name;
    const { post, error, loading, data } = useUpdateProductHook();
    const { data: products, fetch } = useGetManyProductsHook(false);
    // const { router } = useAppRouterHook();
    const { register, handleSubmit, setValue } = useForm();
    const [alert, setAlert] = useState<null | ReactElement>(null);
    const [product, setProduct] = useState<Product | null>(null);
    const [imagesObject, setImagesObject] = useState<Image[] | null>(null);

    // UPDATE
    const [tagsValue, setTagsValue] = useState<Array<string>>([]);

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
        setTagsValue(p.tags);
        setValue("name", p.name);
        setValue("description", p.description);
    }, [products?.products]);

    useEffect(() => {
        if (data) {
            setAlert(successAlert("Produto salvo com sucesso"));
            // router.admin_painel_products.go();
            setTimeout(() => setAlert(null), 5000);
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            switch (error.type) {
                case "bad_request_error":
                    setAlert(errorAlert(`${error.message}`));
                    break;
                case "not_found_error":
                    setAlert(errorAlert(`Produto não identificado`));
                    break;
                default:
                    console.log(error);
                    setAlert(errorAlert("Erro: "));
                    break;
            }
        }
        setTimeout(() => setAlert(null), 5000);
    }, [error]);

    const onSubmitForm = async (data: UpdateProductSubmited) => {
        if (!product || !imagesObject) return;
        const sendData = {
            _id: product._id,
            name: data.name,
            description: data.description,
            mainImage: (imagesObject.find(img => img.main === true) as Image).url,
            tags: tagsValue,
            rooms: data.rooms || product.rooms,
            images: imagesObject,
        };
        await post(sendData);
    };

    const setChangeImages = async (e: ChangeEvent) => {
        if (!imagesObject) return;
        const list = [...imagesObject];
        const input = e.target as HTMLInputElement;
        if (!input.files) return;
        const file = input.files[0] as File;
        // if (main) {
        //     list = imagesObject.map(img => ({ url: img.url, main: false }));
        // }
        list.push({ url: await convertBase64(file), main: false });
        setImagesObject(list);
    };

    const removeImageObject = (img: Image) => {
        if (!imagesObject) return;
        const list = [...imagesObject];
        list.splice(list.indexOf(img), 1);
        setImagesObject(list);
    };

    const handleClickImage = (image: Image) => {
        if (!imagesObject) return;
        const result: Image[] = [];
        for (const img of imagesObject) {
            if (img.main === true) {
                result.push({ url: img.url, main: false });
            } else if (img === image) {
                result.push({ url: img.url, main: true });
            } else {
                result.push(img);
            }
            setImagesObject(result);
        }
    };

    const handleSelectTag = (e: ChangeEvent) => {
        e.preventDefault();
        const { value } = e.target as unknown as { value: Array<string> };
        setTagsValue(value);
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm as SubmitHandler<FieldValues>)}>
            <Stack direction="column" gap="10px">
                <Typography color="primary" variant="h6">
                    Editar produto
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
                    value={tagsValue}
                    onChange={handleSelectTag}
                    size="small"
                    SelectProps={{
                        multiple: true,
                    }}
                >
                    {Object.values(ProductTags).map(name => (
                        <MenuItem key={name} value={name}>
                            {name}
                        </MenuItem>
                    ))}
                </TextField>

                <Typography color="primary" variant="body2">
                    Adicionar imagens *
                </Typography>
                <TextField
                    id="images"
                    fullWidth
                    type="file"
                    inputProps={{
                        multiple: true,
                    }}
                    onChange={setChangeImages}
                />
                {imagesObject && (
                    <>
                        <Typography color="primary" variant="body2" marginTop={3}>
                            Imagens adicionadas
                        </Typography>
                        <Typography variant="body2">
                            OBS: Foto de capa contém uma estrela, para mudar clique em outra.
                        </Typography>
                        <ImagesContainer>
                            {imagesObject.map((img, i) => (
                                <ImageView
                                    url={img.url}
                                    key={i}
                                    main={!!img.main}
                                    onClick={() => handleClickImage(img)}
                                >
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
