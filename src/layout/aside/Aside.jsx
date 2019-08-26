import React from 'react';
import PropTypes from 'prop-types';

import './Aside.css';

function Aside({ children }) {
  return (
    <aside className="layout-aside">
      {children}
    </aside>
  );
}

Aside.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Aside;
