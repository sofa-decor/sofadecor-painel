import DeleteIcon from "@mui/icons-material/Delete";
import GradeIcon from "@mui/icons-material/Grade";
import { Button, LinearProgress, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { convertBase64 } from "../../../../../helpers";
import { Image } from "../../../../../hooks/product-hooks/getManyProductsHook";
import { usePostProductHook } from "../../../../../hooks/product-hooks/postProductHook";
import { NewProductRequest } from "../../../../../types/new-product-request.type";
import { ProductTags } from "../../../../../types/product-tags.type";
import { AlertError, AlertSuccess } from "../../../../components/alert";
import {
    ImageIcon,
    ImageIconsContainer,
    ImageView,
    ImagesContainer,
} from "../admin-update-products/styles";

type NewProductSubmited = {
    name: string;
    description: string;
    tags: Array<string>;
    rooms: Array<string>;
    images: Array<File>;
    mainImage: string;
    image: Array<Image>;
};

const successAlert = <AlertSuccess>Produto salvo com sucesso</AlertSuccess>;
const errorAlert = (message: string) => <AlertError>{message}</AlertError>;

export default function AdminCreateProductsPageComponent() {
    const { post, error, loading, data } = usePostProductHook();
    const { register, handleSubmit, reset } = useForm();
    const [alert, setAlert] = useState<null | ReactElement>(null);
    const [imagesObject, setImagesObject] = useState<Image[]>([]);
    const [tagsValue, setTagsValue] = useState<Array<string>>([]);

    useEffect(() => {
        if (data) {
            reset();
            setAlert(successAlert);
        }
    }, [data, reset]);

    useEffect(() => {
        if (error) setAlert(errorAlert(error.message));
    }, [error]);

    const onSubmitForm = async (data: NewProductSubmited) => {
        formValuesIsValid();
        const sendData: NewProductRequest = {
            name: data.name,
            description: data.description,
            tags: tagsValue,
            rooms: data.rooms,
            mainImage: (imagesObject.find(img => img.main === true) as Image).url,
            images: imagesObject,
        };
        await post(sendData);
    };

    const formValuesIsValid = (): boolean => {
        const mainImage = imagesObject.find(img => img.main === true);
        if (mainImage) return true;
        else {
            setAlert(errorAlert("Selecione uma imagem como principal"));
            return false;
        }
    };

    const setNewImages = (e: ChangeEvent<HTMLInputElement>) => {
        handleChangeImages(e);
    };
    const handleChangeImages = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (!imagesObject) return;
        const list = [...imagesObject];
        const input = e.target as HTMLInputElement;
        if (!input.files) return;
        const file = input.files[0] as File;
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
                    Adicionar um novo produto
                </Typography>
                <TextField
                    id="name"
                    fullWidth
                    label="Nome do produto"
                    placeholder="Ex: Poltrona Amarela"
                    required
                    {...register("name")}
                />
                <TextField
                    id="description"
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
                    label="Categorias"
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
                    Upload de imagens *
                </Typography>
                <TextField id="image" fullWidth type="file" required onChange={setNewImages} />
                {imagesObject && (
                    <>
                        <Typography color="primary" variant="body2" marginTop={3}>
                            Imagens
                        </Typography>
                        <Typography variant="body2">
                            OBS: Foto de capa contem uma estrela, para mudar clique em outra
                        </Typography>
                        {imagesObject?.length > 0 ? (
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
                        ) : (
                            <Typography variant="body2">Nenhuma imagem adicionada!</Typography>
                        )}
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
