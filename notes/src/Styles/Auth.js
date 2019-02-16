import styled from 'styled-components';
import { buttonColor } from './variables';

export const AuthContainer = styled.section `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1 `
    font-size: 30px;
    text-align: center;
    margin: 20px 0;
`;

export const SectionHeading = styled.h2 `
    font-size: 25px;
    margin: 10px 0;
`;

export const Form = styled.section `
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-top: 20px;
`;

export const Button = styled.button `
    background-color: ${buttonColor};
    border: none;
    color: white;
    padding: 15px 50px;
    text-decoration: none;
    font-size: 16px;
    margin: 20px 0;
    width: 100%;
`;