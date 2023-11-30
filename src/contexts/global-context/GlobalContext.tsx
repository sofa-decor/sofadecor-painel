import React from "react";
import { RouterContextProvider } from "../RouterContext";

interface IGlobalContextProps {
    children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: IGlobalContextProps) => {
    return <RouterContextProvider>{children}</RouterContextProvider>;
};

export default GlobalContextProvider;
