import { Paper } from "@mui/material";
import styled from "styled-components";

export type ImageParams = {
    imgurl?: string;
};

export const Container = styled(Paper)`
    width: 23%;
    height: 30dvw;
    background-color: #ffffff !important;
    margin-bottom: 15px;
    text-align: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`;

export const Image = styled.div<ImageParams>`
    height: 20dvw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url(${props.imgurl})`};
`;
