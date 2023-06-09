import React from "react";
import { HomeContainer, HomeSection, Overlay, BlockContent, Content, BlueLine } from './styles';
import { Button } from "../../components";
import { Navbar } from "../navbar";

export const Home: React.FC = () => {
    return (
        <HomeContainer id="home-section">
            <Navbar />
            <HomeSection>
                <Overlay>
                    <BlockContent>
                        <Content>Impulsione as vendas e <br /> satisfaça seus clientes com <br />uma solução inovadora de <br />
                            <BlueLine />personalização de <br />apartamentos</Content>
                        <Button />
                    </BlockContent>
                </Overlay>
            </HomeSection>
        </HomeContainer>
    );
}
