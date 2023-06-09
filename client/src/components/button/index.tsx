import React from "react";
import { ButtonStyle } from './styles';

export const Button: React.FC = () => {
    return (
        <ButtonStyle>
            <div className="content">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <button>Entre em contato</button>
                </a>
            </div>
        </ButtonStyle>
    );
}
