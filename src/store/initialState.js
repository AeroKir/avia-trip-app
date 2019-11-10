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
      checked: true,
      stops: 0,
    },
    {
      id: 'input-transfer-one',
      name: 'transfer',
      value: 'transfer-one',
      label: '1 пересадка',
      checked: true,
      stops: 1,
    },
    {
      id: 'input-transfer-two',
      name: 'transfer',
      value: 'transfer-two',
      label: '2 пересадки',
      checked: true,
      stops: 2,
    },
    {
      id: 'input-transfer-three',
      name: 'transfer',
      value: 'transfer-three',
      label: '3 пересадки',
      checked: true,
      stops: 3,
    },
  ],
  flightVariants: [
    {
      origin: 'VVO',
      origin_name: 'Владивосток',
      destination: 'TLV',
      destination_name: 'Тель-Авив',
      departure_date: '12.05.18',
      departure_time: '16:20',
      arrival_date: '12.05.18',
      arrival_time: '22:10',
      carrier: 'TK',
      stops: 3,
      price: 12400,
    },
    {
      origin: 'VVO',
      origin_name: 'Владивосток',
      destination: 'TLV',
      destination_name: 'Тель-Авив',
      departure_date: '12.05.18',
      departure_time: '17:20',
      arrival_date: '12.05.18',
      arrival_time: '23:50',
      carrier: 'LH',
      stops: 1,
      price: 13100,
    },
    {
      origin: 'VVO',
      origin_name: 'Владивосток',
      destination: 'TLV',
      destination_name: 'Тель-Авив',
      departure_date: '12.05.18',
      departure_time: '12:10',
      arrival_date: '12.05.18',
      arrival_time: '18:10',
      carrier: 'EI',
      stops: 0,
      price: 15300,
    },
    {
      origin: 'VVO',
      origin_name: 'Владивосток',
      destination: 'TLV',
      destination_name: 'Тель-Авив',
      departure_date: '12.05.18',
      departure_time: '17:00',
      arrival_date: '12.05.18',
      arrival_time: '23:30',
      carrier: 'TK',
      stops: 2,
      price: 11000,
    },
    {
      origin: 'VVO',
      origin_name: 'Владивосток',
      destination: 'TLV',
      destination_name: 'Тель-Авив',
      departure_date: '12.05.18',
      departure_time: '12:10',
      arrival_date: '12.05.18',
      arrival_time: '20:15',
      carrier: 'BA',
      stops: 3,
      price: 13400,
    },
    {
      origin: 'VVO',
      origin_name: 'Владивосток',
      destination: 'TLV',
      destination_name: 'Тель-Авив',
      departure_date: '12.05.18',
      departure_time: '9:40',
      arrival_date: '12.05.18',
      arrival_time: '19:25',
      carrier: 'LY',
      stops: 3,
      price: 12450,
    },
    {
      origin: 'VVO',
      origin_name: 'Владивосток',
      destination: 'TLV',
      destination_name: 'Тель-Авив',
      departure_date: '12.05.18',
      departure_time: '17:10',
      arrival_date: '12.05.18',
      arrival_time: '23:45',
      carrier: 'TK',
      stops: 1,
      price: 13600,
    },
    {
      origin: 'VVO',
      origin_name: 'Владивосток',
      destination: 'TLV',
      destination_name: 'Тель-Авив',
      departure_date: '12.05.18',
      departure_time: '6:10',
      arrival_date: '12.05.18',
      arrival_time: '15:25',
      carrier: 'TK',
      stops: 0,
      price: 14250,
    },
    {
      origin: 'VVO',
      origin_name: 'Владивосток',
      destination: 'TLV',
      destination_name: 'Тель-Авив',
      departure_date: '12.05.18',
      departure_time: '16:50',
      arrival_date: '12.05.18',
      arrival_time: '23:35',
      carrier: 'FR',
      stops: 1,
      price: 16700,
    },
    {
      origin: 'VVO',
      origin_name: 'Владивосток',
      destination: 'TLV',
      destination_name: 'Тель-Авив',
      departure_date: '12.05.18',
      departure_time: '6:10',
      arrival_date: '12.05.18',
      arrival_time: '16:15',
      carrier: 'DL',
      stops: 0,
      price: 17400,
    },
  ],
};

export default initialState;
