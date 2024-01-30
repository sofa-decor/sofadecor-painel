import { Alert } from "@mui/material";
import { FC } from "react";
import { AlertParams } from "./interfaces";

export const AlertWarning: FC<AlertParams> = ({ children }) => (
    <Alert severity="warning" variant="filled">
        {children}
    </Alert>
);
