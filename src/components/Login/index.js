import React, {useState} from 'react';
import { Container, StyledLink } from './styles';
import { useNavigate } from 'react-router-dom';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
  
    const navigate = useNavigate();

    return(
        <Container> 
                <img src='../../assets/MyWallet.png' alt='' />
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
                <button type='submit'>Entrar</button>
                <StyledLink to='/sign-up'>
                    <span>Primeira vez? Cadastre-se!</span>
                </StyledLink>
                </Container>
    )
}

export default Login;