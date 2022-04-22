import React, { useContext, useState } from 'react';
import Button from '../../components/Button';
import { AuthGoogleContext } from '../../context/authGoogle';
import { BiSearch, FaBell } from 'react-icons/all'

import './styles.css';
import { Navigate } from 'react-router-dom';
import { Notification } from '../Notification';

export function Header(props) {
    // State para mostrar e esconder a bolinha de notificação
    const [notification, setNotification] = useState(true)

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
                <button className="notify" onClick={() => setNotification(!notification)}>
                    {
                        notification ? <Notification className="icon-notification" ></Notification> : null
                    }
                    <FaBell />
                </button>
                <Button title="Logout" onClick={() => signOut()} logout />
            </div>
        </div>

    );

}