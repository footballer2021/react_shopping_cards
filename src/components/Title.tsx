import React, {useContext} from "react";
import styled from "styled-components";
import { TitleContext } from "./Card";

const STitle = styled.h2.attrs(() =>{
    return {
        className:`card__title`
    }
})
`
    line-height: 1.4rem;
    margin-bottom: 0.5rem;
`;

export const Title = () => {
    const title = useContext(TitleContext);
    return<STitle>{title}</STitle>
};

