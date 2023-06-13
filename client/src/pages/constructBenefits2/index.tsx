import React from "react";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { CBContainer, CBh1, CBimg, CBp, CBp2, PurpleText, CBDiv } from "./styles";
import { Button } from "../../components";
import { Construct } from '../../assets';

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
        <CBp> {infos && infos[4].tag} </CBp>
        <CBh1>{infos && infos[4].title}</CBh1>
        <CBp2>
          {infos && (
            <React.Fragment>
              {infos[4].text.substring(0, infos[4].text.indexOf('são') + 3)} <br />
              {infos[4].text.substring(infos[4].text.indexOf('são') + 3, infos[4].text.indexOf('Meu') + 0)}
              <PurpleText>
                {infos[4].text.substring(infos[4].text.indexOf('Meu'), infos[4].text.indexOf('Meu') + 3)} <br></br>
                {infos[4].text.substring(infos[4].text.indexOf('Apê do Meu Jeito'), infos[4].text.indexOf('Jeito') + 5)}
              </PurpleText>
              {infos[4].text.substring(infos[4].text.indexOf('Jeito') + 5, infos[4].text.indexOf('mais') + 4)}<br />
              {infos[4].text.substring(infos[4].text.indexOf('mais') + 4, infos[4].text.indexOf('experiência, ') + 13)}<br />
              {infos[4].text.substring(infos[4].text.indexOf('experiência, ') + 13, infos[4].text.indexOf('clientes') + 8)}
              {infos[4].text.substring(infos[4].text.indexOf('clientes') + 8)}
            </React.Fragment>
          )}
        </CBp2>
        <Button />
      </CBDiv>
      <CBimg src={infos && infos[4].image} alt="" />
    </CBContainer>
  );
};
