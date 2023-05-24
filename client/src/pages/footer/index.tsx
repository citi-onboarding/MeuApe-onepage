import React from "react";
import { FooterContainer, Footera, Footerimg, FooterDiv, Footerh1, Footerp, Footerul, Footerli } from './styles';
import { LogoMeuApe, Instagram, Facebook, Linkedin } from '../../assets';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Footerimg src={LogoMeuApe} alt="" />
      <FooterDiv>
        <Footerh1>
          Endereço
        </Footerh1>
        <Footerp>
          Rua Abelardo, 45 <br></br>
          Graças - Recife PE <br></br>
          CEP: 52050-310
        </Footerp>
      </FooterDiv>
      <FooterDiv>
        <Footerh1>
          Contato
        </Footerh1>
        <Footerp>
          +55 (81) 99114-1599 <br></br><br></br>
          contato@meuapedomeujeito.com.br <br></br>
          vendas@meuapedomeujeito.com.br
        </Footerp>
      </FooterDiv>
      <Footerul>
        <Footerli>
          <Footera href="https://www.instagram.com" target="_blank">
            <img src={Instagram} alt="" />
          </Footera>
        </Footerli>
        <Footerli>
          <Footera href="https://www.facebook.com" target="_blank">
            <img src={Facebook} alt="" />
          </Footera>
        </Footerli>
        <Footerli>
          <Footera href="https://www.linkedin.com" target="_blank">
            <img src={Linkedin} alt="" />
          </Footera>
          </Footerli>
        </Footerul>
    </FooterContainer>
  );
}