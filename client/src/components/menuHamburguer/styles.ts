import styled from 'styled-components';

export const MenuWrapper = styled.div`
    position: absolute;
    display: block;
    margin-left: 730px;
    margin-top: -80px;

    /* Responsividade menu hamburguer */
    @media (min-width: 780px){ 
        display: none;
    }

    @media (max-width: 800px){ 
        margin-left: 630px;
    }

    @media (max-width: 700px){ 
        margin-left: 530px;
    }

    @media (max-width: 600px){ 
        margin-left: 430px;
    }

    @media (max-width: 500px){ 
        margin-left: 370px;
    }
`;

export const HamburguerButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 38px;
    height: 28px;
    cursor: pointer;
    border: 1px solid #FFF;
    padding: 5px;
    border-radius: 5px;

    span {
        width: 100%;
        height: 2px;
        background-color: #FFF;
    }
`;

export const MenuItems = styled.ul`
    position: absolute;
    padding: 20px;
    list-style: none;
    margin-left: -90px;
    text-align: center;
    background-color: red;
`;

export const MenuItem = styled.li`
    margin-bottom: 20px; 
`;