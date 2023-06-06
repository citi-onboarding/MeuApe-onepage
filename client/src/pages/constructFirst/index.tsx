import React from "react";
import { ConstructContainer, ImgLow, Content, TitleContent, SubTitleContent, TextContent, Highlight, AdjustButton, ContentContainer } from './styles';
import { Button } from "../../components";


export const ConstructFirst: React.FC = () => {
    return (
        <ConstructContainer>
            <ContentContainer>
                <div>asdsad</div>
                <Content>
                    <TitleContent><h3>Para construtoras</h3></TitleContent>
                    <SubTitleContent><h2>Antecipe o fluxo de caixa, <br /> atraindo clientes para vendas no início da obra</h2></SubTitleContent>
                    <TextContent><p>A personalização de apartamentos durante a construção pode ser um atrativo para conquistar  clientes ainda nas fases iniciais da obra, pois eles geralmente não conseguem entrar em sua casa nova após a entrega das chaves. O <Highlight>Meu Apê do Meu Jeito</Highlight> viabiliza as reformas <br /> de forma escalonada ao longo da obra</p></TextContent>
                    <AdjustButton><Button /></AdjustButton>
                </Content>
            </ContentContainer>
            <ImgLow></ImgLow>
        </ConstructContainer>
    );
}