import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Icon.css';

function Icon({
  src, alt, className, ...attrs
}) {
  const classes = classNames(
    'icon-default',
    className,
  );

  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      {...attrs}
    />
  );
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
