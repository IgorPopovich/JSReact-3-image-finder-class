import React, {Component} from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import PropTypes from 'prop-types';
import css from './App.module.css';

export default class App extends Component {
  state = {
    imagename: '',
    page: 1,
    isLoading: false,
  }

  handleFormSubmit = (name) => {
    this.setState({ imagename: name })
  }

  isLoadingFunc = (name) => {
    this.setState({ isLoading: name })
  }
  
  render () {
    return (
      <div className={css.main}>
        {<Searchbar isLoading={this.isLoadingFunc} onSubmit={this.handleFormSubmit} />}
        <ImageGallery isLoadingFunc={this.isLoadingFunc} isLoading={this.state.isLoading} imagename={this.state.imagename} page={this.state.page} />
    </div>
    )
  }
}


App.propTypes = {
  imagename: PropTypes.string,
  page: PropTypes.number,
};

