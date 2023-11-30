import styled from "styled-components";

type ProductImageParams = {
    url: string;
};

export const ProductImage = styled.div<ProductImageParams>`
    flex: 1;
    height: 80dvh;
    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const ProductDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
