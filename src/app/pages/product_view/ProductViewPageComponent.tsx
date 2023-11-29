import { Box, Button, Stack, Typography } from "@mui/material";
import { ProductDetails, ProductImage } from "./ProductViewStyles";

export default function ProductViewPageComponent() {
    return (
        <Box className="app-page-container">
            <Stack direction="row" gap={0.5}>
                <Typography fontWeight={500} variant="caption">
                    Categorias:{" "}
                </Typography>
                <Typography
                    fontWeight={500}
                    fontStyle={"italic"}
                    variant="caption"
                >
                    poltronas
                </Typography>
            </Stack>
            <Stack direction="row" gap={5}>
                <ProductImage />
                <ProductDetails>
                    <Box>
                        <Typography
                            fontSize={18}
                            variant="overline"
                            color="primary"
                        >
                            POLTRONAS | Poltrona Tangara
                        </Typography>
                        <Typography variant="body1">
                            A poltrona tangara tem revestimento em
                            couro-veludo com os pes e pegador para
                            maos em madeira de carvalho.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">
                            Compre com seguranca
                        </Typography>
                        <Typography variant="subtitle1">
                            Qualidade garantida
                        </Typography>
                        <Typography variant="subtitle1">
                            Em ate 12X s/ juros
                        </Typography>
                        <br />
                        <Button variant="contained" color="primary">
                            Comprar
                        </Button>
                        <br />
                        <Typography variant="caption">
                            Finalize seu pedido no WhatsApp
                        </Typography>
                    </Box>
                </ProductDetails>
            </Stack>
        </Box>
    );
}
