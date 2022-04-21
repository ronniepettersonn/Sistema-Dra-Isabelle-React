import React, { useContext } from 'react';
import Button from '../../components/Button';
import { AuthGoogleContext } from '../../context/authGoogle';
import { BiSearch, FaBell } from 'react-icons/all'

import './styles.css';
import { Navigate } from 'react-router-dom';

export function Header(props) {
    const { signOut } = useContext(AuthGoogleContext);

    let userLogged = JSON.parse(sessionStorage.getItem('@AuthFireBase:user'));

    if (userLogged === null) {
        return <Navigate to='/' />
    }

    return (
        <div className='header'>
            <span>{props.icon} <strong>{props.page}</strong></span>
            <div className="header-perfil">
                <BiSearch id='iconSearch' size={14} />
                <input type="search" name="search" id="search" placeholder='Buscar' />
                <div className="notify">
                    <FaBell />
                </div>
                <Button title="Logout" onClick={() => signOut()} logout />
            </div>
        </div>

    );

}