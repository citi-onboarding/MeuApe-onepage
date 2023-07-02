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
  return (
    <FooterContainer>
      <Footerimg src={LogoMeuApe} alt="" />
      <FooterDiv>
        <Footerh1>
          Endereço 
        </Footerh1>
        <Footerp>
          <React.Fragment>
            Rua Abelardo, 45 <br />
            Graças - Recife PE <br />
            CEP: 52050-310
          </React.Fragment>
        </Footerp>
      </FooterDiv>
      <FooterDiv>
        <Footerh1>
          Contato
        </Footerh1>
        <Footerp>
          +55(81)99114-1599 <br></br> <br></br>
        </Footerp>
        <Footerp>
          contato@meuapedomeujeito.com.br
        </Footerp> <Footerp>
          vendas@meuapedomeujeito.com.br
        </Footerp>
      </FooterDiv>
      <FooterDiv>
        <Footerh1>
          Redes
        </Footerh1>
        <Footerul>
          <Footerli>
            <Footera href="https://www.instagram.com/" target="_blank">
              <img src={Instagram} alt="" />
            </Footera>
          </Footerli>
          <Footerli>
            <Footera href="https://www.facebook.com/" target="_blank">
              <img src={Facebook} alt="" />
            </Footera>
          </Footerli>
          <Footerli>
            <Footera href="https://www.linkedin.com/" target="_blank">
              <img src={Linkedin} alt="" />
            </Footera>
            </Footerli>
          </Footerul>
      </FooterDiv>
    </FooterContainer>
  );
}