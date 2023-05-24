import React from "react";
import { ButtonStyle } from './styles';

export const Button: React.FC = () => {
    return (
        <ButtonStyle>
            <div className="content">
                <button>Entre em contato</button>
            </div>
        </ButtonStyle>
    );
}