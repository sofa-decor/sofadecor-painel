import styled from "styled-components";
import appColors from "../../colors/appColors";

type ItemParams = {
    imageUrl: string;
};

export const ContainerSkeleton = styled.div`
    width: 100%;
    height: 300px;
    background-color: ${appColors.red};
`;

export const ContainerSlider = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    background-color: ${appColors.red};
    color: #ffffff;
`;

export const ItemImage = styled.div<ItemParams>`
    width: 40%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
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
