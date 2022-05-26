import React, { useContext } from "react";
import styled from "styled-components";
import { PictureContext } from "./Card";

const SImage = styled.img.attrs(() =>{
    const picture = useContext(PictureContext);
    return {
        src:`${picture}`,
        alt:``,
        className:`card__img`
}
})`
    width: 14rem;
    height: 11rem;
    object-fit: cover;

    @media screen and (min-width: 600px) {
          width: 100%;
          height: 12rem;
        }
`;

export const Image = () => <SImage /> 
