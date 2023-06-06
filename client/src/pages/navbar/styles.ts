import styled from 'styled-components';

export const NavbarContainer = styled.div`

    width: 1360px;
    margin: 0 auto;
    
    a {
        text-decoration: none;
        color: #FFF;
        margin-right: 10px;
        font-size: 20px;
    }

    a:hover {
        color: #1A0289;
    }
  }
`;

export const Logo = styled.div`
    margin-top: 20px;
`;

export const SecondContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`;

export const ListItem = styled.li`
    margin-left: 80px;
    font-weight: 700;

    /* Responsividade Navbar */
    @media (min-width: 1140px) and (max-width: 1260px) {
        margin-left: 50px;
    }

    @media (min-width: 1020px) and (max-width: 1140px) {
        margin-left: 40px;
    }

    @media (min-width: 900px) and (max-width: 1020px) {
        margin-left: 35px;
    }

    @media (min-width: 780px) and (max-width: 900px) {
        margin-left: 30px;
        a {
            font-size: 19px;
        }
    }
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    margin-top: -20px;

    /* Responsividade Navbar */
    @media (min-width: 1260px) and (max-width: 1380px) {
        margin-right: 100px;
    }

    @media (min-width: 1140px) and (max-width: 1260px) {
        margin-right: 220px;
    }

    @media (min-width: 1020px) and (max-width: 1140px) {
        margin-right: 340px;
    }

    @media (min-width: 900px) and (max-width: 1020px) {
        margin-right: 460px;
    }

    @media (min-width: 780px) and (max-width: 900px) {
        margin-right: 580px;
    }

    @media (max-width: 780px){ 
        display: none;
    }
`;