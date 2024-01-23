import { Button, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { categories } from "../../../../../data/categories.data";

export default function AdminCreateProductsPageComponent() {
    const {
        register,
        handleSubmit,
        // reset,
        // formState: { errors },
    } = useForm();

    const onSubmitForm = (data: object) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
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
                <Button type="submit" variant="contained">
                    Salvar
                </Button>
            </Stack>
        </form>
    );
}
