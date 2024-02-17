import { Box } from "@mui/material";
import styled from "styled-components";

export const DesktopVisible = styled(Box)`
    @media screen and (max-width: 700px) {
        display: none !important;
    }
`;
