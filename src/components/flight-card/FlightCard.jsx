import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../icon/Icon';
import Button from '../button/Button';

import './FlightCard.css';

function FlightCard({
  className,
  src,
  price,
  currencySymbol,
  origin,
  originName,
  departureTime,
  departureDate,
  stops,
  arrivalTime,
  arrivalDate,
  destination,
  destinationName,
}) {
  const classes = classNames(
    'flight-card',
    className,
  );

  let transferCount;

  if (stops === 0) {
    transferCount = <span />;
  } else if (stops === 1) {
    transferCount = (
      <span>
        {stops}
        {' '}
        пересадка
      </span>
    );
  } else {
    transferCount = (
      <span>
        {stops}
        {' '}
        пересадки
      </span>
    );
  }

  return (
    <div className={classes}>
      <div className="flight-card-aside">
        <Icon
          className="airline-logo"
          src={src}
          alt="Airline logo"
        />
        <Button className="flight-card-buy-btn">
          <span>
            Купить за
            {' '}
            {price}
            {currencySymbol}
          </span>
        </Button>
      </div>
      <div className="flight-card-main">
        <div className="departure-info-block">
          <p className="flight-card-time">{departureTime}</p>
          <p className="flight-card-airport-name">
            <span>
              {origin}
              ,
              {originName}
            </span>
          </p>
          <p className="flight-card-date">{departureDate}</p>
        </div>
        <div className="transfer-info-block">
          {transferCount}
        </div>
        <div className="arrival-info-block">
          <p className="flight-card-time">{arrivalTime}</p>
          <p className="flight-card-airport-name">
            {destinationName}
            ,
            <span>{destination}</span>
          </p>
          <p className="flight-card-date">{arrivalDate}</p>
        </div>
      </div>
    </div>
  );
}

FlightCard.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  price: PropTypes.number,
  currencySymbol: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  origin: PropTypes.string,
  originName: PropTypes.string,
  departureTime: PropTypes.string,
  departureDate: PropTypes.string,
  stops: PropTypes.number,
  arrivalTime: PropTypes.string,
  arrivalDate: PropTypes.string,
  destination: PropTypes.string,
  destinationName: PropTypes.string,
};

FlightCard.defaultProps = {
  className: '',
  src: 'https://daisycon.io/images/airline/?width=300&height=150&color=ffffff&iata=lh',
  price: 0,
  currencySymbol: '',
  origin: '',
  originName: '',
  departureTime: '',
  departureDate: '',
  stops: 0,
  arrivalTime: '',
  arrivalDate: '',
  destination: '',
  destinationName: '',
};

export default FlightCard;
