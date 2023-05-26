import styled from 'styled-components';

export const MenuWrapper = styled.div`
    position: absolute;
    margin-left: 730px;

    /* Responsividade menu hamburguer */
    @media (min-width: 900px){ 
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
    margin-top: 10px;
    padding: 20px;
    background-color: #fff;
    list-style: none;
`;

export const MenuItem = styled.li`
    margin-bottom: 10px; 
`;