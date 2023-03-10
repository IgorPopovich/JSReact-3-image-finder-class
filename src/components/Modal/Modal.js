import React from 'react';
import {createPortal} from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.getElementById('modal-root')

export const Modal = ({ url, modalOpen }) => {

    const closuFunction = (e) => {
      if (e.currentTarget === e.target) {
        modalOpen(false)
      }
    }

    return createPortal(
    <div className={css.overlay} onClick={closuFunction}>
      <div className={css.modal}>
        <img className={css.imgModal} src={url} alt="" />
      </div>
    </div>, 
    modalRoot)
  
};



