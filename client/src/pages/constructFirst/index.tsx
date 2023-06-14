import React, { useState, useEffect } from "react";
import {
    ConstructContainer, ImgLow, Content,
    TitleContent, SubTitleContent, TextContent,
    Highlight, AdjustButton, ContentContainer,
    LeftSide, AdjustArrow, AdjustImage
} from './styles';
import { Button, Line } from "../../components";
import api from "../../services/api";
import { ArrowConstruct, BodyLine } from '../../assets';

type CBInfosF = {
    tag: string;
    title: string;
    text: string;
    image: string;
}

export const ConstructFirst = () => {
    const [infos, setInfos] = useState<CBInfosF[]>();

    useEffect(() => {
        (async () => {
            const response = await api.get('/construct')
            setInfos(response.data);
        })()
    }, [])




    return (
        <ConstructContainer id="c1">
            <ContentContainer>
                <LeftSide><Line /><AdjustImage src={infos && infos[0].image} alt="" /></LeftSide>
                <Content>
                    <TitleContent><h3>{infos && infos[0].tag}</h3></TitleContent>
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
            <ImgLow><AdjustArrow href="#c2"><img src={ArrowConstruct} alt="" /></AdjustArrow></ImgLow>
        </ConstructContainer>
    );
}