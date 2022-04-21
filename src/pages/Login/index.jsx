import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa'
import { Link, Navigate } from 'react-router-dom';
import { Flip, toast, ToastContainer } from 'react-toastify';
import Button from '../../components/Button';
import { AuthGoogleContext } from '../../context/authGoogle';

import 'react-toastify/dist/ReactToastify.css';

import './styles.css';

export function Login() {

    const { signInGoogle, signed, signInEmail, auth } = useContext(AuthGoogleContext)

    async function loginGoogle() {
        await signInGoogle()
    }

    // chama o Toast
    const notifyError = () => toast.warn('Preencha e-mail e senha!', {
        transition: Flip,
    })


    // Função entrar com email e senha usando firebase
    async function loginEmail(e) {
        e.preventDefault()
        let email = document.querySelector('#email').value
        let password = document.querySelector('#password').value

        if (!email || !password) {
            notifyError()
        } else {
            await signInEmail(auth, email, password)
        }
    }

    if (!signed) {
        return (

            <div className='container'>

                <h1>Faça seu login</h1>
                <form action="/" method='POST'>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" placeholder='Digite seu e-mail' name='email' id='email' />

                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" placeholder='Digite sua senha' />

                    <button type='submit' onClick={loginEmail} id="buttonLogin">Entrar</button>
                </form>
                <Link to='/signup'>
                    <Button title='Criar nova conta' className='buttonOutline' />
                </Link>
                <div className="other-login">
                    <div className="line"></div>
                    <div className="other">ou</div>
                    <div className="line"></div>
                </div>

                <button onClick={() => loginGoogle()} className='buttonOutline'>Entrar com Google <FaGoogle /></button>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover

                />
            </div>
        )
    } else {
        return (
            <Navigate to="home" />
        )
    }

}

