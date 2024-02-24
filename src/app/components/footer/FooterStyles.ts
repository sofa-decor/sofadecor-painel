import styled from "styled-components";
import { Screen } from "../../../data";

export const ResponsiveRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;

    @media screen and (max-width: ${Screen.MAX_WIDTH_SMALL_DEVICE}) {
        flex-direction: column;
    }
`;
