import styled from 'styled-components';

export const NavbarContainer = styled.div`

    width: 1360px;
    margin: 0 auto;

    #logo{
        margin-top: 20px;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
    }
    
    nav a {
        text-decoration: none;
        color: #FFF;
        margin-right: 10px;
        font-size: 20px;
    }
    
    nav ul {
        list-style: none;
        display: flex;
        margin-top: -20px;
    }
    
    nav ul li {
        margin-left: 80px;
        font-weight: 700;
    }

    a:hover {
        color: #1A0289;
    }
  }
`;