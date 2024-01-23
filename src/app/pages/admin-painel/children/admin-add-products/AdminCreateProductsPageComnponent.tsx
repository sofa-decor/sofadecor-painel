import {
    Alert,
    Button,
    LinearProgress,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { categories } from "../../../../../data/categories.data";
import { usePostProductHook } from "../../../../../hooks/product-hooks/postProductHook";
import { fileCovertBase64 } from "./helpers/file.helper";

type NewProductSubmited = {
    name: string;
    description: string;
    tags: Array<string>;
    images: Array<File>;
};

const successAlert = <Alert severity="success">Produto salvo com sucesso</Alert>;
const errorAlert = <Alert severity="error">Erro ao tentar salvar o produto, tente novamente</Alert>;

export default function AdminCreateProductsPageComponent() {
    const { post, error, loading, data } = usePostProductHook();
    const { register, handleSubmit, reset } = useForm();
    const [alert, setAlert] = useState<null | ReactElement>(null);

    useEffect(() => {
        if (data) {
            reset();
            setAlert(successAlert);
        }
    }, [data, reset]);

    useEffect(() => {
        if (error) setAlert(errorAlert);
    }, [error]);

    const onSubmitForm = async (data: NewProductSubmited) => {
        console.log(data);

        const arrayImagesCovertedInBase64: Array<string> = [];
        for (const image of data.images) {
            arrayImagesCovertedInBase64.push(await fileCovertBase64(image));
        }
        post({ ...data, images: arrayImagesCovertedInBase64 });
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm as SubmitHandler<FieldValues>)}>
            <Stack direction="column" gap="10px" padding={10}>
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
                    {categories.map(({ name }, index) => (
                        <MenuItem key={index} value={name}>
                            {name}
                        </MenuItem>
                    ))}
                </TextField>
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
