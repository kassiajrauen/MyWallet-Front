import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background-color:#8C11BE;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  .header{
      width: 326px;
      justify-content: space-between;
      align-items: center;
      margin-top: 25px;

      h1{
          color: #FFFFFF;
          font-size: 26px;
          font-weight:700;
      }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
  }

  .info-submit{
      display: column;
      margin-top: 40px;
      padding-left: 25px
  }

  input {
    background: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    box-sizing: borderbox;
    color:#000000;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 400;
    height: 58px;
    padding-left: 14px;
    margin-bottom: 13px;
    width: 326px;
  }

  input::placeholder {
    color: #000000;
  }

  button {
    background: #A328D6;
    border: 1px solid #A328D6;
    border-radius: 8px;
    color: #ffffff;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 700;
    height: 46px;
    width: 326px;
  }
`;

export{ Container};