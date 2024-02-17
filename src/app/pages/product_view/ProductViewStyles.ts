import { Box } from "@mui/material";
import styled from "styled-components";
import appColors from "../../colors/appColors";

export const ResponsivePageStack = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: start;
    min-height: 100vh;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

export const ImagesContainer = styled.div`
    flex: 0.7;
    height: 75dvh;
    overflow: hidden;
    -webkit-transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    @media screen and (max-width: 900px) {
        width: 100%;
        height: 50dvh;
        flex: none;
    }
`;

export const CurrentImage = styled(Box)`
    height: 80%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    -webkit-transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
    border: 1px solid ${appColors.red};
    &:hover {
        cursor: zoom-in;
        background-size: 200%;
    }
`;

export const ImagesOptionsList = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
    gap: 5px;
    padding: 15px;
    background-color: ${appColors.red};
    justify-content: center;
    align-items: center;
    word-wrap: break-word;
    padding: 4px;
`;

export const ImageOption = styled.div<{ url: string }>`
    height: 100%;
    width: 65px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: ${({ url }) => `url(${url})`};
    cursor: pointer;
`;

export const ImageZoomCircle = styled.div`
    width: 250px;
    height: 250px;
    border: 2px solid #000;
    border-radius: 50%;
    position: absolute;
    background-repeat: no-repeat;
    background-size: 400%;
    background-position: center;
    pointer-events: none;
`;

export const ProductDetails = styled(Box)`
    height: 75dvh;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        width: 100%;
        height: auto;
        gap: 35px;
        flex: none;
    }
`;
