import React, {Component} from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import PropTypes from 'prop-types';
import css from './App.module.css';

export default class App extends Component {
  state = {
    imagename: '',
    page: 1
  }

  handleFormSubmit = (name) => {
    this.setState({ imagename: name })
  }
  
  render () {
    return (
      <div className={css.main}>
        {<Searchbar onSubmit={this.handleFormSubmit} />}
        <ImageGallery imagename={this.state.imagename} page={this.state.page} />
    </div>
    )
  }
}


App.propTypes = {
  imagename: PropTypes.string,
  page: PropTypes.number,
};

