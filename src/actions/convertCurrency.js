import { CONVERT_UAH_TO_USD, CONVERT_UAH_TO_EUR } from '../constants/actionTypes';

export function convertUAHToUSD(UAHPerUSD, value) {
  return {
    type: CONVERT_UAH_TO_USD,
    payload: { UAHPerUSD, value },
  };
}

export function convertUAHToEUR(UAHPerEUR, value) {
  return {
    type: CONVERT_UAH_TO_EUR,
    payload: { UAHPerEUR, value },
  };
}

export function fetchUSDSaleRate(url) {
  return (dispatch) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    fetch(proxyUrl + url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then((currencyData) => {
        const currencySale = currencyData.map((currency) => {
          if (currency.ccy === 'USD') {
            return Number(currency.sale);
          }
          return currency;
        });
        return currencySale;
      })
      .then((currencySale) => {
        const USDSaleRate = currencySale[0];
        dispatch(convertUAHToUSD(USDSaleRate));
      })
      .catch(() => { });
  };
}


export function fetchEURSaleRate(url) {
  return (dispatch) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    fetch(proxyUrl + url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then((currencyData) => {
        const currencySale = currencyData.map((currency) => {
          if (currency.ccy === 'EUR') {
            return Number(currency.sale);
          }
          return currency;
        });
        return currencySale;
      })
      .then((currencySale) => {
        const EURSaleRate = currencySale[1];
        dispatch(convertUAHToEUR(EURSaleRate));
      })
      .catch(() => { });
  };
}
