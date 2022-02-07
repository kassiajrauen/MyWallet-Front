import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  background-color:#8C11BE;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  div{
      display: flex;
}

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

.historic{
    width: 326px;
    height: 446px;
    background-color: #FFFFFF;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
    margin-bottom: 14px;
    flex-direction: column;
    
    span{
        text-align: center;
        line-height: 24px;
        width: 180px;
        color: #868686;
        font-size: 20px;
        font-weight: 400;

        .date{
            color: #C6C6C6;
        }

        .description{
            color: #000000;
        }

        .value-entry{
            color: #03AC00;
        }

        .value-exit{
            color: #C70000;
        }
    }
}

.buttons{
    gap: 15px;

}
button{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    width: 156px;
    height: 114px;
    color: #FFFFFF;
    background-color: #A328D6;
    border-radius: 5px;
    border: 1px solid #A328D6;
    font-size: 18px;
    font-weight: 700;
}
`

export{ Container};