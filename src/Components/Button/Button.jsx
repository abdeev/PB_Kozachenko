import PropTypes from 'prop-types';
import css from './Button.module.css';

export const ButtonLoadMore = ({ onClick }) => (
  <button type="button" className={css.Button} onClick={onClick}>
    Load more
  </button>
);

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func,
};
