import React from "react";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { CBContainer, CBh1, CBimg, CBp, CBp2, PurpleText, CBDiv, ImgDiv } from "./styles";
import { Button } from "../../components";
import { ConstructBenefit2 } from "../../assets";

type CBInfos = {
  tag: string;
  title: string;
  text: string;
  image: string;
}


export const CB = () => {
  const [infos, setInfos] = useState<CBInfos[]>();

  const getInfos = async () => {
    const response = await api.get('/constructbenefit');
    setInfos(response.data);
  }

  useEffect(() => {
    getInfos();
  }, [])

  return (
    <CBContainer id="c2">
      <CBDiv>
        <CBp> Para construtoras</CBp>
        <CBh1>Melhore na experiência de compra, praticidade e confiança</CBh1>
        <CBp2>
            <React.Fragment>
              O processo de gestão e logística da obras são muito complexos e podem dificultar o processo de personalização de apartamentos, mas com O 
              <PurpleText>
                Meu<br />
                Apê do Meu Jeito
              </PurpleText>
              , este processo pode ser mais <br />
              ágil, fácil e ainda contribuir na melhor experiência, <br />
              relacionamento e engajamento com seus clientes.
              
            </React.Fragment>
        </CBp2>
        <Button />
      </CBDiv>
      <ImgDiv><CBimg src={ConstructBenefit2} alt="Tela do aplicativo, versão desktop" /></ImgDiv>
    </CBContainer>
  );
};
