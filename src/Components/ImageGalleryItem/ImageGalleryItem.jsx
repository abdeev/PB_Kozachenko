import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({
  webformatURL,
  descr,
  largeImageURL,
  onClick,
}) => {
  const handleLargePic = () => {
    onClick(largeImageURL, descr);
  };

  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={webformatURL}
        className={css.ImageGalleryItem_image}
        alt={descr}
        onClick={handleLargePic}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  descr: PropTypes.string,
  largeImageURL: PropTypes.string,
  onClick: PropTypes.func,
};
