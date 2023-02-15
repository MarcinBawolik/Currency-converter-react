import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 16px;
    padding: 16px;
    margin: 250px 50px;
`;

export const FormButton = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border-radius: 16px;
    width: 100%;
    padding: 10px;
    margin: 10px auto;
`;

export const FormSelect = styled.select`
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
    max-width: 350px;
    border-radius: 16px;
`;

export const FormHeader = styled.h1`
    color: ${({ theme }) => theme.color.teal};
    text-align: center;
`;

export const FormSpan = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin-right: 5px;
`;

export const FormParagraph = styled.p`
    color: ${({ theme }) => theme.color.silverchalice};
    text-align: center;
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.teal};
`;

export const Failure = styled.p`
    color: ${({ theme }) => theme.color.crimson}
`;
