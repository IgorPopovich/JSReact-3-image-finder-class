import React, { useState } from 'react';
import './ImageGalleryItem.css';
import { Modal } from '../Modal/Modal';


export const ImageGalleryItem = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
          <div>
            <li className="imageGalleryItem">
              <img className='imageGalleryItemImage'  src={item.previewURL} onClick={() => setModalOpen(true)} alt='' />
            </li>
            {modalOpen && (
              <Modal modalOpen={setModalOpen} url={item.largeImageURL} />
            )}
          </div>
  )
};

