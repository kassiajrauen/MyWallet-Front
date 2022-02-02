import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background-color:#8C11BE;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  img {
    margin-bottom: 24px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
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

const StyledLink = styled(Link)`
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 700;
  justify-content: center;
  margin-top: 36px;
`;

export { Container, StyledLink };