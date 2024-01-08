import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeaderComponent from "../../components/admin-header/AdminHeaderComponent";

export default function AdminPainelPageComponent(): React.ReactElement {
    return (
        <>
            <AdminHeaderComponent />
            <Box className="app-page-container" justifyContent="center">
                <Outlet />
            </Box>
        </>
    );
}
