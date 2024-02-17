import styled from "styled-components";
import { Screen } from "../../../data";

export const ResponsiveRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 20px;

    @media screen and (max-width: ${Screen.MAX_WIDTH_SMALL_DEVICE}) {
        flex-direction: column;
    }
`;
