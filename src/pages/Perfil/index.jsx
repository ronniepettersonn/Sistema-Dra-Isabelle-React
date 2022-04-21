import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { ContentDashboard } from '../../components/ContentDashboard';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';

import { Container, Content } from './styles';

export function Perfil() {
    return (
        <Container>
            <Menu />
            <Content>
                <Header page="Agenda" icon={<BiCalendar size={28} />} />
                <ContentDashboard>
                    <h1>Agenda</h1>
                </ContentDashboard>
            </Content>
        </Container>
    );
}

