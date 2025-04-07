import { Paper, Stack } from "@mui/material";
import styled from "styled-components";

export const HeaderContainer = styled(Paper)`
    width: 100%;
    padding: 0px 30px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 !important;
    background-color: #000 !important;
    /* position: absolute; */
    top: 0;
    left: 0;

    @media screen and (max-width: 700px) {
        padding: none !important;
        justify-content: center !important;
        gap: 5px !important;
    }
`;

export const LogoBox = styled(Stack)`
    @media screen and (max-width: 700px) {
        display: none !important;
    }
`;
