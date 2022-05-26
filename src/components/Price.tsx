import React, {useContext} from "react";
import styled from "styled-components";
import { PriceContext } from "./Card";

const SPrice = styled.h3.attrs(() =>{
    return {
        className:`card__price`
    }
})`
font-size: 1.4rem;
margin-top: 0.6rem;

&::before {
  content: "¥";
  font-size: 1rem;
  position: relative;
  top: -0.3rem;
  padding-right: 0.1rem;
}
`;

export const Price = () => {
    const price = useContext(PriceContext);
    return<SPrice>{price}</SPrice>
};