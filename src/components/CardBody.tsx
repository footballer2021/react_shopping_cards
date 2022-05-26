import React from "react";
import styled from "styled-components";
import { Description } from "./Description";
import {Title} from "./Title";
import {Price} from "./Price";
import {Btn} from "./Btn";

const SCardBody = styled.div.attrs(() =>{
    return {
        className:`card__body`
    }
})
`
margin: 1rem;
flex-grow: 1;
`;

export const CardBody = () =>{
return(
    <SCardBody>
        <Title />
        <Description />
        <Price />
        <Btn />
    </SCardBody>
);
};