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
      currencyUnicodeSymbol: '\uFF04',
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
  flightSearchConditions: [
    {
      id: 'input-transfer-all',
      name: 'transfer',
      value: 'transfer-all',
      label: 'Все',
      checked: true,
    },
    {
      id: 'input-transfer-none',
      name: 'transfer',
      value: 'transfer-none',
      label: 'Без пересадок',
      checked: false,
    },
    {
      id: 'input-transfer-one',
      name: 'transfer',
      value: 'transfer-one',
      label: '1 пересадка',
      checked: false,
    },
    {
      id: 'input-transfer-two',
      name: 'transfer',
      value: 'transfer-two',
      label: '2 пересадки',
      checked: false,
    },
    {
      id: 'input-transfer-three',
      name: 'transfer',
      value: 'transfer-three',
      label: '3 пересадки',
      checked: false,
    },
  ],
};

export default initialState;
