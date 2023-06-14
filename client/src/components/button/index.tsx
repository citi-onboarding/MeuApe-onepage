import React from "react";
import { ButtonStyle } from './styles';

export const Button: React.FC = () => {
    return (
        <ButtonStyle>
            <div className="content">
                <a href="#contact"><button>Entre em contato</button></a>
            </div>
        </ButtonStyle>
    );
}
