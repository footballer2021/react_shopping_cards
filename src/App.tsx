import React from 'react';
import styled from "styled-components";
import { Card } from './components/Card';
import ramen from "./images/ramen.jpg";
import chicken from "./images/chicken.jpg";
import tonkatsu from "./images/tonkatsu.jpg";
import bibinba from "./images/bibinba.jpg";

const SWrapper = styled.div`
  margin: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  justify-content: center;

  @media screen and (min-width: 600px) {
      grid-template-columns: repeat(auto-fit, minmax(14rem, 16rem));
    }
`;

export const App = () => {
  return (
    <SWrapper>
      <Card img={ramen}
      title="しょうゆラーメン" description="定番のラーメン" price="600"/>
      <Card img={chicken} 
      title="オリジナルチキン" description="KFCのチキン" price="500"/>

      <Card
        img={tonkatsu}
        title="とんかつ定食"
        description="ボリューム満点"
        price="1100"
      />
      <Card
        img={bibinba}
        title="石焼きビビンバ"
        description="熱くて辛うま"
        price="1200"
      />
    </SWrapper>
  );
}

