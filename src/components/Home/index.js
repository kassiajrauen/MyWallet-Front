import axios from 'axios';
import React, {useEffect, useState, useContext} from 'react';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import TokenContext from "./contexts/TokenContext";
import UserContext from "./contexts/UserContext";

function Home(){
    const navigate = useNavigate();
    const [historic, setHistoric] = useState([]);
    const {token} = useContext(TokenContext);
    const {user} = useContext(UserContext);

    useEffect(() => {
       axios.get('http://localhost:5000/home', {
           headers: { Authorization: `Bearer ${token}`,}
       })
        .then((response) => {            
            setHistoric(response.data);
            console.log(response)
        })
        .catch((error) => {
            alert(error.response.data.message);
        });
    }, []);

    return(
        <Container>
            <div className="header">
                <h1>Olá, {user.name}</h1>
                <img onClick={() => navigate('/')} src='../../assets/Exit.png' alt=""/>
            </div>
            <div className="historic">{
                historic ? historic?.map((object) => (
                    <div>
                        <span className="date">{dayjs(object.date).format("DD/MM")}</span>
                        <span className="description">{object.description}</span>
                        <span className={`value-${object.type}`}>{object.value}</span>
                    </div>
                    ))
                    : <span>Não há registros de entrada ou saída</span>  }         
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