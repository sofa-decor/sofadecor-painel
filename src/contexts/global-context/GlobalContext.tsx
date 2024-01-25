import React from "react";
import { AuthUserContextProvider } from "../AuthUserContext";
import { RouterContextProvider } from "../RouterContext";

interface IGlobalContextProps {
    children: React.ReactNode;
}

const GlobalContextProvider = ({ children }: IGlobalContextProps) => {
    return (
        <RouterContextProvider>
            <AuthUserContextProvider>{children}</AuthUserContextProvider>
        </RouterContextProvider>
    );
};

export default GlobalContextProvider;
