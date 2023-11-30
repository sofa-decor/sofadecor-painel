import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import AboutPageComponent from "../app/pages/about/AboutPageComponent";
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
    };

    return (
        <RouterContext.Provider value={{ router }}>
            {children}
        </RouterContext.Provider>
    );
};

export { RouterContextProvider };
export default RouterContext;
