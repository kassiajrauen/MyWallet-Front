import axios from 'axios';
import React, {useState, useContext} from 'react';
import { Container, StyledLink } from './styles';
import { useNavigate } from 'react-router-dom';
import {TokenContext} from "../../contexts/TokenContext";
import {UserContext} from "../../contexts/UserContext";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const {setToken} = useContext(TokenContext);
    const {setUser} = useContext(UserContext);
  
    const navigate = useNavigate();

    function handleLogin(e) {
        setLoading(true);
        e.preventDefault();

        const promise = axios.post('http://localhost:5000/login', {email: email, password: password});
        
        setTimeout(() => {
            promise.then((response) => {
            setUser({name: response.data.name});
            setToken(response.data.token);
            navigate('/home');
        });
        }, 1000);
        promise.catch((error) => {
            setLoading(false);
            alert(error.response.data.message);
        });

    }

    return(
        <Container> 
                <img src='../../assets/MyWallet.png' alt='' />
                <form onSubmit={handleLogin}>
                    <input
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder='E-mail'
                    />         
                    <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder='Senha'
                    />    
                    <button type='submit'>{loading ? <Loading/> :'Entrar'}</button>
                </form>
                <StyledLink to='/sign-up'>
                    <span>Primeira vez? Cadastre-se!</span>
                </StyledLink>
                </Container>
    )

    function Loading() {
        return (
          <span color='#FFFFFF' height={50} width={50}>
            Carregando...
          </span>
        );
      }
}

export default Login;