import React from 'react';
import CreatePatient from '../CreatePatient';

import './styles.css';

function Modal({ children }) {
    return (
        <div className="modalBackground" >
            <div className="modalContainer">
                {children}
            </div>
        </div>
    );
}

export default Modal;