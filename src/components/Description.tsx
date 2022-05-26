import React, {useContext} from "react";
import styled from "styled-components";
import { DescriptionContext } from "./Card";

const SDescription = styled.p.attrs(() =>{
    return {
        className:`card__description`
    }
})`line-height: 1.2rem;`;

export const Description = () => {
    const description = useContext(DescriptionContext);
    return<SDescription>{description}</SDescription>
};