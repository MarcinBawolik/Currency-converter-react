import styled from "styled-components";

export const StyledActualDate = styled.div`
    font-family: 'Space Mono', monospace;
    display: grid;
    justify-content: end;
    padding: 16px;
    color: ${({ theme }) => theme.color.gray}
`;