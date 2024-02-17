import { Card } from "@mui/material";
import styled from "styled-components";
import { Screen } from "../../../data";
import appColors from "../../colors/appColors";

export const paddingComponents = "60px 15dvw";

export const PagePadding = styled.div`
    padding: ${paddingComponents};

    @media screen and (max-width: ${Screen.MAX_WIDTH_SMALL_DEVICE}) {
        padding: 60px 5dvw;
    }
`;

export const PageContent = styled.div`
    max-width: 100dvw;
    display: flex;
    flex-direction: column;
`;

export const ButtomsCategoriesContainer = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #1e1e1e;
    color: ${appColors.background} !important;
    gap: 20px;
    padding: ${paddingComponents};

    @media screen and (max-width: ${Screen.MAX_WIDTH_SMALL_DEVICE}) {
        padding: 60px 5dvw;
    }
`;

export const ButtomCategoriesCard = styled(Card)`
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: ${appColors.red} !important;
    color: ${appColors.background} !important;
    border-radius: 15px !important;
    padding: 20px;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
    /* border: 3.5px solid ${appColors.red}; */
`;

export const LocationMapContent = styled.div`
    width: 100%;
    height: 400px;
`;
