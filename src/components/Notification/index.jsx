import React from 'react';

import './styles.css';

export function Notification(props) {
    return (
        <div className="icon-notification" notification={props.notification} ></div>
    )
}

