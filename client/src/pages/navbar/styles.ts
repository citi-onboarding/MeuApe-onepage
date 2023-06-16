import styled from 'styled-components';

export const NavbarContainer = styled.div`

    width: 100%;
    
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
    margin-top: 30px;
    margin-left: 50px;
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
        margin-left: 65px;
    }

    @media (min-width: 1020px) and (max-width: 1140px) {
        margin-left: 50px;
    }

    @media (min-width: 840px) and (max-width: 1020px) {
        margin-left: 40px;
    }

    @media (min-width: 760px) and (max-width: 840px) {
        margin-left: 30px;
        a {
            font-size: 18px;
        }
    }
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    position: sticky;
    right: 50px;
`;