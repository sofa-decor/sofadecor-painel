import styled from "styled-components";
import appColors from "../../colors/appColors";

export const Wallpaper = styled.div`
    width: 100%;
    max-width: 100%;
    height: 90dvh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
`;

export const WallpaperImageContainer = styled.div<{ image: string }>`
    width: 100%;
    height: 100%;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    z-index: 1;
`;

export const WallpaperImageBackground = styled.div`
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

export const WallpaperTextsContainer = styled.div`
    width: 100%;
    position: absolute;
    text-align: start;
    padding: 2em;
    z-index: 3;
`;

export const WallpaperTitle = styled.h1`
    font-family: "Cormorant Garamond", serif;
    font-size: clamp(2rem, 8vw, 6rem);
    margin-bottom: 0.3rem;
`;

export const WallpaperSubtitle = styled.p`
    font-family: "Quicksand", sans-serif;
    font-size: clamp(1.5rem, 7vw, 3rem);

    color: ${appColors.background};
`;

export const WallpaperCategoriesContainer = styled.div`
    position: absolute;
    text-align: start;
    padding: 1em;
    bottom: 0;
    left: 0;
    z-index: 4;
`;

export const SectionImageBox = styled.div`
    min-width: 20vw;
    max-width: 30vw;
    aspect-ratio: 1 / 1 !important;
    position: relative;
`;

export const SectionImageBoxColored = styled.div<{ color?: string }>`
    width: 100%;
    max-height: 100%;
    background-color: ${({ color }) => color || appColors.red};
    aspect-ratio: 1 / 1 !important;
`;

export const SectionImage = styled.div<{ image: string }>`
    width: 100%;
    max-height: 100%;
    /* min-height: 40dvw; */
    aspect-ratio: 1 / 1;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    z-index: 1;
    top: -2vw;
    right: -2vw;
    aspect-ratio: 1 / 1 !important;
`;

export const LogoImage = styled.div<{ image: string }>`
    width: 15dvw;
    aspect-ratio: 1 / 0.5;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;
