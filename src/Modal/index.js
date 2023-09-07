import React from 'react';
import { createPortal } from 'react-dom';
import './ModalBackground.css'

function Modal({ children }) {
    return createPortal(
        <div className='modalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };