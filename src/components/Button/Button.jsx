import css from './Button.module.css';
import PropTypes from 'prop-types';
import { LoaderButton } from '../LoaderButton/LoaderButton';

export const Button = ({show, onloadMore }) => {
  return (

    <button type='submit' onClick={onloadMore} className={css.button}>
    {show && <LoaderButton />}

    <span className={css.submitSpan}>Load more</span>
    </button>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func,
};
