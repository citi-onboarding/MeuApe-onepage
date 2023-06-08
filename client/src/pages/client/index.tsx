import React from "react";
import { ClientContainer, ImgLow, Content, TitleContent, SubTitleContent, TextContent, Highlight, AdjustButton, ContentContainer, Title, Tag, Subtitle, Carousel } from './styles';
import { Button } from "../../components";


export const Client: React.FC = () => {
    return (
        <ClientContainer>
            <ContentContainer>
                <Title>
                    <Tag><p>Benefícios</p></Tag>
                    <Subtitle><h2>Como podemos te ajudar</h2></Subtitle>
                </Title>
                <Carousel>Carousel</Carousel>
                <Content>
                    <TitleContent><p>Para clientes</p></TitleContent>
                    <SubTitleContent><h2>Parcele os custos das reformas ao longo da obra</h2></SubTitleContent>
                    <TextContent><p>O <Highlight>Meu Apê do Meu Jeito </Highlight>se propõe a viabilizar as reformas de forma escalonada ao longo da obra para que o cliente receba seu imóvel da forma desejada e com o rateio dos custos durante a construção do edifício, minimizando o impacto financeiro do cliente e possibilitando habitar de imediato.</p></TextContent>
                    <AdjustButton><Button /></AdjustButton>
                </Content>
            </ContentContainer>
            <ImgLow></ImgLow>
        </ClientContainer>
    );
}