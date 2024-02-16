import styled from "styled-components";
import appColors from "../../../../colors/appColors";

type ImageViewParams = {
    url?: string;
    main?: boolean;
};

const imgSize = "100px";

export const ImageView = styled.div<ImageViewParams>`
    width: ${imgSize};
    height: ${imgSize};
    background-image: ${({ url }) => `url(${url})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: 1.5px solid ${appColors.red};
    position: relative;
`;

export const ImagesContainer = styled.div`
    width: 100%;
    padding: 5px;
    display: flex;
    gap: 15px;
`;

export const ImageIconsContainer = styled.div`
    width: fit-content;
    display: flex;
    gap: 3px;
    position: absolute;
    top: -15px;
    right: -15px;
`;

type IconParams = {
    color?: string;
};

export const ImageIcon = styled.div<IconParams>`
    display: flex;
    padding: 5px;
    background-color: ${({ color }) => color || appColors.red};
    border-radius: 50%;
`;
