import React, { useEffect, useRef, useState } from 'react';
import { Header } from '../../components/Header';

import { Container, Content, MenuFloatStyle } from './styles'
import './styles.css'

import { ContentDashboard } from '../../components/ContentDashboard';
import { Menu } from '../../components/Menu';

import { BiUser, FaUserCircle, MdMoreHoriz, MdDeleteOutline, BiSearch, BiEdit } from 'react-icons/all';

import CreatePatient from '../../components/CreatePatient';
import { ToastContainer } from 'react-toastify';
import Button from '../../components/Button';
import { api } from '../../services/api';
import { NavLink } from 'react-router-dom';

export function CadastroCliente() {
    const [pactients, setPatients] = useState([]);

    const [listUpdate, setListUpdate] = useState([]);

    const [showAll, setShowAll] = useState(true)

    const [search, setSearch] = useState([])

    // estado para abrir menu de opções
    const [openMenu, setOpenMenu] = useState('')

    const [controllerOpenMenu, setControllerOpenMenu] = useState(false)

    // estado pra abrir modal
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        if (showAll === true) {
            api.get('/patients')
                .then(res => {
                    const listPatient = res.data.data;
                    return setPatients(listPatient)
                })
        }

        function updateList() {
            setPatients(listUpdate)
        }
        updateList()

        if (search.length !== 0) {
            function updateSearch() {
                setPatients(search)
            }
            updateSearch()
        }

        setControllerOpenMenu(false)

    }, [listUpdate, search]);

    function handleDelete(id) {
        api.delete('/patients/' + id)

        api.get('/patients')
            .then(res => {
                const listPatient = res.data.data;
                return setListUpdate(listPatient)
            })
        setShowAll(true)
    };

    function limpList() {
        return setPatients([])
    }

    function handleUpdateList() {
        api.get('/patients')
            .then(res => {
                const listPatient = res.data.data;
                return setListUpdate(listPatient)
            })
        setShowAll(true)
    };

    function handleSearchPatient(e) {
        e.preventDefault()

        let name = document.querySelector('#search-patient').value

        if (name === '') {
            api.get('/patients')
                .then(res => {
                    const listPatient = res.data.data;
                    return setPatients(listPatient)
                })
            setShowAll(true)
        } else {
            api.get('/patients/search/' + name)
                .then(res => {
                    const listPatient = res.data.data;

                    if (listPatient.length === 0) {
                        setShowAll(false)
                        return setSearch([]), setListUpdate([])
                    } else {

                        setShowAll(false)

                        return setSearch(listPatient)
                    }

                })

        }

    }

    /* function handleOpenMenu() {
        document.body.addEventListener('click', function (e) {
            var target = e.target

            if (target.className === 'menu-float' || target.parentNode.className === 'item-patient-options')
                setControllerOpenMenu(true)
            else
                setControllerOpenMenu(false)
        });
    } */


    return (
        <Container>
            <Menu />
            <Content>
                <Header page="Pacientes" icon={<BiUser size={28} />} />
                <ContentDashboard>
                    <div className="header-patients">
                        <div className="header-patients-count">
                            <h2>{pactients.length}</h2>Pacientes
                            <div className="header-patients-search">
                                <form action="">
                                    <input type="search" name="search-patient" id="search-patient" placeholder='Pesquisar por paciente' />

                                    <button onClick={(e) => {
                                        handleSearchPatient(e)
                                    }
                                    }><BiSearch size={18} color={'#79868f'} /></button>

                                </form>
                            </div>
                        </div>

                        <Button onClick={() => {
                            setOpenModal(true)
                        }} title="Novo paciente" create className="form-patient" />
                        {openModal && <CreatePatient closeModal={setOpenModal} updateList={handleUpdateList} limpList={limpList} />}
                    </div>

                    <table className="content-patients">
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                <th>Informações básica</th>
                                <th>Telefone</th>
                                <th>Cidade</th>
                                <th>Próximo atendimento</th>
                                <th>Último atendimento</th>
                                <th>Data de cadastro</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pactients.map((item) => {

                                    function adicionaZero(numero) {
                                        if (numero <= 9)
                                            return "0" + numero;
                                        else
                                            return numero;
                                    }

                                    function formatingDate(item) {
                                        let data = new Date(item)
                                        let dataFormating = (adicionaZero(data.getDate().toString()) + "/" + (adicionaZero(data.getMonth() + 1).toString()) + "/" + data.getFullYear())

                                        return dataFormating
                                    }

                                    return (
                                        // <div key={item.id} className="item-patient">
                                        <>
                                            <tr>
                                                <td>
                                                    <input type="checkbox" value={item.id} />
                                                </td>

                                                <td>
                                                    <div className="item-patient-avatar">
                                                        <FaUserCircle size={52} color={'#f1f1f1'} />
                                                    </div>
                                                    <div className="item-patient-name">
                                                        {item.name}
                                                        <span>{item.email}</span>
                                                    </div>
                                                </td>

                                                <td>

                                                    <div className="item-patient-phone">
                                                        {item.phone}
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="item-patient-city">
                                                        {item.address_city}
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="item-patient-next-appointment">
                                                        {formatingDate(item.updated_at)}
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="item-patient-last-appointment">
                                                        {formatingDate(item.updated_at)}
                                                    </div>

                                                </td>

                                                <td>
                                                    <div className="item-patient-rigister">
                                                        {formatingDate(item.created_at)}
                                                    </div>

                                                </td>

                                                <td>
                                                    <div className="item-patient-options">
                                                        <MenuFloatStyle className={`menu-float`} show={openMenu === item.id && controllerOpenMenu ? true : false} id={`${item.id}`}>
                                                            <div className="menu-float-item">
                                                                <NavLink to={'/pacientes/' + item.id}>
                                                                    <BiEdit />
                                                                    Editar paciente
                                                                </NavLink>
                                                            </div>
                                                            <div className="menu-float-item">
                                                                <button style={{ backgroundColor: 'transparent' }} onClick={() => {
                                                                    handleDelete(item.id)
                                                                }}><MdDeleteOutline />
                                                                    Apagar paciente</button>
                                                            </div>
                                                        </MenuFloatStyle>
                                                        <button key={item.id} onClick={() => {
                                                            setOpenMenu(item.id)

                                                            /*  if (controllerOpenMenu === true) {
                                                                 handleOpenMenu()
                                                             } */

                                                            controllerOpenMenu ? setControllerOpenMenu(false) : setControllerOpenMenu(true)

                                                        }} className='more-button'><MdMoreHoriz size={20} /></button>
                                                    </div>
                                                </td>
                                            </tr>

                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {
                        (pactients.length === 0) ? <div className='no-result-search' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <h1>Nada aqui!</h1>
                        </div> : null
                    }
                </ContentDashboard>
            </Content>
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
        </Container >
    )
}