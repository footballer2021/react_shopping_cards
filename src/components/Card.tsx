import React, { createContext } from "react";
import styled from "styled-components";
import cssVariables from "./css_variables.json";
import {Image} from "./Image";
import {CardBody} from "./CardBody";

const variable = cssVariables.variable;

interface CardType {
    img:string
    title:string
    description:string
    price:string
}

const SCard = styled.div`
box-shadow: 0 0 10px 5px ${variable.clrGray300};
  border-radius: ${variable.radius};
  min-width: 28rem;
  display: flex;

  @media screen and (min-width: 600px) {
      flex-direction: column;
      text-align: center;
      min-width: 14rem;
    }
`;

export const PictureContext = createContext('');
export const TitleContext = createContext('');
export const DescriptionContext = createContext('');
export const PriceContext = createContext('');
export const Card = ({img,title,description,price}:CardType) => {
    return(
        <SCard>
            <PictureContext.Provider value={img}>
              <Image />
            </PictureContext.Provider>
            <TitleContext.Provider value={title}>
              <DescriptionContext.Provider value={description}>
                <PriceContext.Provider value={price}>
                  <CardBody />
                </PriceContext.Provider>
              </DescriptionContext.Provider>
            </TitleContext.Provider>
        </SCard>
    );
};

