import styled from 'styled-components'; 


export const FooterContainer = styled.footer`
  background-color: #1A0289;
  /*<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap" rel="stylesheet">*/

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
`;

export const FooterDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px; 
  margin-left: auto;
  margin-right: auto;
`;

export const Footerimg = styled.img`
  width: 200px;
  height: 200px;
  margin-right: auto; 
  margin-left: auto;
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
  font-size: 48px;
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

export const Footerul = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
`;

export const Footerli = styled.li`
  margin: 0px;
`;
