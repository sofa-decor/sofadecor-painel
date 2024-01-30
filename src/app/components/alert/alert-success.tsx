import { Alert } from "@mui/material";
import { FC } from "react";
import { AlertParams } from "./interfaces";

export const AlertSuccess: FC<AlertParams> = ({ children }) => (
    <Alert severity="success" variant="filled">
        {children}
    </Alert>
);
