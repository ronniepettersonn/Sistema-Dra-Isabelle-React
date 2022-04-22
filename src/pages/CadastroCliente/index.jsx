import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';

import { Container, Content } from './styles'
import './styles.css'

import { ContentDashboard } from '../../components/ContentDashboard';
import { Menu } from '../../components/Menu';
import { BiUser, FaUserCircle, MdMoreHoriz } from 'react-icons/all';

import CreatePatient from '../../components/CreatePatient';
import { ToastContainer } from 'react-toastify';
import Button from '../../components/Button';
import { api } from '../../services/api';
import { NavLink } from 'react-router-dom';

export function CadastroCliente() {
    const [pactients, setPatients] = useState([]);

    useEffect(() => {
        api.get('/patients')
            .then(res => {
                const listPatient = res.data.data;
                return setPatients(listPatient)
            })
    }, [pactients])

    const [openModal, setOpenModal] = useState(false)

    return (
        <Container>
            <Menu />
            <Content>
                <Header page="Pacientes" icon={<BiUser size={28} />} />
                <ContentDashboard>
                    <div className="header-patients">
                        <h2>Pacientes</h2>
                        <Button onClick={() => setOpenModal(true)} title="Novo paciente" create className="form-patient" />
                        {openModal && <CreatePatient closeModal={setOpenModal} />}
                    </div>

                    <div className="content-patients">

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
                                    <div key={item.id} className="item-patient">
                                        <input type="checkbox" style={{ marginRight: '15px' }} value={item.id} />
                                        <div className="item-patient-avatar">
                                            <FaUserCircle size={52} color={'#f1f1f1'} />
                                        </div>
                                        <div className="item-patient-name">
                                            {item.name}
                                            <span>{item.email}</span>
                                        </div>
                                        <div className="item-patient-phone">
                                            {item.phone}
                                        </div>
                                        <div className="item-patient-city">
                                            {item.address_city}
                                        </div>
                                        <div className="item-patient-next-appointment">
                                            {formatingDate(item.updated_at)}
                                        </div>
                                        <div className="item-patient-last-appointment">
                                            {formatingDate(item.updated_at)}
                                        </div>
                                        <div className="item-patient-rigister">
                                            {formatingDate(item.created_at)}
                                        </div>
                                        <div className="item-patient-options">
                                            <NavLink to={'/cadastro/cliente/' + item.id}>
                                                <button className='more-button'><MdMoreHoriz size={20} /></button>
                                            </NavLink>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
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