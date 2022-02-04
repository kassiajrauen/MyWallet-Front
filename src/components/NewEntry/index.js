import axios from 'axios';
import React, { useState } from 'react';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

function NewEntry(){
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function handleNewEntry(e) {
        setLoading(true);
        e.preventDefault();

        const promise = axios.post('http://localhost:5000/new-entry', {value: value, description: description});
        
        setTimeout(() => {
            promise.then(() => {
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
            <div className="header"><h1>Nova entrada</h1></div>
            <div className="info-submit">
                <form onSubmit={handleNewEntry}>   
                    <input
                    type='text'
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    placeholder='Valor'
                    required
                    />
                    <input
                    type='text'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder='Descrição'
                    required
                    />
                    <button type='submit'>{loading ? <Loading/> :'Salvar entrada'}</button>
                </form>
            </div>
        </Container>
    )
    
    function Loading() {
        return (
          <span color='#FFFFFF' height={50} width={50}>
            Salvando...
          </span>
        );
      }
}

export default NewEntry;