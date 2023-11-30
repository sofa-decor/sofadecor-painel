import { Box } from "@mui/material";
import styled from "styled-components";

export const ImagesContainer = styled.div`
    flex: 0.7;
    height: 80dvh;
    overflow: hidden;
    -webkit-transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
`;

export const CurrentImage = styled(Box)`
    width: 100%;
    height: 100%;
    cursor: zoom-in;

    background-repeat: no-repeat;
    background-size: cover;

    -webkit-transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;

    &:hover {
        background-size: 200%;
    }
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
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
