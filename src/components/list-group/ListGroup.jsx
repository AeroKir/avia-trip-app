import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ListGroup.css';

function ListGroup({
  children, className, tag: Tag, horizontal, ...attrs
}) {
  const classes = classNames(
    'list-group',
    className,
    { horizontal },
  );

  return (
    <Tag className={classes} {...attrs}>
      {children}
    </Tag>
  );
}

ListGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  horizontal: PropTypes.bool,
};

ListGroup.defaultProps = {
  children: 'Default button',
  className: '',
  tag: 'ul',
  horizontal: false,
};

export default ListGroup;
