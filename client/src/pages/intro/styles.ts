import styled from 'styled-components';


export const IntroContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Introimg1 = styled.img`
  width: 1050px;
  height: 1050px;
  margin-left: auto;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-top: -640px;
`;

export const Introa = styled.a`
  display: block;
  width: 103.67px;
  height: 61.28px;
  margin-top: 10px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  justify-content: center;
`;

export const Introh1 = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-weight: 600; 
  font-size: 48px;
  color: black;
  margin-top: 0px;
  text-align: center;
  justify-content: center;
`;

export const Introp3 = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 32px;
  font-weight: 400; 
  color: black;
  opacity: 60%;
  margin-top: 0;
  text-align: center;
  justify-content: center;
  @media (max-width: 1200px) {
    font-size: 28px;
  }
`;

export const Introp1 = styled.p`

font-size: 24px;
font-weight: 400;
color: #1A0289;
margin-top: 0;
line-height: 32px;
text-align: center;
justify-content: center;

`;
export const Introp2 = styled.p`

font-size: 24px;
font-weight: 600;
color: #1A0289;
opacity: 40%;
margin-top: 180px;
line-height: 32px;
justify-content: center;
text-align: center;
@media (max-width: 1200px) {
  margin-top: 150px;
}
`;