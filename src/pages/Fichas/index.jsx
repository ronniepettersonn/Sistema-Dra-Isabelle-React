import React from 'react';
import { MdSettings } from 'react-icons/md';
import { ContentDashboard } from '../../components/ContentDashboard';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';

import { Container, Content } from './styles';

export function Fichas() {
    return (
        <Container>
            <Menu />
            <Content>
                <Header page="Configurações" icon={<MdSettings size={28} />} />
                <ContentDashboard>
                    <h1>Configurações</h1>
                </ContentDashboard>
            </Content>
        </Container>
    );
}

