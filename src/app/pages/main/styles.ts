import styled from "styled-components";
import appColors from "../../colors/appColors";

export const TopContainer = styled.div`
    width: 100%;
    min-height: 40dvw;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
`;

export const TopImage = styled.div<{ image: string }>`
    width: 100%;
    min-height: 40dvw;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    z-index: 1;
`;

export const TopImageBox = styled.div`
    width: 50%;
    height: 300px;
    /* background-color: #fff; */
    opacity: 0.6;
    border-radius: 1em;
    position: absolute;
    position: relative;
    text-align: start;
    padding: 2em;
    margin: 20px;
    z-index: 2;
`;

export const TopImageBoxText = styled.div`
    width: 50%;
    height: 300px;
    border-radius: 1em;
    position: absolute;
    text-align: start;
    padding: 2em;
    margin: 20px;
    z-index: 3;
`;

export const Categories = styled.div`
    position: absolute;
    text-align: start;
    padding: 1em;
    bottom: 0;
    left: 0;
    z-index: 4;
`;

export const SectionImageBox = styled.div`
    width: 70%;
    /* height: 300px; */
    aspect-ratio: 1 / 1;
    position: relative;
`;

export const SectionImageBoxColored = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${appColors.red};
    padding: 10px;
`;

export const SectionImage = styled.div<{ image: string }>`
    width: 100%;
    height: 100%;
    /* min-height: 40dvw; */
    aspect-ratio: 1 / 1;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    z-index: 1;
    top: -30px;
    right: -30px;
`;
