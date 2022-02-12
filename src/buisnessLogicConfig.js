export const exchangeRateSwingFactor = 0.03;

export const currencies = [
    {
        currencyCode: 'USD',
        currencySymbol: '$',
        exchangeRates: {
            EUR: 0.88,
            GBP: 0.74,
        },
        deliveryCharge: 5,
        additionalDeliveryTax: 0.20,
    },
    {
        currencyCode: 'EUR',
        currencySymbol: '€',
        exchangeRates: {
            USD: 1.13,
            GBP: 0.83,
        },
        deliveryCharge: 5,
        additionalDeliveryTax: 0.20,
    },
    {
        currencyCode: 'GBP',
        currencySymbol: '£',
        exchangeRates: {
            EUR: 1.20,
            USD: 1.36,
        },
        deliveryCharge: 5,
        additionalDeliveryTax: 0.20,
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
            US: 5
        }
    },
    {
        countryCode: 'US',
        localCurrency: USD,
        sameCountryProcessingFee: 0,
        processingFee: 0.04,
        deliveryCost: {
            EUR: 5,
            UK: 5
        }
    },
    {
        countryCode: 'UK',
        localCurrency: GBP,
        sameCountryProcessingFee: 0,
        processingFee: 0.02,
        deliveryCost: {
            EUR: 5,
            US: 5
        }
    },
]
