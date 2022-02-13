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
        const shoePriceInSelectedCurrency = sellerCountryData.localCurrency.exchangeRates[buyCurrencyCode] * product.price;
        const processingFeePrice = selectedCountryData.processingFee * shoePriceInSelectedCurrency;
        return {
            shoePriceInSelectedCurrency,
            processingFeePrice,
            shoePrice: shoePriceInSelectedCurrency + processingFeePrice
        }
    }

    const shoePriceData = calculateShoePrice()
    const deliveryData = calculateDelivery()

    return {
        shoePriceData,
        deliveryData,
        totalOrderCost: shoePriceData.shoePrice + deliveryData.totalDeliveryPrice
    }
}

export default productCalculationsHook;