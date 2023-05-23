import styled from 'styled-components'; 
import { createGlobalStyle } from 'styled-components';



export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Nunito', sans-serif;
    src: url('./fonts/Nunito-Regular.ttf') format('truetype');
    src: url('./fonts/Nunito-SemiBold.ttf') format('truetype');
  }
`;

export const IntroContainer = styled.div`
  background-color: #FFFFFF;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Introimg1 = styled.img`
  width: 500px;
  height: 500px;
`;

export const Introimg2 = styled.img`
width: 103.67;
height: 61.28;
`;
export const Introh1 = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-weight: 600; 
  font-size: 48px;
  color: black;
  margin-top: 40px;
  text-align: center;
`;

export const Introp3 = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 32px;
  font-weight: 400; 
  color: black;
  opacity: 40%;
  margin-top: 40px;
  text-align: center;
`;

export const Introp1 = styled.p`

font-size: 24px;
color: #1A0289;
margin-top: 24px;
line-height: 32px;
`;
export const Introp2 = styled.p`

font-size: 24px;
color: #1A0289;
opacity: 40%;
margin-top: 24px;
line-height: 32px;
`;