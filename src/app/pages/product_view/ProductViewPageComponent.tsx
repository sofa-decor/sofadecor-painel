import { Box, Button, Typography } from "@mui/material";
import "../../../css/App.css";
import "./ProductView.css";
export default function ProductViewPageComponent() {
  return (
    <Box className='app-page-container'>
      <span>
        <Typography fontWeight={500} variant='caption'>
          Categorias:{" "}
        </Typography>
        <Typography fontWeight={500} fontStyle={"italic"} variant='caption'>
          poltronas
        </Typography>
      </span>
      <Box className='app-row'>
        <Box className='product-image' />
        <Box className='product-details'>
          <Box>
            <Typography fontSize={18} variant='overline'>
              POLTRONAS | Poltrona Tangara
            </Typography>
            <Typography variant='body1'>
              A poltrona tangara tem revestimento em couro-veludo com os pes e
              pegador para maos em madeira de carvalho.
            </Typography>
          </Box>
          <Box>
            <Typography variant='subtitle1'>Compre com seguranca</Typography>
            <Typography variant='subtitle1'>Qualidade garantida</Typography>
            <Typography variant='subtitle1'>Em ate 12X s/ juros</Typography>
            <Typography variant='caption'>
              Finalize seu pedido no WhatsApp
            </Typography>
            <br />
            <br />
            <Button variant='contained' color='success'>
              Comprar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
