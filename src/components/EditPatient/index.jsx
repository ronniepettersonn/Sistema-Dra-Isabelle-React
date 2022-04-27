import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import { CgClose } from 'react-icons/all'

import { Flip, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css';
import { InputCEP, InputCPF, InputPhone } from '../InputMask';
import Button from '../Button';
import { api } from '../../services/api';

function EditPatient({ closeModal, updateList }) {
    // estado para pegar dados
    const [patient, setPatient] = useState([])

    useEffect(() => {

        let url = window.location.href
        let result = url.split('/')
        let id = result[result.length - 1]

        api.get('/patients/' + id)
            .then(res => {
                const listPatient = res.data.data;
                return setPatient(listPatient)
            })
    }, [])


    const notifySuccess = () => toast.success('Dados atualizado com sucesso!', {
        transition: Flip,
    })

    const notifyError = () => toast.error('Houve algum erro na atualização!', {
        transition: Flip,
    })

    const notifyWarn = () => toast.warn('Você não atualizou nenhum campo!', {
        transition: Flip,
    })

    async function updatePatient(e) {
        //e.preventDefault()

        const name = document.querySelector('#name').value
        let phone = document.querySelector('#phone').value
        const address = document.querySelector('#address').value
        const address_number = document.querySelector('#address_number').value
        const address_complement = document.querySelector('#address_complement').value
        const address_city = document.querySelector('#address_city').value
        const address_state = document.querySelector('#address_state').value
        const address_zip_code = document.querySelector('#address_zip_code').value
        const email = document.querySelector('#email').value
        let cpf = document.querySelector('#cpf').value
        cpf = cpf.replace('.', '').replace('.', '').replace('-', '')
        const insurance = document.querySelector('#insurance').value
        const insurance_number = document.querySelector('#insurance_number').value
        const illness = document.querySelector('#illness').value
        const drug = document.querySelector('#drug').value
        const allergy = document.querySelector('#allergy').value
        const type_patient = document.querySelector('#type_patient').value

        let createObjectPatient = {
            name,
            phone,
            address,
            address_number: Number(address_number),
            address_complement,
            address_city,
            address_state,
            address_zip_code,
            email,
            cpf,
            insurance,
            insurance_number: Number(insurance_number),
            illness,
            drug,
            allergy,
            type_patient
        }

        let url = window.location.href
        let result = url.split('/')
        let id = result[result.length - 1]


        await api.put('/patients/' + id, createObjectPatient)
            .then(response => {
                if (response.data.success) {
                    notifySuccess();
                    updateList(true);
                    closeModal(false);
                } else {
                    notifyWarn()
                }

            })
            .catch(err => notifyError()).catch(err => console.log(err))


        //console.log(createObjectPatient)
    }

    return (

        <Modal>

            <div className="header modal">
                <div>Editar paciente</div>
                <button className='button-close-modal' onClick={() => closeModal(false)}><CgClose /></button>
            </div>
            {
                patient.map(item => {
                    return (
                        <div className="form-create-patient" key={item.id}>
                            <form action="/cadastro/cliente" id='form-patient' method='POST'>
                                <div className="form-item">
                                    <label htmlFor="name">Nome</label>
                                    <input type="text" name='name' id='name' placeholder='Digite seu nome' defaultValue={`${item.name}`} required disabled />

                                </div>
                                <div className="form-item">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" name='email' id='email' placeholder='email@dominio.com.br' required defaultValue={`${item.email}`} />

                                </div>
                                <div className="form-item">
                                    <label htmlFor="phone">Telefone</label>
                                    <InputPhone type="tel" name='phone' id='phone' placeholder='31 9 8382-8880' required defaultValue={`${item.phone}`} />

                                </div>
                                <div className="form-item address">
                                    <label htmlFor="address">Endereço</label>
                                    <input type="text" name='address' id='address' placeholder='Rua das Flores' required defaultValue={`${item.address}`} />
                                </div>
                                <div className="form-item address_number">
                                    <label htmlFor="address_number">Numero</label>
                                    <input type="number" name='address_number' id='address_number' placeholder='10' required defaultValue={`${item.address_number}`} />

                                </div>
                                <div className="form-item">
                                    <label htmlFor="address_complement">Complemento</label>
                                    <input type="text" name='address_complement' id='address_complement' placeholder='Ap. 202' required defaultValue={`${item.address_complement}`} />

                                </div>
                                <div className="form-item">
                                    <label htmlFor="address_city">Cidade</label>
                                    <input type="text" name='address_city' id='address_city' placeholder='Belo Horizonte' required defaultValue={`${item.address_city}`} />
                                </div>
                                <div className="form-item uf">
                                    <label htmlFor="address_state">UF</label>
                                    <input type="text" name='address_state' id='address_state' placeholder='MG' required maxLength={2} title="Digite apenas letras" defaultValue={`${item.address_state}`} />
                                </div>
                                <div className="form-item">
                                    <label htmlFor="address_zip_code">CEP</label>
                                    <InputCEP type="text" name='address_zip_code' id='address_zip_code' placeholder='31000-000' defaultValue={`${item.address_zip_code}`} />
                                </div>
                                <div className="form-item">
                                    <label htmlFor="cpf">CPF</label>
                                    <InputCPF type="text" name='cpf' id='cpf' placeholder='000.000.000-00' disabled defaultValue={`${item.cpf}`} />
                                </div>
                                <div className="form-item insurance">
                                    <label htmlFor="insurance">Possui convênio?</label>
                                    <div className="select insurance">
                                        <select name="insurance" id='insurance' defaultValue={`${item.insurance}`}>
                                            <option value="sim">Sim</option>
                                            <option value="nao">Não</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-item">
                                    <label htmlFor="insurance_number">Carteira convênio</label>
                                    <input type="number" name='insurance_number' id='insurance_number' placeholder='Número cartão convênio' defaultValue={`${item.insurance_number}`} />
                                </div>
                                <div className="form-item">
                                    <label htmlFor="illness">Doença pré-existente?</label>
                                    <input type="text" name='illness' id='illness' placeholder='Digite a doença' defaultValue={`${item.illness}`} />
                                </div>
                                <div className="form-item">
                                    <label htmlFor="drug">Usa algum remédio?</label>
                                    <input type="text" name='drug' id='drug' placeholder='Digite o remedio' defaultValue={`${item.drug}`} />
                                </div>
                                <div className="form-item">
                                    <label htmlFor="allergy">Tem alguma alergia?</label>
                                    <input type="text" name='allergy' id='allergy' placeholder='Qual a alergia?' defaultValue={`${item.allergy}`} />
                                </div>
                                <div className="form-item type-patient">
                                    <label htmlFor="type_patient">Tipo do paciente</label>
                                    <div className="select type-patient">
                                        <select name="type_patient" id="type_patient" defaultValue={`${item.type_patient}`}>
                                            <option value="particular">Particular</option>
                                            <option value="convenio">Convênio</option>
                                        </select>
                                    </div>
                                </div>


                            </form>
                            <Button form='form-patient' type="submit" title="Cadastrar" onClick={() => updatePatient()
                            } create id="submit-formpatient" />
                        </div>
                    )

                })
            }
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
        </Modal>

    );
}

export default EditPatient;