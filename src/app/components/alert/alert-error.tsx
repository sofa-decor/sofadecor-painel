import { Alert } from "@mui/material";
import { FC } from "react";
import { AlertParams } from "./interfaces";

export const AlertError: FC<AlertParams> = ({ children }) => (
    <Alert severity="error" variant="filled">
        {children}
    </Alert>
);
