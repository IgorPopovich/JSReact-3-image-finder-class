import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal';


export const ImageGalleryItem = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
          <div>
            <li className={css.imageGalleryItem}>
              <img className={css.imageGalleryItemImage}  src={item.previewURL} onClick={() => setModalOpen(true)} alt='' />
            </li>
            {modalOpen && (
              <Modal modalOpen={setModalOpen} url={item.largeImageURL} />
            )}
          </div>
  )
};

ImageGalleryItem.propTypes = {
  modalOpen: PropTypes.array,
};

