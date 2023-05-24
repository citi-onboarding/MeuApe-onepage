import styled from 'styled-components';

export const HomeContainer = styled.div`
    
    width: 1251px;
    margin: 0 auto;  

    .home-section {
      position: relative;
      height: 50vh;
      margin-left: 36px;
      margin-top: 160px;
    }
    
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: left;
    }
    
    .content {
      text-align: left;
      color: #fff;
      line-height: 85px;
      letter-spacing: 1.5px;
    }
    
    .content h2 {
      font-size: 68px;
    }
    
    .content button {
      background-color: #1A0289;
      margin-top: 20px;
      color: #fff;
      padding: 10px 17px;
      border: none;
      font-size: 18px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      letter-spacing: 1px;
    }

    .highlight-line {
      position: absolute;
      left: 0;
      width: 36.5%;
      height: 4px;
      background-color: #1A0289;
      margin-top: -273px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }
  }
`;