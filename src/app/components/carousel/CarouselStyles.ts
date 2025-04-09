import { Typography } from "@mui/material";
import styled from "styled-components";
import { Screen } from "../../../data";
import appColors from "../../colors/appColors";

type ItemParams = {
    imageUrl: string;
};

export const ContainerSkeleton = styled.div`
    width: 100%;
    height: 300px;
    background-color: ${appColors.background};
`;

export const ContainerSlider = styled.div`
    max-width: 100dvw;
    height: 400px;
    display: flex;
    flex-direction: row;
    place-items: center !important;
    gap: 10px;
    background-color: ${appColors.background};
    padding: 10px;

    @media screen and (max-width: ${Screen.MAX_WIDTH_SMALL_DEVICE}) {
        align-items: center;
        gap: 10px;
        flex-direction: column;
    }
`;

export const ItemImage = styled.div<ItemParams>`
    width: 40%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};

    @media screen and (max-width: ${Screen.MAX_WIDTH_SMALL_DEVICE}) {
        width: 80%;
        height: 300px;
    }
`;

export const ItemInfosContent = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    word-wrap: break-word;
    align-items: center;
    text-align: start;
    gap: 14px;
`;

export const ItemInfoMobileHide = styled(Typography)`
    @media screen and (max-width: ${Screen.MAX_WIDTH_SMALL_DEVICE}) {
        display: none !important;
    }
`;
