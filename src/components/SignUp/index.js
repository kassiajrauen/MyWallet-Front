import axios from 'axios';
import React, { useState } from 'react';
import { Container, StyledLink } from './styles';
import { useNavigate } from 'react-router-dom';

function SingUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState('false');

    const navigate = useNavigate();

    function handleSignup(e){
    setLoading(true);
    e.preventDefault();
    
    console.log({name: name, email: email, password: password, confirmPassword: confirmPassword})

    const promise = axios.post('http://localhost:5000/sign-up', {name: name, email: email, password: password, confirmPassword: confirmPassword});
    setTimeout(() => {
        promise.then(() => {
        navigate('/');
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
            <form onSubmit={handleSignup}>
                <input
                type='name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder='Nome'
                required
                />
                <input
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder='E-mail'
                required
                />
                <input
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder='Senha'
                required
                />
                <input
                type='password'
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                placeholder='Confirme a senha'
                required
                />
                <button type='submit'>{!loading ? <Loading/> : 'Cadastrar'}</button>
            </form>
            <StyledLink to='/'>
                <span>Já tem uma conta? Entre agora!</span>
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
export default SingUp;