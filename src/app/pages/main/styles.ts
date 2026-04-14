import styled from "styled-components";
import appColors from "../../colors/appColors";

export const Wallpaper = styled.div`
    width: 100%;
    max-width: 100%;
    min-height: 88dvh;
    height: auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    overflow: hidden;
    box-shadow: 0 24px 48px rgba(30, 30, 30, 0.14);
`;

export const WallpaperImageContainer = styled.div<{ image: string }>`
    width: 100%;
    height: 100%;
    min-height: 88dvh;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    z-index: 1;
    transform: scale(1.02);
`;

/** Camadas: escurecimento + leve calor na base + vinheta nas bordas */
export const WallpaperOverlay = styled.div`
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    background:
        radial-gradient(ellipse 90% 70% at 70% 20%, rgba(228, 1, 8, 0.09), transparent 55%),
        linear-gradient(
            to top,
            rgba(0, 0, 0, 0.88) 0%,
            rgba(0, 0, 0, 0.5) 42%,
            rgba(0, 0, 0, 0.18) 72%,
            rgba(0, 0, 0, 0.1) 100%
        ),
        radial-gradient(ellipse at 100% 100%, rgba(0, 0, 0, 0.35), transparent 45%);
`;

export const WallpaperTextsContainer = styled.div`
    width: 100%;
    max-width: min(960px, 92vw);
    position: absolute;
    text-align: start;
    padding: clamp(1.25rem, 4vw, 2.75rem);
    z-index: 3;
    top: clamp(5.25rem, 13vh, 7.5rem);
    left: 0;
`;

/** Tarja vertical sutil — acento editorial (substitui moldura pesada em “L” nas fotos) */
export const WallpaperAccentBar = styled.div`
    width: 4px;
    height: clamp(3rem, 10vw, 5rem);
    border-radius: 4px;
    background: linear-gradient(180deg, ${appColors.red} 0%, rgba(228, 1, 8, 0.35) 100%);
    margin-bottom: 1.25rem;
    box-shadow: 0 0 24px rgba(228, 1, 8, 0.35);
`;

export const WallpaperTitle = styled.h1`
    font-family: "Lora", serif;
    font-size: clamp(2.1rem, 6.5vw, 3.85rem);
    margin: 0;
    line-height: 1.08;
    font-weight: 600;
    color: #fafafa;
    letter-spacing: -0.02em;
    text-shadow: 0 4px 32px rgba(0, 0, 0, 0.5);
    max-width: 14ch;
`;

export const WallpaperSubtitle = styled.p`
    font-family: "Quicksand", sans-serif;
    font-size: clamp(1.05rem, 3.2vw, 1.5rem);
    margin: 1rem 0 0;
    line-height: 1.45;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.92);
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
    max-width: 38ch;
    opacity: 0.98;
`;

export const WallpaperCategoriesContainer = styled.span`
    position: absolute;
    text-align: start;
    font-family: "Quicksand", sans-serif;
    font-size: clamp(0.7rem, 2vw, 0.9rem) !important;
    padding: 1rem clamp(1rem, 3vw, 1.75rem) 1.35rem;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 4;
    color: rgba(255, 255, 255, 0.88);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.2) 55%, transparent 100%);
    backdrop-filter: blur(4px);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

/**
 * Moldura moderna para fotos de seção: cantos assimétricos, sombra suave,
 * faixa de acento fina — sem bloco vermelho em “L” que competia com a foto.
 */
export const SectionImageBox = styled.div`
    flex-shrink: 0;
    width: min(32vw, 300px);
    min-width: 0;
    max-width: 100%;
    position: relative;
    border-radius: 20px 8px 20px 8px;
    overflow: hidden;
    box-shadow:
        0 28px 56px rgba(30, 30, 30, 0.14),
        0 0 0 1px rgba(255, 255, 255, 0.12) inset;
    aspect-ratio: 1 / 1;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: min(45%, 140px);
        background: linear-gradient(180deg, ${appColors.red}, rgba(228, 1, 8, 0.15));
        z-index: 2;
        border-radius: 0 0 2px 0;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
        max-width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 12px;
        &::before {
            height: 100%;
            width: 4px;
        }
    }
`;

export const SectionImage = styled.div<{ image: string }>`
    width: 100%;
    height: 100%;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    inset: 0;
    z-index: 1;
    transition: transform 0.55s cubic-bezier(0.33, 1, 0.68, 1);

    ${SectionImageBox}:hover & {
        transform: scale(1.05);
    }
`;

/** Mantido para compatibilidade — não renderizar bloco sólido atrás da foto */
export const SectionImageBoxColored = styled.div<{ color?: string }>`
    display: none;
`;

/** Mesmo traço do carrossel (ItemAccentLine), sempre à esquerda — gramática visual única nas seções */
export const SectionAccentLine = styled.span`
    display: block;
    width: 40px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, ${appColors.red}, rgba(228, 1, 8, 0.25));
    margin-top: 1rem;
`;

export const LogoImage = styled.div<{ image: string }>`
    width: min(32vw, 180px);
    max-width: 100%;
    aspect-ratio: 1 / 0.5;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    filter: grayscale(0.15);
    opacity: 0.92;
    transition: opacity 0.25s ease, filter 0.25s ease;

    &:hover {
        opacity: 1;
        filter: grayscale(0);
    }
`;
