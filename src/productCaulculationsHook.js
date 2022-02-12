import { currencies, countries, sameCountryDeliveryTax } from './buisnessLogicConfig';
const SELLER_COUNTRY_CODE = 'US'; // US, EU, UK

const productCalculationsHook = ({ buyCurrencyCode, deliveryCountryCode }) => {
    const selectedCurrencyData = currencies.find(({ currencyCode }) => currencyCode === buyCurrencyCode)
    const selectedCountryData = countries.find(({ countryCode }) => countryCode === deliveryCountryCode)
    const sellerCountryData = countries.find(({ countryCode }) => countryCode === SELLER_COUNTRY_CODE)

    const calculateDelivery = () => {
      const deliveryCostToSelectedCountry = sellerCountryData.deliveryCost[deliveryCountryCode]

      const isDeliveryToSameCountry = SELLER_COUNTRY_CODE === deliveryCountryCode
      const additionalTax = isDeliveryToSameCountry ? sameCountryDeliveryTax : selectedCountryData.additionalDeliveryTax;
      const deliveryAdditionalTax = deliveryCostToSelectedCountry * additionalTax;
      const deliveryWithAdditionalTax = deliveryAdditionalTax + deliveryCostToSelectedCountry;

      return {
          additionalTax,
          totalDeliveryPrice: deliveryWithAdditionalTax,
          currencySymbol: selectedCurrencyData.currencySymbol
        }
    }

    // const calculateShoeCost = () => {
    //   const deliveryCostToSelectedCountry = sellerCountryData.deliveryCost[deliveryCountryCode]

    //   const isDeliveryToSameCountry = SELLER_COUNTRY_CODE === deliveryCountryCode
    //   const additionalTax = isDeliveryToSameCountry ? sameCountryDeliveryTax : selectedCountryData.additionalDeliveryTax;
    //   const deliveryAdditionalTax = deliveryCostToSelectedCountry * additionalTax;
    //   const deliveryWithAdditionalTax = deliveryAdditionalTax + deliveryCostToSelectedCountry;

    //   return {
    //       totalDeliveryPrice: deliveryWithAdditionalTax,
    //       currencySymbol: selectedCurrencyData.currencySymbol
    //     }
    // }

    const deliveryData = calculateDelivery({ buyCurrencyCode, deliveryCountryCode })

    return {
        deliveryData: deliveryData
    }
}

export default productCalculationsHook;