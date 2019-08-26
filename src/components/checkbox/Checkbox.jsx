import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Checkbox.css';

function Checkbox({
  id, type = 'checkbox', className, name, value, checked = false, onChange, label, ...attrs
}) {
  const classes = classNames(
    'input-checkbox-default',
    className,
  );

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
      <span className="check-box" />
      {label}
    </label>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  type: 'checkbox',
  className: '',
  name: '',
  value: '',
  checked: false,
  onChange: () => {},
  label: 'Default label',
};

export default Checkbox;
