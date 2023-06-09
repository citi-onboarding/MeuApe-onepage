import React from "react";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { FooterContainer, Footera, Footerimg, FooterDiv, Footerh1, Footerp, Footerul, Footerli } from './styles';
import { LogoMeuApe, Instagram, Facebook, Linkedin } from '../../assets';

type footerInfos = {
  adress: string;
  phone: string;
  email: string;
  email2: string;
  linkInstagram: string;
  linkFacebook: string;
  linkLinkedin: string;
}

export const Footer = () => {
  const [infos, setInfos] = useState<footerInfos[]>();

  const getInfos = async () => {
      const response = await api.get('/footer');
      setInfos(response.data);
  }

  useEffect(() => {
      getInfos();
  }, [])

  return (
    <FooterContainer>
      <Footerimg src={LogoMeuApe} alt="" />
      <FooterDiv>
        <Footerh1>
          Endereço 
        </Footerh1>
        <Footerp>
          {infos && (
            <React.Fragment>
              {infos[0].adress.substring(0, infos[0].adress.indexOf('5') + 1)}<br />
              {infos[0].adress.substring(infos[0].adress.indexOf('5') + 2, infos[0].adress.lastIndexOf('E ') + 1)}<br />
              {infos[0].adress.substring(infos[0].adress.lastIndexOf('E ') + 2)}
            </React.Fragment>
          )}
        </Footerp>
      </FooterDiv>
      <FooterDiv>
        <Footerh1>
          Contato
        </Footerh1>
        <Footerp>
          {infos&&infos[0].phone} <br></br> <br></br>
        </Footerp>
        <Footerp>
          {infos&&infos[0].email}
        </Footerp> <Footerp>
          {infos&&infos[0].email2}
        </Footerp>
      </FooterDiv>
      <FooterDiv>
        <Footerh1>
          Redes
        </Footerh1>
        <Footerul>
          <Footerli>
            <Footera href={infos&&infos[0].linkInstagram} target="_blank">
              <img src={Instagram} alt="" />
            </Footera>
          </Footerli>
          <Footerli>
            <Footera href={infos&&infos[0].linkFacebook} target="_blank">
              <img src={Facebook} alt="" />
            </Footera>
          </Footerli>
          <Footerli>
            <Footera href={infos&&infos[0].linkLinkedin} target="_blank">
              <img src={Linkedin} alt="" />
            </Footera>
            </Footerli>
          </Footerul>
      </FooterDiv>
    </FooterContainer>
  );
}