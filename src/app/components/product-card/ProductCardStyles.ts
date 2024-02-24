import { Button, Paper, Typography } from "@mui/material";
import styled from "styled-components";
import { Screen } from "../../../data";

export type ImageParams = {
    imgurl?: string;
};

export const Container = styled(Paper)`
    width: 23%;
    background-color: #ffffff !important;
    margin-bottom: 15px;
    justify-content: space-between !important;
    text-align: left;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 10px 5px;

    @media screen and (max-width: ${Screen.MAX_WIDTH_SMALL_DEVICE}) {
        width: 45% !important;
        font-size: 12px !important;
        text-align: center;
    }
`;

export const Image = styled.div<ImageParams>`
    height: 14dvw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url(${props.imgurl})`};

    @media screen and (max-width: ${Screen.MAX_WIDTH_SMALL_DEVICE}) {
        height: 28dvw;
    }
`;

export const TitleItemName = styled(Typography)`
    font-weight: 700 !important;
    font-size: 1.05rem !important;
    margin-top: 5px !important;
    margin-bottom: 8px !important;

    @media screen and (max-width: ${Screen.MAX_WIDTH_SMALL_DEVICE}) {
        margin-bottom: 0 !important;
    }
`;

export const DescriptionItem = styled(Typography)`
    word-break: break-word;
    font-size: 80%;

    @media screen and (max-width: ${Screen.MAX_WIDTH_SMALL_DEVICE}) {
        display: none !important;
    }
`;

export const BuyButton = styled(Button)`
    position: absolute !important;
    top: 12dvw;
    right: 10px;

    @media screen and (max-width: ${Screen.MAX_WIDTH_SMALL_DEVICE}) {
        position: static !important;
    }
`;
