import styled from 'styled-components';

export const HomeContainer = styled.div`
    
    background-image: url(${(props) => props.theme.backgroundImageHome.background});
    background-size: cover;
  }
`;

export const HomeSection = styled.section`
  position: relative;
  height: 100vh;
  margin-left: 146px;

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
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const BlockContent = styled.section`
  text-align: left;
  color: #fff;
  letter-spacing: 1.5px;
  text-shadow: #000 2px 2px 4px;
  margin-bottom: 120px;

  /* Responsividade Home */
  @media (min-width: 420px) and (max-width: 540px) {
    letter-spacing: 0px;
  }
`;

export const Content = styled.h2`
  font-size: 48px;  

  /* Responsividade Home */
  @media (min-width: 1140px) and (max-width: 1260px) {
    font-size: 38px;
  }

  @media (min-width: 1020px) and (max-width: 1140px) {
    font-size: 36px;
  }

  @media (min-width: 900px) and (max-width: 1020px) {
    font-size: 34px;
    line-height: 45px;
  }

  @media (min-width: 780px) and (max-width: 900px) {
    font-size: 32px;
    line-height: 45px;
  }

  @media (min-width: 660px) and (max-width: 780px) {
    font-size: 30px;
    line-height: 45px;
  }

  @media (min-width: 540px) and (max-width: 660px) {
    font-size: 28px;
    line-height: 45px;
  }

  @media (min-width: 420px) and (max-width: 540px) {
    font-size: 26px;
    line-height: 45px;
  }
`;

export const BlueLine = styled.span`
  position: absolute;
  left: 0;
  width: 47%;
  height: 4px;
  background-color: #1A0289;
  margin-top: -432px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  /* Responsividade Home */
  @media (max-width: 780px){ 
    display: none;
}
`;
