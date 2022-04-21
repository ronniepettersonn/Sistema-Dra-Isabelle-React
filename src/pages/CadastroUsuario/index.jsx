import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function CadastroUsuario() {
    return (
        <div className='container'>
            <h1>Criar uma conta</h1>
            <form action="/" method='POST'>
                <label htmlFor="name">Nome</label>
                <input type="text" placeholder='Digite seu nome' name='name' id='name' />

                <label htmlFor="email">E-mail</label>
                <input type="text" placeholder='Digite seu e-mail' name='email' id='email' />

                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" placeholder='Digite sua senha' />

                <label htmlFor="password-confirm">Confirmar senha</label>
                <input type="password" name="password-confirm" id="password-confirm" placeholder='Digite sua senha' />

                <button type='submit'>Cadastrar</button>
            </form>

            <span> Ja tem uma conta? <Link to='/'>Faça seu login</Link></span>
        </div>
    );
}

export default CadastroUsuario;