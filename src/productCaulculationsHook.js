import { currencies, countries, sameCountryDeliveryTax } from './buisnessLogicConfig';
import { product } from './App';

const productCalculationsHook = ({ buyCurrencyCode, deliveryCountryCode }) => {
    const selectedCurrencyData = currencies.find(({ currencyCode }) => currencyCode === buyCurrencyCode)
    const selectedCountryData = countries.find(({ countryCode }) => countryCode === deliveryCountryCode)
    const sellerCountryData = countries.find(({ countryCode }) => countryCode === product.countryCode)


    const calculateDelivery = () => {
      const deliveryCostToSelectedCountry = sellerCountryData.deliveryCost[deliveryCountryCode]

      const isDeliveryToSameCountry = product.countryCode === deliveryCountryCode
      const additionalTax = isDeliveryToSameCountry ? sameCountryDeliveryTax : selectedCountryData.additionalDeliveryTax;
      const deliveryAdditionalTax = deliveryCostToSelectedCountry * additionalTax;
      const deliveryWithAdditionalTax = deliveryAdditionalTax + deliveryCostToSelectedCountry;

      return {
          additionalTax,
          totalDeliveryPrice: deliveryWithAdditionalTax,
          currencySymbol: selectedCurrencyData.currencySymbol
        }
    }

    const calculateShoePrice = () => {
        const isSellerSameCurrencyAsSelectedCurrency = sellerCountryData.localCurrency.currencyCode === buyCurrencyCode;


    }

    const shoePriceData = calculateShoePrice()
    const deliveryData = calculateDelivery()

    return {
        shoePriceData,
        deliveryData: deliveryData
    }
}

export default productCalculationsHook;