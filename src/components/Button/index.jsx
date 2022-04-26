import React from 'react';

import { ButtonTeste } from './styles'

import './styles';

function Button(props) {
    return (
        <>
            <ButtonTeste
                className={props.className}
                onClick={props.onClick}
                logout={props.logout}
                create={props.create}
                id={props.id}
                edit={props.edit}
            >{props.title}</ButtonTeste>
        </>
    )
}

export default Button;