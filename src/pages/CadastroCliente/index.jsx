import React, { useState } from 'react';
import { Header } from '../../components/Header';

import { Container, Content } from './styles'

import { ContentDashboard } from '../../components/ContentDashboard';
import { Menu } from '../../components/Menu';
import { BiUser } from 'react-icons/bi';
import Modal from '../../components/Modal';
import CreatePatient from '../../components/CreatePatient';
import { ToastContainer } from 'react-toastify';

export function CadastroCliente() {
    const [openModal, setOpenModal] = useState(false)

    return (
        <Container>
            <Menu />
            <Content>
                <Header page="Pacientes" icon={<BiUser size={28} />} />
                <ContentDashboard>
                    <h1>Pacientes</h1>
                    <button onClick={() => setOpenModal(true)}>Abrir modal</button>
                    {openModal && <CreatePatient closeModal={setOpenModal} />}
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
        </Container>
    )
}