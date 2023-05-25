import React from "react";
import { NavbarContainer } from './styles';
import { LogoMeuApe } from '../../assets';


export const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <nav>
                <div id="logo">
                    <a href="#">
                        <img src={LogoMeuApe} alt="Logo principal" />
                    </a>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Quem somos</a></li>
                    <li><a href="#">Benefícios</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </NavbarContainer>
    );
}