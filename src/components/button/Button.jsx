import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

function Button({
  children, className, onClick, disabled, active, ...attrs
}) {
  const onClickAction = (e) => {
    if (disabled) {
      e.preventDefault();
    }
    return onClick(e);
  };

  const classes = classNames(
    'btn-default',
    className,
  );

  const Tag = attrs.href ? 'a' : 'button';

  return (
    <Tag
      className={classes}
      onClick={onClickAction}
      disabled={disabled}
      {...attrs}
    >
      {children}
    </Tag>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  children: 'Default button',
  className: '',
  onClick: () => { },
  disabled: false,
  active: false,
};

export default Button;
