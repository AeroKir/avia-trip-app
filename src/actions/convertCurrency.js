import { CONVERT_UAH_TO_USD, CONVERT_UAH_TO_EUR } from '../constants/actionTypes';

export function convertUAHToUSD(UAHToUSD) {
  return {
    type: CONVERT_UAH_TO_USD,
    payload: UAHToUSD,
  };
}

export function convertUAHToEUR(UAHToEUR) {
  return {
    type: CONVERT_UAH_TO_EUR,
    payload: UAHToEUR,
  };
}
