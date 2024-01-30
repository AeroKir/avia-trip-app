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
        К сожалению, по вашему запросу не найдено рейсов.
        {' '}
      </>
    );
  } else if (flightsQuantity === 1) {
    infoHeaderMessage = (
      <>
        Мы нашли
        {' '}
        {flightsQuantity}
        {' '}
        рейс, но он не соответствует заданным фильтрам.
      </>
    );
  } else if (flightsQuantity > 4) {
    infoHeaderMessage = (
      <>
        Мы нашли
        {' '}
        {flightsQuantity}
        {' '}
        рейсов, но ни один не соответствует заданным фильтрам.
      </>
    );
  } else {
    infoHeaderMessage = (
      <>
        Мы нашли
        {' '}
        {flightsQuantity}
        {' '}
        рейса, но ни один не соответствует заданным фильтрам.
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
          ? <p>Попробуйте изменить даты или построить альтернативный маршрут.</p>
          : <p>Пожалуйста, выберите количество пересадок</p>
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
