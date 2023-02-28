import React from 'react';
import {createPortal} from 'react-dom';
import './Modal.css';

const modalRoot = document.getElementById('modal-root')

export const Modal = ({ url, modalOpen }) => {

    const closuFunction = (e) => {
      if (e.currentTarget === e.target) {
        modalOpen(false)
      }
    }

    return createPortal(
    <div className="overlay" onClick={closuFunction}>
      <div className="modal">
        <img className='imgModal' src={url} alt="" />
      </div>
    </div>, 
    modalRoot)
  
};



