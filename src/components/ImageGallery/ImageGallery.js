import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Notiflix from 'notiflix';
import css from './ImageGallery.module.css';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import StartLoader from '../StartLoader/StartLoader';
import api from '../../services/imagesApi';

class ImageGallery extends Component {

  state = {
    page: 1,
    items: [],
    isLoading: false,
    imagename: '',
    disableBtn: false
  }
  
  loadPlus = async () => {
    this.setState({ isLoading: true })
    this.setState({ showLoader: true })
    this.setState({ disableBtn: true })
    await this.setState({ page: this.state.page + 1 })
      api.fetchImages(this.state.imagename, this.state.page)
      .then((data) => {
        if (data) {
          this.setState({ isLoading: false })
        }
        this.setState({ items: [...this.state.items, ...data.hits] })
        if (data.hits.length > 8) {
          this.setState({ showLoadBtn: true })
        } else {
          this.setState({ showLoadBtn: false })
          Notiflix.Notify.failure(`Кінец галереї`);
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
        api.fetchImages(nextName, this.props.page)
        .then((data) => {
          if (data) {
            this.props.isLoadingFunc(false)
          }
          this.setState({ items: data.hits })
          if (data.hits.length > 0) {
            Notiflix.Notify.success(`Всего найдено картинок: ${data.totalHits}`);
          }
          if (data.hits.length < 1) {
            Notiflix.Notify.failure(`Даних по вашому запиту немає`);
          }
          if (data.hits.length > 8) {
            this.setState({ showLoadBtn: true })
          }
        })
        .catch(error => console.log(error))
    }
  }

render() {
  return (
    <div className={css.main}>
      {this.props.isLoading && <StartLoader />}
            {this.state.startShowLoader && <StartLoader />}
            <ul className={css.imageGallery}>
              {this.state.items.length > 0 && this.state.items.map(( item, index ) => (
                <ImageGalleryItem key={index} oncl={this.state.startShowLoader} item={item} />
              ))}
            </ul> 
            <div>
              
              {this.state.showLoadBtn && <Button disBtn={this.state.disableBtn} show={this.state.isLoading} loadPlus={this.loadPlus} />}
            </div>
  </div>
  )
}
}

ImageGallery.propTypes = {
  page: PropTypes.number,
  items: PropTypes.array,
  showLoader: PropTypes.bool,
  startShowLoader: PropTypes.bool,
  showLoadBtn: PropTypes.bool,
  imagename: PropTypes.string,
  disableBtn: PropTypes.bool,
};


export default ImageGallery;
