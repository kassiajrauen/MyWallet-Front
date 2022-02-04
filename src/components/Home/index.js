import React from 'react';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();

    return(
        <Container>
            <div className="header">
                <h1>Olá, Fulano</h1>
                <img onClick={() => navigate('/')} src='../../assets/Exit.png' alt=""/>
            </div>
            <div className="historic">
                <span>Não há registros de entrada ou saída</span>
            </div>
            <div className="buttons">
                <button onClick={() => navigate('/new-entry')}>
                    <img src='../../assets/Plus-circle-outlined.png' alt=""/>
                    Nova entrada</button>
                <button onClick={() => navigate('/new-exit')}>
                    <img src='../../assets/Minus-circle-outlined.png' alt=""/>
                    Nova Saída</button>
            </div>
        </Container>
    )
}

export default Home;