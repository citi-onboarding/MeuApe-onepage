import styled from 'styled-components';


export const CBContainer = styled.div`
  margin-top: 250px;
  background-color: #FFF;
  font-family: 'Nunito', sans-serif;
  display: flex;
  margin-bottom: 300px;

  @media (max-width: 1280px) {
    margin-top: 125px;
    margin-bottom: 150px;}
`;

export const CBDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex-direction: column;
  margin-top: 20px; 
  margin-left: 100px;

`;

export const CBimg = styled.img`
    width: 109%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1180px) {
        height: 120%;
        width: 120%;
        margin-top: 70px;
    }
`;

export const ImgDiv = styled.div`
  width: 54%;
  height: 50%;
  margin-right: 66px; 
  margin-left: auto;
  display: flex;

`;

export const CBh1 = styled.h1`
  width: 455px;
  height: 132px;
  font-weight: 600;
  font-size: 32px;
  color: #000000; 
  margin-bottom: 10px;
  
  @media (min-width: 1180px) and (max-width: 1280px) {
      font-size: 27px;
      width: 430px;
      margin-bottom: -50px;
    }

  @media (min-width: 1080px) and (max-width: 1180px) {
      width: 410px;
      font-size: 25px;
      margin-bottom: -50px;
    }

  @media (min-width: 980px) and (max-width: 1080px) {
      width: 370px;
      font-size: 23px;
      padding-left: 10px;
      margin-bottom: -70px;
    }

  @media (max-width: 980px) {
      width: 340px;
      font-size: 20px;
      margin-bottom: -70px;
      padding-left: 0;
  }
`;

export const CBp = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #1A0289;
  opacity: 40%;
  line-height: 32px;
  text-align: center;

  @media (min-width: 1180px) and (max-width: 1280px) {
      font-size: 22px;
      margin-bottom: 5px;
  }

  @media (min-width: 980px) and (max-width: 1180px) {
      font-size: 20px;
      margin-bottom: 4px;
  }

  @media (min-width: 980px) and (max-width: 1080px) {
      padding-left: 10px;
  }

  @media (max-width: 980px) {
      font-size: 18px;
      margin-bottom: 4px;
      padding-left: 0;
  }
`;

export const PurpleText = styled.span`
  color: #1A0289;
  font-weight: 600;
`;

export const CBp2 = styled.p`
  font-size: 20px;
  font-weight: normal;
  color: #000;
  width: 455px;
  text-align: left;

  @media (min-width: 1080px) and (max-width: 1280px) {
      font-size: 17px;
      width: 455px;
  }
  @media (min-width: 980px) and (max-width: 1080px) {
      font-size: 16px;
      width: 415px;
      padding-left: 10px;
  }
  @media (max-width: 980px) {
      font-size: 15px;
      width: 376px;
      padding-left: 0;
  }
`;