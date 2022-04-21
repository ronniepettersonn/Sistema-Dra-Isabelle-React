import React from 'react';

import { MenuItem, Span } from './styles'

export function ItemMenu(props) {
    return (
        <MenuItem>
            {props.icon}
            <Span>
                {props.title}
            </Span>
        </MenuItem>
    )
}

