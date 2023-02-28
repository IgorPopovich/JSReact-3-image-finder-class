import React, {Component} from 'react';
import Notiflix from 'notiflix';
import './Searchbar.css';

export default class Searchbar extends Component  {

  state = {
    imagename: ''
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
    this.setState({ imagename: '' })
  }

  render() {
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="searchForm-button">
            <span className="searchForm-button-label">Search</span>
            <img src='https://w7.pngwing.com/pngs/739/993/png-transparent-computer-icons-google-search-search-miscellaneous-desktop-wallpaper-android-thumbnail.png' alt="" />
          </button>
      
          <input className="searchForm-input"
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

