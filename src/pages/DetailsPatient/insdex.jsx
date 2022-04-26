import React, { useEffect, useState } from 'react';
import { MdSettings } from 'react-icons/md';
import Button from '../../components/Button';
import { ContentDashboard } from '../../components/ContentDashboard';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { api } from '../../services/api';
import { Container, Content } from '../Fichas/styles';

import './styles.css'

function DetailsPatient() {

    const [patient, setPatient] = useState([]);

    // pegar id do paciente passado na URL
    let url = window.location.href
    let result = url.split('/')
    let id = result[result.length - 1]

    useEffect(() => {
        api.get('/patients/' + id)
            .then(res => {
                const listPatient = res.data.data;
                return setPatient(listPatient)
            })
    }, [])

    return (
        <Container>
            <Menu />
            <Content>
                <Header page="Configurações" icon={<MdSettings size={28} />} />
                <ContentDashboard>
                    <div className="card-pessoal-info">
                        {
                            patient.map(patientData => {
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
                                    <>
                                        <div className="section1-card-pessoal-info">
                                            <img src="https://github.com/ronniepettersonn.png" alt="Foto perfil" />
                                            <h3 key={patientData.id}>{patientData.name}</h3>
                                            <span className='email' key={patientData.id}>{patientData.email}</span>
                                            <div className="info">
                                                <section className='attendances'>
                                                    <strong>5</strong>
                                                    <span>atendimentos</span>
                                                </section>
                                                <section className='last-attendance'>
                                                    <strong>1</strong>
                                                    <span>próximos</span>
                                                </section>
                                            </div>

                                            <Button title="Editar perfil" edit />
                                        </div>
                                        <div className="section2-card-pessoal-info">
                                            <div className="info">
                                                <section>
                                                    <span>CPF:</span>
                                                    <p key={patientData.cpf}>{patientData.cpf}</p>
                                                </section>
                                                <section>
                                                    <span>Celular</span>
                                                    <p key={patientData.phone}>{patientData.phone}</p>
                                                </section>
                                                <section>
                                                    <span>Data cadastro</span>
                                                    <p key={patientData.id}>{formatingDate(patientData.created_at)}</p>
                                                </section>
                                            </div>

                                            <div className="info">
                                                <section>
                                                    <span>Endereço:</span>
                                                    <p key={patientData.cpf}>{`${patientData.address}, ${patientData.address_number}`}</p>
                                                </section>
                                                <section>
                                                    <span>Cidade</span>
                                                    <p key={patientData.phone}>{patientData.address_city}</p>
                                                </section>
                                                <section>
                                                    <span>UF:</span>
                                                    <p key={patientData.id}>{patientData.address_state}</p>
                                                </section>
                                            </div>

                                            <div className="info">
                                                <section>
                                                    <span>CPF:</span>
                                                    <p key={patientData.cpf}>{patientData.cpf}</p>
                                                </section>
                                                <section>
                                                    <span>Celular</span>
                                                    <p key={patientData.phone}>{patientData.phone}</p>
                                                </section>
                                                <section>
                                                    <span>Data cadastro</span>
                                                    <p key={patientData.id}>{formatingDate(patientData.created_at)}</p>
                                                </section>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </ContentDashboard>
            </Content>
        </Container>
    );
}

export default DetailsPatient;