import React from "react";
import { GlobalStyles, IntroContainer, Introh1, Introimg1, Introimg2, Introp1, Introp3, Introp2 } from './styles';
import { LogoMeuApe2,Arrow } from '../../assets';


export const Intro: React.FC = () => {
    return (
        <IntroContainer>
            <Introimg1 src={LogoMeuApe2} alt="" />
            <Introp1>
            Feito para construtoras e clientes
            </Introp1>
            <Introh1>
            Meu Apê do Meu Jeito
            </Introh1>
           <Introp3>
            Possibilitamos uma ótima experiência na customização dos apartamentos de forma unificada, simplificada e acessível
            </Introp3> 
            <Introp2>
            Role para baixo
            </Introp2>
            <Introimg2 src={Arrow} alt="" />
        </IntroContainer>
    );
}