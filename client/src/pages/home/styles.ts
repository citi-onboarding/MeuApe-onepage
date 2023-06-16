import styled from 'styled-components';

export const HomeContainer = styled.div`
    
    background-image: url(${(props) => props.theme.backgroundImageHome.background});
    background-size: cover;
  }
`;

export const HomeSection = styled.section`
  position: relative;
  margin-left: 146px;
  width: 100vh;

  /* Responsividade Home */
  @media (min-width: 1140px) and (max-width: 1260px) {
    margin-left: 125px;
  }

  @media (min-width: 1020px) and (max-width: 1140px) {
    margin-left: 115px;
  }

  @media (min-width: 900px) and (max-width: 1020px) {
    margin-left: 105px;
  }

  @media (min-width: 780px) and (max-width: 900px) {
    margin-left: 100px;
  }

  @media (min-width: 660px) and (max-width: 780px) {
    margin-left: 100px;
  }

  @media (min-width: 540px) and (max-width: 660px) {
    margin-left: 100px;
  }

  @media (min-width: 420px) and (max-width: 540px) {
    margin-left: 90px;
  }
`;

export const Overlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: 130px;
  padding-bottom: 90px;
`;

export const BlockContent = styled.section`
  text-align: left;
  text-shadow: rgba(0, 0, 0, 0.7) 2px 2px 4px;
  margin-bottom: 120px;
`;

export const Content = styled.h2`
  font-size: 3.3vw; /* Usando vw (viewport width) para dimensionar o texto responsivamente */
  line-height: 1.2;
  letter-spacing: 1.5px;
  color: #fff;
  justify-content: left;
`;

export const BlueLine = styled.span`
    position: absolute;
    left: -180px;
    right: 0;
    border-top: 4px solid #1A0289;
    width: 51.6vw;

    /* Responsividade Navbar */
    @media (min-width: 1140px) and (max-width: 1260px) {
      width: 55vw;
    }

    @media (min-width: 1020px) and (max-width: 1140px) {
      width: 56vw;
    }

    @media (min-width: 900px) and (max-width: 1020px) {
      width: 59vw;
    }

    @media (min-width: 760px) and (max-width: 900px) {
      width: 61vw;
    }

    @media (max-width: 760px) {
      display: none;
    }
`;
