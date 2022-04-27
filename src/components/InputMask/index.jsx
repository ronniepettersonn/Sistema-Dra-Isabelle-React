import React from 'react';
import InputMask from 'react-input-mask'

// import { Container } from './styles';

export function InputCEP({ ...rest }) {
    return <InputMask mask="99.999-999" {...rest} />
}

export function InputCPF({ ...rest }) {
    return <InputMask mask="999.999.999-99" {...rest} required="required" />
}

export function InputPhone({ ...rest }) {
    return <InputMask mask='(99) 9 9999-9999' {...rest} />
}