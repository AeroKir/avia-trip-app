import React from 'react';
import ListGroup from '../../components/list-group/ListGroup';
import ListGroupItem from '../../components/list-group/ListGroupItem';
import FlightCard from '../../components/flight-card/FlightCard';
import TICKETS from '../../data/tickets-array';

class FlightCardContainer extends React.Component {
  render() {
    return (
      <div>
        {TICKETS.map(item => (
          <FlightCard
            key={item.price}
            price={item.price}
            origin={item.origin}
            originName={item.origin_name}
            departureTime={item.departure_time}
            departureDate={item.departure_date}
            stops={item.stops}
            arrivalTime={item.arrival_time}
            arrivalDate={item.arrival_date}
            destination={item.destination}
            destinationName={item.destination_name}
          />
        ))}
      </div>
    );
  }
}

export default FlightCardContainer;
