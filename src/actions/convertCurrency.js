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

export function fetchUSDSaleRate(url, checkedCurrency) {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then((currencyData) => {
        const currencySale = currencyData.map((currency) => {
          // See more details on this 'ccy' meaning: https://api.privatbank.ua/#p24/exchange
          if (currency.ccy === 'USD') {
            return Number(currency.sale);
          }
          return currency;
        });
        return currencySale;
      })
      .then((currencySale) => {
        const USDSaleRate = currencySale[0];
        dispatch(convertUAHToUSD(USDSaleRate, checkedCurrency));
      })
      .catch(() => { });
  };
}


export function fetchEURSaleRate(url, checkedCurrency) {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then((currencyData) => {
        const currencySale = currencyData.map((currency) => {
          // See more details on this 'ccy' meaning: https://api.privatbank.ua/#p24/exchange
          if (currency.ccy === 'EUR') {
            return Number(currency.sale);
          }
          return currency;
        });
        return currencySale;
      })
      .then((currencySale) => {
        const EURSaleRate = currencySale[1];
        dispatch(convertUAHToEUR(EURSaleRate, checkedCurrency));
      })
      .catch(() => { });
  };
}
