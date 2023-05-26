import React, { useState } from 'react';
import { MenuWrapper, HamburguerButton, MenuItems, MenuItem } from './styles';

export const HamburguerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <MenuWrapper>
            <HamburguerButton onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </HamburguerButton>
            {isOpen && (
                <MenuItems>
                    <MenuItem><a>Home</a></MenuItem>
                    <MenuItem><a>Benefícios</a></MenuItem>
                    <MenuItem><a>Contato</a></MenuItem>
                </MenuItems>
            )}
        </MenuWrapper>
    );
};