import React from "react";
import { HomeContainer, HomeSection, Overlay, BlockContent, Content, BlueLine } from './styles';
import { Button } from "../../components";
import { Navbar } from "../navbar";

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Navbar />
            <HomeSection>
                <Overlay>
                    <BlockContent>
                        <Content>Personalize sua <br /> casa nova sem dor <br />de cabeça</Content>
                        <Button />
                    </BlockContent>
                </Overlay>
            </HomeSection>
            <BlueLine />
        </HomeContainer>
    );
}