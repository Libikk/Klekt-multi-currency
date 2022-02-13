// static data that isn't dynamic for the unit test purposes

export const exchangeRateSwingFactor = 0.03;
export const sameCountryDeliveryTax = 0;
export const currencies = [
    {
        currencyCode: 'USD',
        currencySymbol: '$',
        exchangeRates: {
            USD: 1,
            EUR: 0.88,
            GBP: 0.74,
        },
        deliveryCharge: 5,
    },
    {
        currencyCode: 'EUR',
        currencySymbol: '€',
        exchangeRates: {
            USD: 1.13,
            EUR: 1,
            GBP: 0.83,
        },
        deliveryCharge: 5,
    },
    {
        currencyCode: 'GBP',
        currencySymbol: '£',
        exchangeRates: {
            USD: 1.36,
            EUR: 1.20,
            GBP: 1,
        },
        deliveryCharge: 5,
    },
]

const [USD, EUR, GBP]  = currencies;

export const countries = [
    {
        countryCode: 'EUR',
        localCurrency: EUR,
        sameCountryProcessingFee: 0,
        processingFee: 0.03,
        deliveryCost: {
            UK: 5,
            US: 5,
            EUR: 5
        },
        additionalDeliveryTax: 0.20,
    },
    {
        countryCode: 'US',
        localCurrency: USD,
        sameCountryProcessingFee: 0,
        processingFee: 0.04,
        deliveryCost: {
            UK: 5,
            US: 5,
            EUR: 5
        },
        additionalDeliveryTax: 0.20,
    },
    {
        countryCode: 'UK',
        localCurrency: GBP,
        sameCountryProcessingFee: 0,
        processingFee: 0.02,
        deliveryCost: {
            UK: 5,
            US: 5,
            EUR: 5
        },
        additionalDeliveryTax: 0.20,
    },
]
