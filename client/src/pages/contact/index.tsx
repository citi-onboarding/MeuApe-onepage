import React from "react";
import { ContactContainer, Title, Content, ContentContainer, ButtonContact, Link, Ajuste } from './styles';
import { LogoWpp } from '../../assets';

export const Contact: React.FC = () => {
    return (
        <ContactContainer id="contact">
            <Title>Contato</Title>
            <ContentContainer>
                <Content>Se interessou? <br /> Vamos conversar!</Content>
                <Link href="https://wa.me/5581995194672" target="_blank"><ButtonContact><img src={LogoWpp} alt="" /><Ajuste>Entre em contato</Ajuste></ButtonContact></Link>
            </ContentContainer>
        </ContactContainer>
    );
}