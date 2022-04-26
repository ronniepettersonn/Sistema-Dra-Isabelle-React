import React from 'react';

import { BiCalendar, BiUser, MdSettings, RiDashboard2Line, AiOutlineDashboard } from 'react-icons/all'

import Logo from '/images/Logo.svg'

import { ItemMenu } from '../ItemMenu';

import { ListMenu, LogoImg, Container, Aside, } from './styles'
import { NavLink, Link } from 'react-router-dom';

export function Menu(props) {
    return (
        <>
            <Aside>
                <Container>
                    <LogoImg src={Logo} alt="Logo" />
                </Container>
                <ListMenu>
                    <NavLink to="/home" style={({ isActive }) => ({
                        background: isActive ? '#cabb93' : 'transparent',
                        textDecoration: 'none',
                        color: isActive ? '#fff' : '#010f1d',
                        ':hover': {
                            color: isActive ? '#fff' : '#cabb93',
                            background: isActive ? '#fff' : '#cabb93',
                        }
                    })} >
                        <ItemMenu title="Daschboard" icon={<AiOutlineDashboard size={20} />} />
                    </NavLink>
                    <NavLink to="/perfil" style={({ isActive }) => ({
                        background: isActive ? '#cabb93' : 'transparent',
                        textDecoration: 'none',
                        color: isActive ? '#fff' : '#010f1d',
                        '&:hover': {
                            color: isActive ? '#fff' : '#cabb93'
                        }
                    })}>
                        <ItemMenu title="Agenda" icon={<BiCalendar size={20} />} />
                    </NavLink>
                    <NavLink to="/pacientes" style={({ isActive }) => ({
                        background: isActive ? '#cabb93' : 'transparent',
                        textDecoration: 'none',
                        color: isActive ? '#fff' : '#010f1d',
                        '&:hover': {
                            color: isActive ? '#fff' : '#cabb93'
                        }
                    })}>
                        <ItemMenu title="Pacientes" icon={<BiUser size={20} />} />
                    </NavLink>
                    <NavLink to="/fichas" style={({ isActive }) => ({
                        background: isActive ? '#cabb93' : 'transparent',
                        textDecoration: 'none',
                        color: isActive ? '#fff' : '#010f1d',
                        '&:hover': {
                            color: isActive ? '#fff' : '#cabb93'
                        }
                    })}>
                        <ItemMenu title="Configurações" icon={<MdSettings size={20} />} />
                    </NavLink>
                </ListMenu>
            </Aside>
        </>
    );
}

