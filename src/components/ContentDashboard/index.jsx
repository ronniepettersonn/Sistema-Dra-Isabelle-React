import React from 'react';

import { Content } from './styles';

export function ContentDashboard(props) {
    return (
        <Content>
            {props.children}
        </Content>
    );
}
