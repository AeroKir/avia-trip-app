import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './RadioButton.css';

function RadioButton({
  id, type = 'radio', className, name, value, checked = true, onChange, label, simpleButtonView, ...attrs
}) {
  const classes = classNames(
    'input-radio-default',
    className,
    { simpleButtonView },
  );

  if (simpleButtonView) {
    return (
      <label htmlFor={id} className="input-label">
        <input
          id={id}
          type={type}
          className={classes}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          {...attrs}
        />
        <span className="radio-check-box">
          {label}
        </span>
      </label>
    );
  }

  return (
    <label htmlFor={id} className="input-label">
      <input
        id={id}
        type={type}
        className={classes}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        {...attrs}
      />
      <span className="radio-check-box" />
      {label}
    </label>
  );
}

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
  simpleButtonView: PropTypes.bool,
};

RadioButton.defaultProps = {
  className: '',
  onChange: () => { },
  label: 'Default label',
  simpleButtonView: false,
};

export default RadioButton;
