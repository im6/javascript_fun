import React from 'react';
import PropTypes from 'prop-types';
import style from './style.less';

const LinkBox = ({ url, name, desc }) => (
  <div className="pure-u-xl-1-4 pure-u-lg-1-3 pure-u-md-1-2 pure-u-sm-1-2 pure-u-1-2">
    <div className={style.box}>
      <a href={url} target="_blank">
        {name}
      </a>
      {desc && <p>{desc}</p>}
    </div>
  </div>
);

LinkBox.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default LinkBox;
