import styled from "styled-components";
import appColors from "../../colors/appColors";

export const paddingComponents = "50px 15dvw";

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
    /* background-color: ${appColors.red}; */
    background-color: #1e1e1e;
    padding: ${paddingComponents};
    gap: 20px;
`;

export const ButtomCategoriesCard = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: ${appColors.background};
    color: ${appColors.red};
    border-radius: 15px;
    padding: 20px;

    &:hover {
        cursor: pointer;
        opacity: 0.95;
    }
    /* border: 1px solid ${appColors.red}; */
`;
