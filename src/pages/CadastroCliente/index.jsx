import React from 'react';
import { Header } from '../../components/Header';

import { Container, Content } from './styles'

import { ContentDashboard } from '../../components/ContentDashboard';
import { Menu } from '../../components/Menu';
import { BiUser } from 'react-icons/bi';

export function CadastroCliente() {
    return (
        <Container>
            <Menu />
            <Content>
                <Header page="Pacientes" icon={<BiUser size={28} />} />
                <ContentDashboard>
                    <h1>Pacientes</h1>
                </ContentDashboard>
            </Content>
        </Container>
    )
}