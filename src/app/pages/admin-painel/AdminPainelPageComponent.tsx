import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useAuthUserHook from "../../../hooks/auth-hooks/useAuthUserHook";
import useAppRouterHook from "../../../hooks/useAppRouterHook";
import AdminHeaderComponent from "../../components/admin-header/AdminHeaderComponent";
import AdminLoginPageComponent from "./children/admin-login/AdminLoginPageComponent";

export default function AdminPainelPageComponent(): React.ReactElement {
    const { user } = useAuthUserHook();
    const { router } = useAppRouterHook();

    useEffect(() => {
        console.log(user);
        if (!user) return;
        router.admin_painel_products.go();
    }, [user]);

    return (
        <>
            <AdminHeaderComponent />
            <Box className="app-page-container">
                {user ? <Outlet /> : <AdminLoginPageComponent />}
            </Box>
        </>
    );
}
