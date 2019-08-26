import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.css';

function Input({
  id, type, className, label, ...attrs
}) {
  const classes = classNames(
    'input-default',
    className,
  );

  /**
   * Use <span> tag for checkbox and radiobutton custumization
   * See for detail: https://glitch.com/edit/#!/14-pepelsbey?path=README.md:1:0
   */
  if (type === 'checkbox' || type === 'radio') {
    return (
      <label htmlFor={id} className="input-label">
        <input
          id={id}
          type={type}
          className={classes}
          {...attrs}
        />
        <span />
        {label}
      </label>
    );
  }
  return (
    <label htmlFor={id} className="input-label">
      <input
        id={id}
        type={type}
        className={classes}
        {...attrs}
      />
      {label}
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  label: '',
};

export default Input;
