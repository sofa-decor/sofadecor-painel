import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import AboutPageComponent from "../app/pages/about/AboutPageComponent";
import AdminCreateProductsPageComponent from "../app/pages/admin-painel/children/admin-add-products/AdminCreateProductsPageComnponent";
import AdminCreateUsersPageComponent from "../app/pages/admin-painel/children/admin-add-users/AdminCreateUsersPageComnponent";
import AdminLoginPageComponent from "../app/pages/admin-painel/children/admin-login/AdminLoginPageComponent";
import AdminProductsPageComponent from "../app/pages/admin-painel/children/admin-products/AdminProductsPageComponent";
import AdminUsersPageComponent from "../app/pages/admin-painel/children/admin-users/AdminUsersPageComponent";
import ProductViewPageComponent from "../app/pages/product_view/ProductViewPageComponent";
import ProductsPageComponent from "../app/pages/products/ProductsPagesComponent";
import { ProductCategories } from "../types/product-categories.type";

interface RouterContextParams {
    children: React.ReactNode;
}

interface RouterContextData {
    router: {
        about: {
            path: string;
            component: () => JSX.Element;
            go: VoidFunction;
        };
        products: {
            path: string;
            component: () => JSX.Element;
            go: (data: ProductStates) => void;
        };
        product_view: {
            path: string;
            component: () => JSX.Element;
            go: (name: string) => void;
        };
        admin_painel_products: {
            path: string;
            component: () => JSX.Element;
            go: () => void;
        };
        admin_painel_login: {
            path: string;
            component: () => JSX.Element;
            go: () => void;
        };
        admin_painel_users: {
            path: string;
            component: () => JSX.Element;
            go: () => void;
        };
        admin_painel_users_add: {
            path: string;
            component: () => JSX.Element;
            go: () => void;
        };
        admin_painel_products_add: {
            path: string;
            component: () => JSX.Element;
            go: () => void;
        };
    };
}

type ProductStates = {
    category: ProductCategories;
};

const RouterContext = createContext<RouterContextData>({} as RouterContextData);

const RouterContextProvider = ({ children }: RouterContextParams) => {
    const navigate = useNavigate();

    const router = {
        about: {
            path: "/sobre",
            component: AboutPageComponent,
            go: () => navigate("/sobre", {}),
        },
        products: {
            path: "/produtos",
            component: ProductsPageComponent,
            go: (states?: ProductStates) => navigate("/produtos", { state: states }),
        },
        product_view: {
            path: "/produtos/:product",
            component: ProductViewPageComponent,
            go: (name: string) => {
                const formatted = name.replace(" ", "-");
                navigate(`/produtos/${formatted}`);
            },
        },
        admin_painel_products: {
            path: "/painel/produtos",
            component: AdminProductsPageComponent,
            go: () => navigate("/painel/produtos"),
        },
        admin_painel_login: {
            path: "/painel/login",
            component: AdminLoginPageComponent,
            go: () => navigate("/painel/login"),
        },
        admin_painel_users: {
            path: "/painel/users",
            component: AdminUsersPageComponent,
            go: () => navigate("/painel/usuarios"),
        },
        admin_painel_users_add: {
            path: "/painel/usuarios/add",
            component: AdminCreateUsersPageComponent,
            go: () => navigate("/painel/usuarios/add"),
        },
        admin_painel_products_add: {
            path: "/painel/produtos/add",
            component: AdminCreateProductsPageComponent,
            go: () => navigate("/painel/produtos/add"),
        },
    };

    return <RouterContext.Provider value={{ router }}>{children}</RouterContext.Provider>;
};

export { RouterContextProvider };
export default RouterContext;
