import React from "react";
import { CBContainer, CBh1, CBimg, CBp, CBp2, PurpleText, CBDiv } from "./styles";
import { Button } from "../../components";
import { Construct } from '../../assets';


export const CB = () => {
  return (
    <CBContainer>
      <CBDiv>
        <CBp> Para construtoras </CBp>
        <CBh1>Melhore na experiência de compra, praticidade e confiança</CBh1>
        <CBp2>
          O processo de gestão e logística das obras são <br></br>muito
          complexos e podem dificultar o processo de <br></br> personalização de
          apartamentos, mas com <PurpleText>Meu <br></br> Apê do Meu Jeito</PurpleText>,
          este processo pode ser mais <br></br> ágil, fácil e ainda contribuir na melhor
          experiência, <br></br> relacionamento e engajamento com seus clientes.
        </CBp2>
        <Button />
      </CBDiv>
      <CBimg src={Construct} alt="" />
    </CBContainer>
  );
};
