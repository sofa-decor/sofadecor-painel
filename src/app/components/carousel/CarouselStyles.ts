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

/** Bloco principal: cantos retos, borda fina, foto com crop (cover) à esquerda */
export const ContainerSlider = styled.div`
    max-width: 100%;
    width: 100%;
    min-height: 400px;
    height: clamp(380px, 52vw, 460px);
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: 0;
    background-color: #fafbfc;
    border: 1px solid rgba(0, 0, 0, 0.07);
    overflow: hidden;
    border-radius: 0;
    box-shadow:
        0 1px 0 rgba(255, 255, 255, 0.9) inset,
        0 12px 40px rgba(30, 30, 30, 0.06);

    @media screen and (max-width: ${Screen.MAX_WIDTH_SMALL_DEVICE}) {
        flex-direction: column;
        height: auto;
        min-height: 0;
    }
`;

export const ItemImage = styled.div<ItemParams>`
    flex: 1.15 1 56%;
    min-height: 240px;
    min-width: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    transition: transform 0.7s cubic-bezier(0.33, 1, 0.68, 1);

    ${ContainerSlider}:hover & {
        transform: scale(1.03);
    }

    @media screen and (max-width: ${Screen.MAX_WIDTH_SMALL_DEVICE}) {
        flex: none;
        width: 100%;
        aspect-ratio: 16 / 10;
        min-height: 200px;
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
        ${ContainerSlider}:hover & {
            transform: none;
        }
    }
`;

export const ItemInfosContent = styled.div`
    flex: 1 1 44%;
    min-width: 0;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    gap: 1.5rem;
    padding: clamp(1.5rem, 4vw, 2.75rem) clamp(1.25rem, 3vw, 2.5rem);
    background: linear-gradient(180deg, #ffffff 0%, #fafbfc 100%);
    border-left: 1px solid rgba(0, 0, 0, 0.06);

    @media screen and (max-width: ${Screen.MAX_WIDTH_SMALL_DEVICE}) {
        flex: none;
        width: 100%;
        align-items: center;
        text-align: center;
        border-left: none;
        border-top: 1px solid rgba(0, 0, 0, 0.06);
        padding: 1.75rem 1.25rem 2rem;
    }
`;
