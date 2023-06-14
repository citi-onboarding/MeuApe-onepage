import React from "react";
import { NavbarContainer, Logo, SecondContainer, ListItem, List } from './styles';
import { LogoMeuApe } from '../../assets';
import { useState } from "react";

export const Navbar: React.FC = () => {
    const [active, setMode] = useState(false)
    const ToggleMode = () => {
        setMode(!active)
    }
    return (
        <NavbarContainer>
            <SecondContainer>
                <Logo>
                    <a href="#">
                        <img src={LogoMeuApe} alt="Logo principal" />
                    </a>
                </Logo>
                <List>
                    <ListItem><a href="#home-section">Home</a></ListItem>
                    <ListItem><a href="#intro">Quem somos</a></ListItem>
                    <ListItem><a href="#benefits">Benefícios</a></ListItem>
                    <ListItem><a href="#contact">Contato</a></ListItem>
                </List>
            </SecondContainer>
        </NavbarContainer>
    );
}
