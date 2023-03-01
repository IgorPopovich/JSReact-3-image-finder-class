import React, { Component } from 'react';
import Notiflix from 'notiflix';
import './ImageGallery.css';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import StartLoader from '../StartLoader/StartLoader';
import api from '../../services/imagesApi';

class ImageGallery extends Component {

  state = {
    page: 1,
    items: [],
    showLoader: false,
    startShowLoader: false,
    showLoadBtn: false,
    imagename: '',
    disableBtn: false
  }
  
  loadPlus = async () => {
    this.setState({ showLoader: true })
    this.setState({ disableBtn: true })
    await this.setState({ page: this.state.page + 1 })
      api.fetchImages(this.state.imagename, this.state.page)
      .then((data) => {
        this.setState({ items: [...this.state.items, ...data.hits] })
        if (data.hits.length > 8) {
          this.setState({ showLoadBtn: true })
        } else {
          this.setState({ showLoadBtn: false })
        }
      })
      .catch(error => console.log(error))
      this.setState({ showLoader: false })
      this.setState({ disableBtn: false })
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imagename
    const nextName = this.props.imagename
    if (nextName !== prevName) {
      this.setState({ items: [] })
      this.setState({ page: 1 })
      this.setState({ showLoadBtn: false })
      this.setState({ imagename: nextName })
      this.setState({ startShowLoader: true })
        api.fetchImages(nextName, this.props.page)
        .then((data) => {
          this.setState({ items: data.hits })
          Notiflix.Notify.success(`Всего найдено картинок: ${data.totalHits}`);
          if (data.hits.length > 8) {
            this.setState({ showLoadBtn: true })
          }
        })
        .catch(error => console.log(error))
        this.setState({ startShowLoader: false })
    }
  }

render() {
  return (
    <div className='main'>
            {this.state.startShowLoader && <StartLoader />}
            <ul className="imageGallery">
              {this.state.items.length > 0 && this.state.items.map(( item, index ) => (
                <ImageGalleryItem key={index} oncl={this.state.startShowLoader} item={item} />
              ))}
            </ul> 
            <div>
              
              {this.state.showLoadBtn && <Button disBtn={this.state.disableBtn} show={this.state.showLoader} loadPlus={this.loadPlus} />}
            </div>
  </div>
  )
}

  
}

export default ImageGallery;
