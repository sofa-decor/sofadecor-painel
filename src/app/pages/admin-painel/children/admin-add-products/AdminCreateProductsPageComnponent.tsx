import { Button, LinearProgress, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { convertBase64 } from "../../../../../helpers";
import { useGetManyCategoriesHook } from "../../../../../hooks/categories-hooks/getManyCategoriesHook";
import { usePostProductHook } from "../../../../../hooks/product-hooks/postProductHook";
import { NewProductRequest, ProductImage } from "../../../../../types/new-product-request.type";
import { AlertError, AlertSuccess } from "../../../../components/alert";

type NewProductSubmited = {
    name: string;
    description: string;
    tags: Array<string>;
    rooms: Array<string>;
    images: Array<File>;
    image: Array<File>;
};

const successAlert = <AlertSuccess>Produto salvo com sucesso</AlertSuccess>;
const errorAlert = <AlertError>Erro ao tentar salvar o produto, tente novamente</AlertError>;

export default function AdminCreateProductsPageComponent() {
    const { post, error, loading, data } = usePostProductHook();
    const { data: categories } = useGetManyCategoriesHook();
    const { register, handleSubmit, reset } = useForm();
    const [alert, setAlert] = useState<null | ReactElement>(null);
    const [tags, setTags] = useState<Array<string>>([]);

    useEffect(() => {
        if (data) {
            reset();
            setTags([]);
            setAlert(successAlert);
        }
    }, [data, reset]);

    useEffect(() => {
        if (error) setAlert(errorAlert);
    }, [error]);

    const onSubmitForm = async (data: NewProductSubmited) => {
        const arrayImagesCovertedInBase64: Array<ProductImage> = [];
        const mainImage = { url: await convertBase64(data.image[0]), main: true };
        arrayImagesCovertedInBase64.push(mainImage);
        for (const image of data.images) {
            arrayImagesCovertedInBase64.push({ url: await convertBase64(image), main: false });
        }
        const sendData: NewProductRequest = {
            name: data.name,
            description: data.description,
            tags: data.tags,
            rooms: data.rooms,
            images: arrayImagesCovertedInBase64,
        };
        await post(sendData);
    };

    const onChangeRoom = (values: Array<string>) => {
        const newTags: Array<string> = [];
        if (!categories) return;
        for (const item of values) {
            const find = categories.find(category => category.name == item);
            if (find) newTags.push(...find.tags);
        }
        setTags(newTags);
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
                    id="rooms"
                    fullWidth
                    label="Ambientes"
                    defaultValue={[]}
                    required
                    SelectProps={{
                        multiple: true,
                    }}
                    {...register("rooms")}
                    onChange={e => onChangeRoom(e.target.value as unknown as string[])}
                >
                    {categories ? (
                        categories.map(({ name }, index) => (
                            <MenuItem key={index} value={name}>
                                {name}
                            </MenuItem>
                        ))
                    ) : (
                        <MenuItem value="selecione">Selecione</MenuItem>
                    )}
                </TextField>
                <TextField
                    select
                    id="tags"
                    fullWidth
                    label="Categorias"
                    defaultValue={[]}
                    required
                    SelectProps={{
                        multiple: true,
                    }}
                    {...register("tags")}
                >
                    {tags.map((name, index) => (
                        <MenuItem key={index} value={name}>
                            {name}
                        </MenuItem>
                    ))}
                </TextField>
                <Typography color="primary" variant="body2">
                    Imagem de Capa *
                </Typography>
                <TextField id="image" fullWidth type="file" required {...register("image")} />
                <Typography color="primary" variant="body2">
                    Outras imagens *
                </Typography>
                <TextField
                    id="images"
                    fullWidth
                    type="file"
                    inputProps={{
                        multiple: true,
                    }}
                    required
                    {...register("images")}
                />
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
