import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ListGroupItem.css';

function ListGroupItem({
  children, className, tag: Tag, ...attrs
}) {
  const classes = classNames(
    'list-group-item',
    className,
  );

  return (
    <Tag className={classes} {...attrs}>
      {children}
    </Tag>
  );
}

ListGroupItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
};

ListGroupItem.defaultProps = {
  children: null,
  className: '',
  tag: 'li',
};

export default ListGroupItem;
