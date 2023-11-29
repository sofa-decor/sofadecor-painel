import styled from "styled-components";

type ItemParams = {
    imageUrl: string;
};

export const ItemSlider = styled.div<ItemParams>`
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    background-image: ${props => `url(${props.imageUrl})`};
`;

export const ItemContent = styled.div`
    max-width: 100%;
    color: #ffffff;
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    position: absolute;
    bottom: 10px;
    left: 0px;
    right: 0px;
`;
