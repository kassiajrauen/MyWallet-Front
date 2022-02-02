import React from 'react';
import { Container } from './styles';

function Home(){

    return(
        <Container>
            <div className="header">
                <h1>Olá, Fulano</h1>
                <img src='../../assets/Exit.png' alt=""/>
            </div>
            <div className="historic">
                <span>Não há registros de entrada ou saída</span>
            </div>
            <div className="buttons">
                <button>
                    <img src='../../assets/Plus-circle-outlined.png' alt=""/>
                    Nova entrada</button>
                <button>
                    <img src='../../assets/Minus-circle-outlined.png' alt=""/>
                    Nova Saída</button>
            </div>
        </Container>
    )
}

export default Home;