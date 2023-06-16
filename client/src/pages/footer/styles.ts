import styled from 'styled-components';


export const FooterContainer = styled.footer`
  background-color: #1A0289;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  text-align: center;
  border-radius: 10px 10px 0 0;
`;

export const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  flex-direction: column;
  margin-top: 20px; 
  margin-left: auto;
  margin-right: auto;
`;

export const Footerimg = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 20px; 
  margin-right: auto; 
  margin-left: auto;
`;

export const Footera = styled.a`
  display: block;
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-left: 0;
  margin-right: 0;
`;

export const Footerh1 = styled.h1`
  color: white;
  font-weight: 700; 
  font-size: 18px;
  margin-top: 20px;
  margin-bottom:10px;
  text-align: left;
  
`;

export const Footerp = styled.p`
  font-size: 20px;
  font-weight: 400; 
  color: white;
  margin-top: 0;
  margin-bottom:0;
  text-align: start;
`;

export const Footerul = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;

`;

export const Footerli = styled.li`
  margin: 0; 
`;
