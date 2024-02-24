import { Paper, Button } from "@mui/material";
import styled from "styled-components";
import appColors from "../../colors/appColors";

export const ProductsList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2.65%;
    flex-flow: wrap;
`;

export const FilterCounter = styled.div`
    width: 18px;
    height: 18px;
    background-color: ${appColors.dark};
    border-radius: 50%;
    font-size: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    top: -4px;
    right: -4px;
`;

export const FilterButton = styled(Paper)`
    width: fit-content;
    height: fit-content;
    display: flex;
    border-radius: 50% !important;
    position: relative !important;
    /* place-items: center !important; */
    background-color: ${appColors.red} !important;
    color: ${appColors.white} !important;
    padding: 7px !important;
    cursor: pointer;
`;

export const ButtonTab = styled(Button)`
    border: none !important;
    color: ${appColors.dark} !important;
`;

export const ActiveButtonTab = styled(Button)`
    border: none !important;
`;
