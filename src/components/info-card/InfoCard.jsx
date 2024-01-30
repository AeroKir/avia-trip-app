import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon/Icon';

import './InfoCard.css';

function InfoCard({
  className, src, flightsQuantity, children, ...attrs
}) {
  const classes = classNames(
    'info-card',
    className,
  );

  let infoHeaderMessage;

  if (flightsQuantity === 0) {
    infoHeaderMessage = (
      <>
        На жаль, за вашим запитом не знайдено рейсів.
        {' '}
      </>
    );
  } else if (flightsQuantity === 1) {
    infoHeaderMessage = (
      <>
        Ми знайшли
        {' '}
        {flightsQuantity}
        {' '}
        рейс, але він не відповідає заданим фільтрам.
      </>
    );
  } else if (flightsQuantity > 4) {
    infoHeaderMessage = (
      <>
        Ми знайшли
        {' '}
        {flightsQuantity}
        {' '}
        рейсів, але жоден не відповідає заданим фільтрам.
      </>
    );
  } else {
    infoHeaderMessage = (
      <>
        Ми знайшли
        {' '}
        {flightsQuantity}
        {' '}
        рейси, але жоден не відповідає заданим фільтрам.
      </>
    );
  }

  return (
    <div
      className={classes}
      {...attrs}
    >
      <div className="info-card-aside">
        <Icon
          className="info-card-icon"
          src={src}
          alt="Info icon"
        />
      </div>
      <div className="info-card-main">
        <h1 className="info-card-heading">
          {infoHeaderMessage}
        </h1>
        {flightsQuantity === 0
          ? <p>Спробуйте змінити дати або побудувати альтернативний маршрут.</p>
          : <p>Будь ласка, виберіть кількість пересадок</p>
        }
        {children}
      </div>
    </div>
  );
}

InfoCard.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  flightsQuantity: PropTypes.number,
  children: PropTypes.node,
};

InfoCard.defaultProps = {
  className: '',
  src: '',
  flightsQuantity: 0,
  children: null,
};


export default InfoCard;
