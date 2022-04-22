import React from 'react';
import { MdSettings } from 'react-icons/md';
import { ContentDashboard } from '../../components/ContentDashboard';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Container, Content } from '../Fichas/styles';

// import { Container } from './styles';

function DetailsPatient() {
    return (
        <Container>
            <Menu />
            <Content>
                <Header page="Configurações" icon={<MdSettings size={28} />} />
                <ContentDashboard>
                    <h1>Detalhe paciente</h1>
                </ContentDashboard>
            </Content>
        </Container>
    );
}

export default DetailsPatient;