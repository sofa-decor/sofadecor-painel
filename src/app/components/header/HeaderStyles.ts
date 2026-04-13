import { Stack } from "@mui/material";
import styled from "styled-components";

/** Barra completa com blur (full-bleed). */
export const HeaderBar = styled.div`
    width: 100%;
    max-width: 100%;
    padding: 12px 0 10px;
    display: block;
    border-radius: 0 !important;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1000;
    box-sizing: border-box;
`;

/** Conteúdo alinhado ao restante do site (~1100px). */
export const HeaderInner = styled.div`
    max-width: min(1100px, 100%);
    margin-left: auto;
    margin-right: auto;
    padding: 0 clamp(16px, 4vw, 32px);
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 700px) {
        justify-content: center !important;
        gap: 8px;
        padding-left: 12px;
        padding-right: 12px;
    }
`;

export const LogoBox = styled(Stack)`
    @media screen and (max-width: 700px) {
        width: 80px;
    }
`;

export const TextButtonBox = styled(Stack)`
    @media screen and (max-width: 700px) {
        display: none !important;
    }
`;
