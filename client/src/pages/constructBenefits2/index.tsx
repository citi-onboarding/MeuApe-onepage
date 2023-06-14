import React from "react";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { CBContainer, CBh1, CBimg, CBp, CBp2, PurpleText, CBDiv, ImgDiv } from "./styles";
import { Button } from "../../components";

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
    <CBContainer>
      <CBDiv>
        <CBp> {infos && infos[0].tag} </CBp>
        <CBh1>{infos && infos[0].title}</CBh1>
        <CBp2>
          {infos && (
            <React.Fragment>
              {infos[0].text.substring(0, infos[0].text.indexOf('são') + 3)} <br />
              {infos[0].text.substring(infos[0].text.indexOf('são') + 3, infos[0].text.indexOf('Meu') + 0)}
              <PurpleText>
                {infos[0].text.substring(infos[0].text.indexOf('Meu'), infos[0].text.indexOf('Meu') + 3)} <br />
                {infos[0].text.substring(infos[0].text.indexOf('Apê do Meu Jeito'), infos[0].text.indexOf('Jeito') + 5)}
              </PurpleText>
              {infos[0].text.substring(infos[0].text.indexOf('Jeito') + 5, infos[0].text.indexOf('mais') + 4)}<br />
              {infos[0].text.substring(infos[0].text.indexOf('mais') + 4, infos[0].text.indexOf('experiência, ') + 13)}<br />
              {infos[0].text.substring(infos[0].text.indexOf('experiência, ') + 13, infos[0].text.indexOf('clientes') + 8)}
              {infos[0].text.substring(infos[0].text.indexOf('clientes') + 8)}
            </React.Fragment>
          )}
        </CBp2>
        <Button />
      </CBDiv>
      <ImgDiv><CBimg src={infos && infos[0].image} alt="" /></ImgDiv>

    </CBContainer>
  );
};
