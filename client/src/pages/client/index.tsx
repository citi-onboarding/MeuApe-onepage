import React, { useState, useEffect } from "react";
import {
    ClientContainer, ImgLow, Content,
    TitleContent, SubTitleContent, TextContent,
    Highlight, AdjustButton, ContentContainer, Title,
    Tag, Subtitle, CarouselBackground, AdjustCarousel,
    AdjustArrow
} from './styles';
import { Button, Carousel } from "../../components";
import api from "../../services/api";
import { ArrowConstruct } from '../../assets';

type ClientInfos = {
    tag: string;
    title: string;
    text: string;
    image: string;
}

export const Client = () => {
    const [infos, setInfos] = useState<ClientInfos[]>();

    useEffect(() => {
        (async () => {
            const response = await api.get('/client')
            setInfos(response.data);
        })()
    }, [])

    return (
        < ClientContainer >
            <ContentContainer>
                <Title>
                    <Tag><p>Benefícios</p></Tag>
                    <Subtitle><h2>Como podemos te ajudar</h2></Subtitle>
                </Title>
                <CarouselBackground><AdjustCarousel><Carousel /></AdjustCarousel></CarouselBackground>
                <Content>
                    <TitleContent><p>{infos && infos[0].tag}</p></TitleContent>
                    <SubTitleContent><h2>{infos && infos[0].title}</h2></SubTitleContent>
                    <TextContent><p>{infos && (
                        <React.Fragment>
                            {infos[0].text.substring(0, infos[0].text.indexOf('O Meu Apê do Meu Jeito'))}
                            <Highlight>
                                {infos[0].text.substring(infos[0].text.indexOf('O Meu Apê do Meu Jeito'), infos[0].text.indexOf('Meu Jeito') + 9)}
                            </Highlight>
                            {infos[0].text.substring(infos[0].text.indexOf('Meu Jeito') + 9)}
                        </React.Fragment>
                    )}</p></TextContent>
                    <AdjustButton><Button /></AdjustButton>
                </Content>
            </ContentContainer>
            <ImgLow><AdjustArrow href="#"><img src={ArrowConstruct} alt="" /></AdjustArrow></ImgLow>
        </ClientContainer >
    );
}