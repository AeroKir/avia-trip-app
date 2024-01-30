import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon/Icon';

import './Preloader.css';

import preloaderIcon from '../../icons/engine.svg';

function Preloader({
  className, src, ...attrs
}) {
  const classes = classNames(
    'preloader',
    className,
  );

  return (
    <div
      className={classes}
      {...attrs}
    >
      <Icon src={preloaderIcon} alt="preloader-icon" className="preloader-icon" />
      <p className="preloader-text">Ищем авиабилеты</p>
    </div>
  );
}

Preloader.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
};

Preloader.defaultProps = {
  className: '',
  src: '',
};


export default Preloader;
