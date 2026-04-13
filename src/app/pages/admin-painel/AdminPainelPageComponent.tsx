import { Box } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import useAuthUserHook from "../../../hooks/auth-hooks/useAuthUserHook";
import AdminHeaderComponent from "../../components/admin-header/AdminHeaderComponent";
import AdminLoginPageComponent from "./children/admin-login/AdminLoginPageComponent";

export default function AdminPainelPageComponent(): React.ReactElement {
    const { user } = useAuthUserHook();

    return (
        <>
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <AdminHeaderComponent />
            <Box className="app-page-container">
                {user ? <Outlet /> : <AdminLoginPageComponent />}
            </Box>
        </>
    );
}
