import React, {Component} from 'react';
import Notiflix from 'notiflix';
import css from './Searchbar.module.css';

import PropTypes from 'prop-types';

export default class Searchbar extends Component  {

  state = {
    imagename: '',
    load: false
  }

  handleNameChange = (event) => {
    this.setState({ imagename: event.currentTarget.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.imagename.trim() === '') {
      Notiflix.Notify.failure('Введите слово в поле "Search"');
      return
    }
    this.props.onSubmit(this.state.imagename)
    this.props.isLoading(true)
    this.setState({ imagename: '' })
  }

  render() {
    return (
      <header className={css.searchBar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
            <img src='https://w7.pngwing.com/pngs/739/993/png-transparent-computer-icons-google-search-search-miscellaneous-desktop-wallpaper-android-thumbnail.png' alt="" />
          </button>
      
          <input className={css.searchFormInput}
          onChange={this.handleNameChange}
          value={this.state.imagename}
           type="text" name="query" 
           placeholder="Search images and photos"
          />
        </form>
      </header>
)
  }
};

Searchbar.propTypes = {
  imagename: PropTypes.string,
};