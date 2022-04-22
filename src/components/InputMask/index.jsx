import React from 'react';
import InputMask from 'react-input-mask'

// import { Container } from './styles';

export function InputCEP(props) {
    return <InputMask mask="99.999-999" value={props.value} onChange={props.onChange} type={props.type} name={props.name} id={props.name} placeholder={props.placeholder} />
}

export function InputCPF(props) {
    return <InputMask mask="999.999.999-99" value={props.value} onChange={props.onChange} type={props.type} name={props.name} id={props.name} placeholder={props.placeholder} />
}