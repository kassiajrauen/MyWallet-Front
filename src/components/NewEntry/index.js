import React, { useState } from 'react';
import { Container } from './styles';

function NewEntry(){
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    return(
        <Container>
            <div className="header"><h1>Nova entrada</h1></div>
            <div className="info-submit">
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
                <button type='submit'>Salvar entrada</button>
            </div>
        </Container>
    )
}

export default NewEntry;