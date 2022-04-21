import styled, { css } from "styled-components";

export const ButtonTeste = styled.button`
    background: green;
    cursor: pointer;
    text-decoration: none;

    ${props => props.logout && css`
        display: flex;
        align-items: center;

        background: #DC6065;
        color: #fff;
        padding: 10px 20px;
        border-radius: 8px;

        font-size: 14px;
    `}

    
`
