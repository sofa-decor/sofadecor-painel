import { Alert } from "@mui/material";
import { FC } from "react";
import { AlertParams } from "./interfaces";

export const AlertInfo: FC<AlertParams> = ({ children }) => (
    <Alert severity="info" variant="filled">
        {children}
    </Alert>
);
