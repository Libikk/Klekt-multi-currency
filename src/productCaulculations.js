import { currencies, countries, sameCountryDeliveryTax } from './buisnessLogicConfig';

const productCalculations = ({ buyCurrencyCode, deliveryCountryCode, shoePrice, sellerCountryCode }) => {
    const selectedCurrencyData = currencies.find(({ currencyCode }) => currencyCode === buyCurrencyCode)
    const selectedCountryData = countries.find(({ countryCode }) => countryCode === deliveryCountryCode)
    const sellerCountryData = countries.find(({ countryCode }) => countryCode === sellerCountryCode)


    const calculateDelivery = () => {
      const deliveryCostToSelectedCountry = sellerCountryData.deliveryCost[deliveryCountryCode]

      const isDeliveryToSameCountry = sellerCountryCode === deliveryCountryCode
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
        const shoePriceInSelectedCurrency = sellerCountryData.localCurrency.exchangeRates[buyCurrencyCode] * shoePrice;
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

export default productCalculations;