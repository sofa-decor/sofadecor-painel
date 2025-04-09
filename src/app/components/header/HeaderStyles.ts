import { Stack } from "@mui/material";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 10px 30px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 !important;
    background-color: transparent !important;
    /* position: absolute; */
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1000;

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
