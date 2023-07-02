import React, { useState, useEffect } from "react";
import {
    ClientContainer, ImgLow, Content,
    TitleContent, SubTitleContent, TextContent,
    Highlight, AdjustButton, ContentContainer, Title,
    Tag, Subtitle, CarouselBackground, AdjustCarousel,
    AdjustArrow
} from './styles';
import { Button, Carousel, Line } from "../../components";
import api from "../../services/api";
import { ArrowConstruct } from '../../assets';
import { handleClick } from '../../components/softScroll'



type ClientInfos = {
    tag: string;
    title: string;
    text: string;
    image: string;
}

export const Client = () => {
return (
        <ClientContainer id="benefits">
            <ContentContainer>
                <Title>
                    <Tag><p>Benefícios</p></Tag>
                    <Subtitle><h2>Como podemos te ajudar</h2></Subtitle>
                </Title>
                <CarouselBackground><Line /><AdjustCarousel><Carousel /></AdjustCarousel></CarouselBackground>
                <Content>
                    <TitleContent><p>Para clientes</p></TitleContent>
                    <SubTitleContent><h2>Parcele os custos das reformas ao longo da obra</h2></SubTitleContent>
                    <TextContent><p>
                        <React.Fragment>
                            O <Highlight> Meu Apê do Meu Jeito </Highlight>
                            se propõe a viabilizar as reformas de forma escalonada ao longo da obra para que o cliente receba seu imóvel da forma desejada e com o rateio dos custos durante a construção do edifício, minimizando o impacto financeiro do cliente e possibilitando habitar de imediato.
                        </React.Fragment></p></TextContent>
                    <AdjustButton><Button /></AdjustButton>
                </Content>
            </ContentContainer>
            <ImgLow><AdjustArrow href="#c1" onClick={handleClick}><img src={ArrowConstruct} alt="" /></AdjustArrow></ImgLow>
        </ClientContainer >
    );
}