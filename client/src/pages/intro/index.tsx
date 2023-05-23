import React from "react";
import { HomeContainer } from './styles';
import { LogoMeuApe } from '../../assets';


export const Intro: React.FC = () => {
    return (
        <HomeContainer>
            <img src={LogoMeuApe} alt="" />
            <h1>Intro...</h1>
            <p>
                Made with
                {' '}
                <strong>&lt; &#x0002F; &gt;</strong>
                {' '}
                and
                {' '}
                <strong>&hearts;</strong>
                {' '}
                by CITi
            </p>
        </HomeContainer>
    );
}