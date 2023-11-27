import { Box, Button, Pagination, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../../css/App.css";
import "./Products.css";

export default function ProductsPageComponent() {
  return (
    <Box className='app-page-container'>
      <Box className='app-row-between'>
        <Typography variant='caption'>120 resultados</Typography>
      </Box>

      <Box className='products-container'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Box>

      <Pagination
        showFirstButton
        showLastButton
        count={10}
        variant='outlined'
        size='small'
        sx={{ alignSelf: "center" }}
      />
    </Box>
  );
}

function ProductCard() {
  const navigate = useNavigate();

  const redirect = () => navigate("/products/produto");

  return (
    <Paper onClick={redirect} className='product-card'>
      <Box className='product-card-image' />
      <Box className='product-card-content'>
        <Typography variant='h6' fontWeight='medium'>
          Poltrona Tangara
        </Typography>
      </Box>
      <Box className='app-row-center'>
        <Button
          endIcon={<></>}
          size='small'
          variant='contained'
          color='success'
        >
          Comprar
        </Button>
      </Box>
    </Paper>
  );
}
