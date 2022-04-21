import React from 'react';
import { Header } from '../../components/Header';


import './styles.css'
import { Container, Content, Span, PrimaryCard, SecondaryCard, DashboardDisplay, SecondaryCardItem1 } from './styles';

import { Chart } from "react-google-charts";

import { ContentDashboard } from '../../components/ContentDashboard';
import { Menu } from '../../components/Menu';

import { AiOutlineDashboard, AiOutlineRight } from 'react-icons/ai';

export function Home() {
    let userLogged = JSON.parse(sessionStorage.getItem('@AuthFireBase:user'));

    const data = [
        ["Meses", "Particular", "Convênio"],
        ["Jan", 63, 20],
        ["Fev", 50, 15],
        ["Mar", 57, 25],
        ["Abr", 35, 22],
        ["Mai", 58, 18],
        ["Jun", 70, 15],
        ["Jul", 48, 13],
        ["Ago", 51, 17],
        ["Set", 49, 19],
        ["Out", 42, 20],
        ["Nov", 39, 22],
        ["Dez", 55, 25],
    ];

    var options = {
        hAxis: {
            titleTextStyle: { color: '#fff' },
            gridlines: { color: '#fff', count: 0 },
            textStyle: { color: '#fff', fontName: 'Roboto', fontSize: '12', bold: true },
            baselineColor: '#263254',
            backgroundColor: 'transparent',

        },
        vAxis: {
            minValue: 0,
            gridlines: { color: 'rgb(168, 155, 121)', count: 2 },
            textStyle: { color: '#fff', fontName: 'Roboto', fontSize: '12', bold: true },
            baselineColor: 'rgb(168, 155, 121)',
            backgroundColor: 'transparent',

        },
        legend: { position: 'top', alignment: 'center', textStyle: { color: '#fff', fontName: 'Roboto', fontSize: '12' } },
        colors: ["rgb(255, 231, 172)", "#f16868"],
        areaOpacity: 0.24,
        lineWidth: 1,
        backgroundColor: {
            fill: 'transparent'
        },
        chart: {
            title: 'Teste',
            subtitle: 'Teste de subtitulo'
        },
        chartArea: {
            width: '90%',
            //height: '70%'
        },
        height: 250, // example height, to make the demo charts equal size
        width: '100%',
        pieSliceBorderColor: '#263238',
        pieSliceTextStyle: { color: '#607d8b' },
        pieHole: 0.9,
        bar: { groupWidth: "10", },
        colorAxis: { colors: ["#3f51b5", "#2196f3", "#03a9f4", "#00bcd4"], backgroundColor: 'transparent' },
        datalessRegionColor: '#37474f',
        displayMode: 'regions'
    };

    return (
        <Container>
            <Menu />
            <Content>
                <Header page="Dashboard" icon={<AiOutlineDashboard size={28} />} />
                <ContentDashboard>
                    <DashboardDisplay className="dashboard">
                        <PrimaryCard className="patientToday">
                            <Span>Bom dia, Dr.(a) <strong>{userLogged.displayName}.</strong></Span>
                            <Chart
                                chartType="ColumnChart"
                                data={data}
                                options={options}
                            //style={{ marginTop: '10px' }}
                            />
                        </PrimaryCard>
                        <SecondaryCard>
                            <div className="section1-card">
                                <SecondaryCardItem1 className='secondary-card-item1'>
                                    <h4>Aproval Request</h4>
                                    <p>26</p>
                                    <span>Requisições à serem aprovadas</span>
                                    <a href="#">
                                        Mais
                                        <div className="button">
                                            <AiOutlineRight color='#fff' size={10} />
                                        </div>
                                    </a>
                                </SecondaryCardItem1>
                                <SecondaryCardItem1 className='secondary-card-item1'>
                                    <h4>Aproval Request</h4>
                                    <p>26</p>
                                    <span>Requisições à serem aprovadas</span>
                                    <a href="#">
                                        Mais
                                        <div className="button">
                                            <AiOutlineRight color='#fff' size={10} />
                                        </div>
                                    </a>
                                </SecondaryCardItem1>
                            </div>
                            <div className="secondary-card-item2">
                                <h4>Aproval Request</h4>
                                <p>26</p>
                                <span>Requisições à serem aprovadas</span>
                                <a href="#">
                                    Mais
                                    <div className="button">
                                        <AiOutlineRight color='#fff' size={10} />
                                    </div>
                                </a>
                            </div>
                        </SecondaryCard>
                        <SecondaryCard>
                            <div className="section1-card">
                                <SecondaryCardItem1 className='secondary-card-item1'>
                                    <h4>Aproval Request</h4>
                                    <p>26</p>
                                    <span>Requisições à serem aprovadas</span>
                                    <a href="#">
                                        Mais
                                        <div className="button">
                                            <AiOutlineRight color='#fff' size={10} />
                                        </div>
                                    </a>
                                </SecondaryCardItem1>
                            </div>
                            <div className="secondary-card-item2">
                                <h4>Aproval Request</h4>
                                <p>26</p>
                                <span>Requisições à serem aprovadas</span>
                                <a href="#">
                                    Mais
                                    <div className="button">
                                        <AiOutlineRight color='#fff' size={10} />
                                    </div>
                                </a>
                            </div>
                        </SecondaryCard>
                        <SecondaryCard>
                            <div className="section1-card">
                                <SecondaryCardItem1 className='secondary-card-item1'>
                                    <h4>Aproval Request</h4>
                                    <p>26</p>
                                    <span>Requisições à serem aprovadas</span>
                                    <a href="#">
                                        Mais
                                        <div className="button">
                                            <AiOutlineRight color='#fff' size={10} />
                                        </div>
                                    </a>
                                </SecondaryCardItem1>
                            </div>
                            <div className="secondary-card-item2">
                                <h4>Aproval Request</h4>
                                <p>26</p>
                                <span>Requisições à serem aprovadas</span>
                                <a href="#">
                                    Mais
                                    <div className="button">
                                        <AiOutlineRight color='#fff' size={10} />
                                    </div>
                                </a>
                            </div>
                        </SecondaryCard>
                    </DashboardDisplay>
                </ContentDashboard>
            </Content>
        </Container>
    )
}

