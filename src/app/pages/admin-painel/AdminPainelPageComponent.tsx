import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export default function AdminPainelPageComponent(): React.ReactElement {
    return (
        <Box className="app-page-container" justifyContent="center">
            <Outlet />
        </Box>
    );
}
