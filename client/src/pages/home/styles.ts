import styled from 'styled-components';

export const HomeContainer = styled.div`
    
    background-image: url(${(props) => props.theme.backgroundImage.background});
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
  line-height: 85px;
  letter-spacing: 1.5px;

  /* Responsividade Home */
  @media (min-width: 420px) and (max-width: 540px) {
    letter-spacing: 0px;
    line-height: 69px;
  }
`;

export const Content = styled.h2`
  font-size: 68px;  

  /* Responsividade Home */
  @media (min-width: 1140px) and (max-width: 1260px) {
    font-size: 58px;
  }

  @media (min-width: 1020px) and (max-width: 1140px) {
    font-size: 52px;
  }

  @media (min-width: 900px) and (max-width: 1020px) {
    font-size: 50px;
  }

  @media (min-width: 780px) and (max-width: 900px) {
    font-size: 48px;
  }

  @media (min-width: 660px) and (max-width: 780px) {
    font-size: 46px;
  }

  @media (min-width: 540px) and (max-width: 660px) {
    font-size: 44px;
  }

  @media (min-width: 420px) and (max-width: 540px) {
    font-size: 38px;
  }
`;

export const BlueLine = styled.span`
  position: absolute;
  left: 0;
  width: 37%;
  height: 4px;
  background-color: #1A0289;
  margin-top: -460px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  /* Responsividade Home */
  @media (max-width: 780px){ 
    display: none;
}
`;