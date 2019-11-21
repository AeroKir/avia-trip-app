const initialState = {
  currency: [
    {
      id: 'input-currency-uah',
      name: 'currency',
      value: 'uah',
      label: 'UAH',
      currencyUnicodeSymbol: '\u20B4',
      checked: true,
    },
    {
      id: 'input-currency-usd',
      name: 'currency',
      value: 'usd',
      label: 'USD',
      currencyUnicodeSymbol: '\u0024',
      checked: false,
    },
    {
      id: 'input-currency-eur',
      name: 'currency',
      value: 'eur',
      label: 'EUR',
      currencyUnicodeSymbol: '\u20AC',
      checked: false,
    },
  ],
  flightSearchConditions: [],
  flightVariants: {
    isReceived: false,
    flights: [],
  },
};

export default initialState;
