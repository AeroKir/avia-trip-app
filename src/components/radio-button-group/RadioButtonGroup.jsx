import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './RadioButtonGroup.css';

function RadioButtonGroup({ children, className, vertical }) {
  const classes = classNames(
    'radio-btn-group',
    className,
    { vertical },
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

RadioButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.bool,
};

RadioButtonGroup.defaultProps = {
  children: null,
  className: '',
  vertical: false,
};

export default RadioButtonGroup;
