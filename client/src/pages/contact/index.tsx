import React from "react";
import { ContactContainer, Title, Content, ContentContainer, ButtonContact, Link } from './styles';
import { LogoWpp } from '../../assets';

export const Contact: React.FC = () => {
    return (
        <ContactContainer>
            <Title>Contato</Title>
            <ContentContainer>
                <Content>Se interessou? <br /> Vamos conversar!</Content>
                <ButtonContact><Link href="https://wa.me/5581995194672" target="_blank"><img src={LogoWpp} alt="" />Entre em contato</Link></ButtonContact>
            </ContentContainer>
        </ContactContainer>
    );
}