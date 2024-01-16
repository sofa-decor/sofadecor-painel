import { Stack, TextField, Typography } from "@mui/material";

export default function AdminCreateProductsPageComponent() {
    return (
        <form>
            <Stack direction="column" gap="10px" padding={10}>
                <Typography color="primary" variant="h6">
                    Adicione um novo item
                </Typography>
                <TextField
                    fullWidth
                    label="Nome do produto"
                    placeholder="Ex: Poltrona Amarela"
                    required
                />
                <TextField
                    fullWidth
                    multiline
                    rows={2}
                    maxRows={4}
                    label="Descrição do produto"
                    placeholder="Uma breve descrião ..."
                    required
                />
                <TextField
                    fullWidth
                    select
                    label="Categorias"
                    placeholder="Selecione uma(s) categoria(s)"
                    required
                />
                <TextField fullWidth type="file" required />
            </Stack>
        </form>
    );
}
