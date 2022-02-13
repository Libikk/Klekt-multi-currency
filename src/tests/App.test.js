import productCalculations from '../productCaulculations';
import {
  currencies as testCurrenciesData,
  countries as testCountriesData
} from './testData';


test('additional delivery tax - same country should be 0', () => {
  const { deliveryData  } = productCalculations({
    shoePrice: 100,
    sellerCountryCode: 'UK',
    buyCurrencyCode: 'GBP',
    deliveryCountryCode: 'UK',
    currencies: testCurrenciesData,
    countries: testCountriesData
  })

  expect(deliveryData.additionalTax).toEqual(0);
});

test('additional delivery tax - US to UK tax should be 0.2', () => {
  const { deliveryData  } = productCalculations({
    shoePrice: 100,
    sellerCountryCode: 'US',
    buyCurrencyCode: 'GBP',
    deliveryCountryCode: 'UK',
    currencies: testCurrenciesData,
    countries: testCountriesData
  })

  expect(deliveryData.additionalTax).toEqual(0.2);
});

test('shoe price - after currency exchange internaltional', () => {
  const { shoePriceData } = productCalculations({
    shoePrice: 100,
    sellerCountryCode: 'US',
    buyCurrencyCode: 'EUR',
    deliveryCountryCode: 'UK',
    currencies: testCurrenciesData,
    countries: testCountriesData
  })

  expect(shoePriceData.shoePrice).toEqual(89.76);
});

test('shoe price - same country', () => {
  // test
});

