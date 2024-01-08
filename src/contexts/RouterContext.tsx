import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import AboutPageComponent from "../app/pages/about/AboutPageComponent";
import AdminPainelPageComponent from "../app/pages/admin-painel/AdminPainelPageComponent";
import AdminLoginPageComponent from "../app/pages/admin-painel/children/admin-login/AdminLoginPageComponent";
import ProductViewPageComponent from "../app/pages/product_view/ProductViewPageComponent";
import ProductsPageComponent from "../app/pages/products/ProductsPagesComponent";

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
            go: VoidFunction;
        };
        product_view: {
            path: string;
            component: () => JSX.Element;
            go: (name: string) => void;
        };
        admin_painel: {
            path: string;
            component: () => JSX.Element;
            go: () => void;
        };
        admin_painel_login: {
            path: string;
            component: () => JSX.Element;
            go: () => void;
        };
        // admin_painel_users: {
        //     path: string;
        //     component: () => JSX.Element;
        //     go: () => void;
        // };
        // admin_painel_users_add: {
        //     path: string;
        //     component: () => JSX.Element;
        //     go: () => void;
        // };
        // admin_painel_products: {
        //     path: string;
        //     component: () => JSX.Element;
        //     go: () => void;
        // };
        // admin_painel_products_add: {
        //     path: string;
        //     component: () => JSX.Element;
        //     go: () => void;
        // };
    };
}

const RouterContext = createContext<RouterContextData>({} as RouterContextData);

const RouterContextProvider = ({ children }: RouterContextParams) => {
    const navigate = useNavigate();

    const router = {
        about: {
            path: "/sobre",
            component: AboutPageComponent,
            go: () => navigate("/sobre"),
        },
        products: {
            path: "/produtos",
            component: ProductsPageComponent,
            go: () => navigate("/produtos"),
        },
        product_view: {
            path: "/produtos/:product",
            component: ProductViewPageComponent,
            go: (name: string) => {
                const formatted = name.replace(" ", "-").toLocaleLowerCase();
                navigate(`/produtos/${formatted}`);
            },
        },
        admin_painel: {
            path: "/admin-painel",
            component: AdminPainelPageComponent,
            go: () => navigate("/admin-painel"),
        },
        admin_painel_login: {
            path: "/admin-painel/login",
            component: AdminLoginPageComponent,
            go: () => navigate("/admin-painel/login"),
        },
        // admin_painel_users: {
        //     path: "/admin-painel/users",
        //     component: <></>,
        //     go: () => navigate("/admin-painel/users"),
        // },
        // admin_painel_users_add: {
        //     path: "/admin-painel/users/add",
        //     component: <></>,
        //     go: () => navigate("/admin-painel/users/add"),
        // },
        // admin_painel_products: {
        //     path: "/admin-painel/products",
        //     component: <></>,
        //     go: () => navigate("/admin-painel/products"),
        // },
        // admin_painel_products_add: {
        //     path: "/admin-painel/products/add",
        //     component: <></>,
        //     go: () => navigate("/admin-painel/products/add"),
        // },
    };

    return <RouterContext.Provider value={{ router }}>{children}</RouterContext.Provider>;
};

export { RouterContextProvider };
export default RouterContext;
