import React from "react";
import styled from "styled-components";
import cssVariables from "./css_variables.json";

const variable = cssVariables.variable;

const SBtn = styled.button.attrs(() =>{
    return {
        className:`card__btn`
    }
})`
    border: none;
    border-top: 1px solid ${variable.clrGray300};
    background-color: transparent;
    font-family: inherit;
    font-size: 1rem;
    font-weight: bold;
    color: inherit;
    width: 100%;
    padding-top: 1rem;
    margin-top: 1rem;
    cursor: pointer;

    &:hover {
      color: ${variable.clrPrimary};
    }
`;

export const Btn = () => {
    return<SBtn>カートに加える</SBtn>
};