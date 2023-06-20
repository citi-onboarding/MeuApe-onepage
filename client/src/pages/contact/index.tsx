import React from "react";
import { ContactContainer, Title, Content, ContentContainer, ButtonContact, Link, AdjustButton, Teste } from './styles';
import { LogoWpp } from '../../assets';
import { Footer } from '../footer'

export const Contact: React.FC = () => {
    return (
        <ContactContainer id="contact">
            <Title>Contato</Title>
            <ContentContainer>
                <Content>Se interessou? <br /> Vamos conversar!</Content>
                <Link href="https://wa.me//5581991141599" target="_blank"><ButtonContact><img src={LogoWpp} alt="" /><AdjustButton>Entre em contato</AdjustButton></ButtonContact></Link>
            </ContentContainer>
            <Teste>
                <Footer />
            </Teste>
        </ContactContainer>
    );
}