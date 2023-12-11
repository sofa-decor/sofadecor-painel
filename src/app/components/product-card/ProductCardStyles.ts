import { Paper } from "@mui/material";
import styled from "styled-components";

export type ImageParams = {
    imgURL?: string;
};

export const Container = styled(Paper)`
    width: 23%;
    height: fit-content;
    background-color: #ffffff !important;
    margin-bottom: 15px;
    text-align: center;
    align-items: center;
    position: relative;
    &:hover {
        opacity: 0.85;
    }
`;

export const Image = styled.div<ImageParams>`
    height: 20dvw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url(${props.imgURL})`};
`;
