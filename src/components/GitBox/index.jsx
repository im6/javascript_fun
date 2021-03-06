import PropTypes from 'prop-types';
import numeral from 'numeral';
import style from './style.less';

const GitBox = ({ name, url, img, imgSrc, star, lazyImg }) => (
  <div
    className={`pure-u-xl-1-5 pure-u-lg-1-4 pure-u-md-1-3 pure-u-sm-1-2 pure-u-1-2 ${style.box}`}
  >
    <img src={`${imgSrc}/${img}`} alt={name} data-i={lazyImg} />
    <div className={style.rightText}>
      <h3>{name}</h3>
      <a href={url} aria-label={`${star} stars in Github`}>
        &#9733; {numeral(star).format('0,0')}
      </a>
    </div>
  </div>
);

GitBox.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  star: PropTypes.number.isRequired,
  lazyImg: PropTypes.string,
};

export default GitBox;
