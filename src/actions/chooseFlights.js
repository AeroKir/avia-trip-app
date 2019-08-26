import {
  CHOOSE_ALL_FLIGHTS,
  CHOOSE_FLIGHTS_WITHOUT_STOPS,
  CHOOSE_FLIGHTS_WITH_ONE_STOP,
  CHOOSE_FLIGHTS_WITH_TWO_STOPS,
  CHOOSE_FLIGHTS_WITH_THREE_STOPS,
} from '../constants/actionTypes';

export const chooseAllFlights = {
  type: CHOOSE_ALL_FLIGHTS,
};

export const chooseFlightsWithoutStops = {
  type: CHOOSE_FLIGHTS_WITHOUT_STOPS,
  payload: {
    stops: 0,
  },
};

export const chooseFlightsWithOneStop = {
  type: CHOOSE_FLIGHTS_WITH_ONE_STOP,
  payload: {
    stops: 1,
  },
};

export const chooseFlightsWithTwoStops = {
  type: CHOOSE_FLIGHTS_WITH_TWO_STOPS,
  payload: {
    stops: 2,
  },
};

export const chooseFlightsWithThreeStops = {
  type: CHOOSE_FLIGHTS_WITH_THREE_STOPS,
  payload: {
    stops: 3,
  },
};
