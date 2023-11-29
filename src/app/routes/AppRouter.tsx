import { useNavigate } from "react-router-dom";
import AboutPageComponent from "../pages/about/AboutPageComponent";
import ProductViewPageComponent from "../pages/product_view/ProductViewPageComponent";
import ProductsPageComponent from "../pages/products/ProductsPagesComponent";

export default function AppRouter() {
  const navigate = useNavigate();

  return {
    products: {
      path: "/products",
      component: ProductsPageComponent,
      redirect: () => navigate("/products"),
    },

    product_view: {
      path: "/products/:id",
      component: ProductViewPageComponent,
      redirect: (productId: string) => navigate(`/products/${productId}`),
    },

    about: {
      path: "/about",
      component: AboutPageComponent,
      redirect: () => navigate(`/about`),
    },
  };
}
