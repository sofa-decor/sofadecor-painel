import styled from "styled-components";
import appColors from "../../colors/appColors";

export const ProductsList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 2.65%;
    flex-flow: wrap;
`;

export const IconFilterCount = styled.div`
    width: 18px;
    height: 18px;
    background-color: ${appColors.dark};
    color: ${appColors.white};
    border-radius: 50%;
    font-size: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    top: -4px;
    right: -4px;
`;
