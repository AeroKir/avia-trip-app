import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ButtonGroup.css';

function ButtonGroup({ children, className, vertical }) {
  const classes = classNames(
    'btn-group',
    className,
    { vertical },
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  children: null,
  className: '',
  vertical: false,
};

export default ButtonGroup;
