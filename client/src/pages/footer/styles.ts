import styled from 'styled-components'; 


export const FooterContainer = styled.footer`
  background-color: #1A0289;
  /*<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap" rel="stylesheet">*/

  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const FooterDiv = styled.div`

display: flex;
position: relative;
justify-content: center;
align-items: center;
flex-direction: column;

`;

export const Footerimg = styled.img`
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: 0px;
`;

export const Footera = styled.a`
  display: block;
  width: 100px;
  height: 100px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const Footerh1 = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-weight: 600; 
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
`;

export const Footerp = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  font-weight: 400; 
  color: white;
  margin-top: 20px;
  text-align: center;
`;
