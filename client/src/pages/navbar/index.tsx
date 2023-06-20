import React from "react";
import { NavbarContainer, Logo, SecondContainer, ListItem, List } from './styles';
import { LogoMeuApe } from '../../assets';
import { useState } from "react";
import { handleClick } from '../../components/softScroll';

export const Navbar: React.FC = () => {
    const [active, setMode] = useState(false)
    const ToggleMode = () => {
        setMode(!active)
    }


    return (
        <NavbarContainer>
            <SecondContainer>
                <Logo>
                    <a href="#home-section" onClick={handleClick}>
                        <img src={LogoMeuApe} alt="Logo principal" />
                    </a>
                </Logo>
                <List>
                    <ListItem><a href="#home-section" onClick={handleClick}>Home</a></ListItem>
                    <ListItem><a href="#intro" onClick={handleClick}>Quem somos</a></ListItem>
                    <ListItem><a href="#benefits" onClick={handleClick}>Benefícios</a></ListItem>
                    <ListItem><a href="#contact" onClick={handleClick}>Contato</a></ListItem>
                </List>
            </SecondContainer>
        </NavbarContainer>
    );
}
