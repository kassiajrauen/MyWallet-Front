import React, { useState } from 'react';
import { Container, StyledLink } from './styles';
import { useNavigate } from 'react-router-dom';

function SingUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return(
        <Container>
            <img src='../../assets/MyWallet.png' alt='' />
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
            type='confirmPassword'
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            placeholder='Confirme a senha'
            required
            />
            <button type='submit'>Cadastrar</button>
            <StyledLink to='/'>
                <span>Já tem uma conta? Entre agora!</span>
            </StyledLink>
        </Container>
    )
}

export default SingUp;