import React, { useState, useEffect } from "react";
import {
    ConstructContainer, ImgLow, Content,
    TitleContent, SubTitleContent, TextContent,
    Highlight, AdjustButton, ContentContainer,
    LeftSide, AdjustArrow, AdjustImage
} from './styles';
import { Button, Line } from "../../components";
import api from "../../services/api";
import { ArrowConstruct, BodyLine, ConstructBenefit1 } from '../../assets';
import { handleClick } from '../../components/softScroll'

type CBInfosF = {
    tag: string;
    title: string;
    text: string;
    image: string;
}

export const ConstructFirst = () => {
    return (
        <ConstructContainer id="c1">
            <ContentContainer>
                <LeftSide><Line /><AdjustImage src={ConstructBenefit1} alt="Tela do aplicativo, versão desktop" /></LeftSide>
                <Content>
                    <TitleContent><h3>Para construtoras</h3></TitleContent>
                    <SubTitleContent><h2>Antecipe o fluxo de caixa, atraindo clientes para vendas no início da obra</h2></SubTitleContent>
                    <TextContent><p>
                        <React.Fragment>
                            A personalização de apartamentos durante a construção pode ser um atrativo para conquistar  clientes ainda nas fases iniciais da obra, pois eles geralmente não conseguem entrar em sua casa nova após a entrega das chaves. O 
                            <Highlight> Meu Apê do Meu Jeito </Highlight>
                            viabiliza as reformas de forma escalonada ao longo da obra.
                        </React.Fragment>
                    </p></TextContent>
                    <AdjustButton><Button /></AdjustButton>
                </Content>
            </ContentContainer>
            <ImgLow><AdjustArrow href="#c2" onClick={handleClick}><img src={ArrowConstruct} alt="" /></AdjustArrow></ImgLow>
        </ConstructContainer>
    );
}