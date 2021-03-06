import { useState } from 'react';
import { RadioGroup } from '@headlessui/react'
import './index.css';
import { currencies, countries } from './buisnessLogicConfig';
import getProductCalculations from './productCaulculations';
export const initialProductData = {
    id: 1,
    countryCode: 'UK', // US, EU, UK
    price: 87,
    sizes: [
      { size: 6, price: 65 },
      { size: 7.5, price: 77 },
      { size: 8, price: 88 },
      { size: 10, price: 85 },
    ],
    name: 'Distant Mountains Artwork Tee',
    description: `KLEKT is Europe's original sneaker and streetwear trading marketplace. Having been established since 2013 KLEKT has`,
    status: 'Processing',
    step: 1,
    imageSrc: '/shoe.jpg',
  }

const classNames = (...classes)  => classes.filter(Boolean).join(' ')
export default function App() {
  const [product, setProduct] = useState(initialProductData);
  const [buyCurrencyCode, setBuyerCurrencyCode] = useState('GBP');
  const [deliveryCountryCode, setDeliveryCountryCode] = useState('UK');
  const [shoeSelectedSize, setShoeSelectedSize] = useState(product.sizes[0]);

  const productCalculations = getProductCalculations({
    buyCurrencyCode,
    deliveryCountryCode,
    shoePrice: shoeSelectedSize.price,
    sellerCountryCode: product.countryCode
  })

  const { deliveryData, shoePriceData, totalOrderCost } = productCalculations;

  const getShoePriceFrom = (shoePrice) => getProductCalculations({ buyCurrencyCode, deliveryCountryCode, shoePrice, sellerCountryCode: product.countryCode}).shoePriceData.shoePrice


  const isAdditionalTaxVisible = Boolean(deliveryData.additionalTax * 100);
  return (
    <div className="bg-white">
      <div>
      {/* Background data display */}
        <div className='w-40'>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Seller Country Code
          </label>
          <select
            value={product.countryCode}
            onChange={(e) => setProduct({ ...product, countryCode: e.target.value })}
            id="country"
            name="country"
            autoComplete="country-name"
            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
            >
            {['US', 'EUR', 'UK'].map(countryCode => <option key={countryCode}>{countryCode}</option>)}
          </select>
        </div>
        <div className='flex flex-col'>
          <code>
            Delivery Data: {JSON.stringify(deliveryData)}
          </code>
          <code>
            Sheo Price Data: {JSON.stringify(shoePriceData)}
          </code>
        </div>
      </div>

      {/* Order Details */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Order Details</h1>

        <div className="text-sm border-b border-gray-200 mt-2 pb-5 sm:flex sm:justify-between">
          <dl className="flex">
            <dt className="text-gray-500">Order number&nbsp;</dt>
            <dd className="font-medium text-gray-900">W086438695</dd>
            <dt>
              <span className="sr-only">Date</span>
              <span className="text-gray-400 mx-2" aria-hidden="true">
                &middot;
              </span>
            </dt>
            <dd className="font-medium text-gray-900">
              <time dateTime="2022-03-22">March 22, 2022</time>
            </dd>
          </dl>
        </div>

        <div className="mt-8">
          <h2 className="sr-only">Products purchased</h2>

          <div className="space-y-24">
              <div
                key={product.id}
                className="grid grid-cols-1 text-sm sm:grid-rows-1 sm:grid-cols-12 sm:gap-x-6 md:gap-x-8 lg:gap-x-8"
              >
                <div className="sm:col-span-4 md:col-span-5 md:row-end-2 md:row-span-2">
                  <div className="aspect-w-1 aspect-h-1 bg-gray-50 rounded-lg overflow-hidden">
                    <img src={product.imageSrc} alt={product.imageSrc} className="object-center object-cover" />
                  </div>
                </div>
                <div className="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    <a href={product.href}>{product.name}</a>
                  </h3>
                  <p className="font-medium text-indigo-600 mt-1 text-3xl ">{deliveryData.currencySymbol}{shoePriceData.shoePrice.toFixed(2)}</p>
                  <p className="text-gray-500 mt-3">{product.description}</p>
                </div>
                <div className="sm:col-span-12 md:col-span-7">
                  <div>
                  <div className="flex items-center justify-between mt-4">
                    <h2 className="text-sm font-medium text-gray-900">Avilable Sizes</h2>
                  </div>

                  <RadioGroup value={shoeSelectedSize} onChange={setShoeSelectedSize} className="mt-2">
                    <RadioGroup.Label className="sr-only">Choose a memory option</RadioGroup.Label>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                      {product.sizes.map((option) => (
                        <RadioGroup.Option
                          key={option.price}
                          value={option}
                          className={({ active, checked }) =>
                            classNames(
                              active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                              checked
                                ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                                : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                              'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer'
                            )
                          }
                        >
                          <RadioGroup.Label as="div" className='flex justify-center flex-col items-center'>
                              <div>{option.size} UK</div>
                              <div className='opacity-50'>{deliveryData.currencySymbol}{getShoePriceFrom(option.price).toFixed(2)}</div>
                          </RadioGroup.Label>
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                  <p className="font-medium text-gray-900 mt-6 md:mt-10">
                    {product.status} on <time dateTime={'2022-03-24'}>March 24, 2022</time>
                  </p>
                  <div className="mt-6">
                    <div className="bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-2 bg-indigo-600 rounded-full"
                        style={{ width: `calc((${product.step} * 2 + 1) / 8 * 100%)` }}
                      />
                    </div>
                    <div className="hidden sm:grid grid-cols-4 font-medium text-gray-600 mt-6">
                      <div className="text-indigo-600">Order placed</div>
                      <div className={classNames(product.step > 0 ? 'text-indigo-600' : '', 'text-center')}>
                        Processing
                      </div>
                      <div className={classNames(product.step > 1 ? 'text-indigo-600' : '', 'text-center')}>
                        Shipped
                      </div>
                      <div className={classNames(product.step > 2 ? 'text-indigo-600' : '', 'text-right')}>
                        Delivered
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>

        {/* Billing */}
        <div className="">
          <h2 className="sr-only">Billing Summary</h2>
          <div className='bg-gray-50 rounded-lg py-6 px-6 mt-10'>
            <div className='flex justify-between'>
              <div className='text-xl flex items-center font-medium ml-6'>Billing Summary</div>
              <dl className="flex">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mr-10">
                    Delivery Country
                  </label>
                  <select
                    value={deliveryCountryCode}
                    onChange={(e) => setDeliveryCountryCode(e.target.value)}
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 block bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                    >
                    {countries.map(({ countryCode }) => <option key={countryCode}>{countryCode}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Currency
                  </label>
                  <select
                    value={buyCurrencyCode}
                    onChange={(e) => setBuyerCurrencyCode(e.target.value)}
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 block bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                    >
                    {currencies.map(({ currencyCode }) => <option key={currencyCode}>{currencyCode}</option>)}
                  </select>
                </div>
              </dl>
              </div>
            <div className="lg:px-0 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <dl className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:pl-8 lg:col-span-5">
                <div>
                  <dt className="font-medium text-gray-900">Ships from</dt>
                  <dd className="mt-3 text-gray-500">
                    <span className="block">73 Lorem ipsum</span>
                    <span className="block">ON N3Y 4H8</span>
                    <span className="block">{product.countryCode}</span>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">Payment information</dt>
                  <dd className="mt-3 flex">
                    <div>
                      <svg
                        aria-hidden="true"
                        width={36}
                        height={24}
                        viewBox="0 0 36 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-auto"
                      >
                        <rect width={36} height={24} rx={4} fill="#224DBA" />
                        <path
                          d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                          fill="#fff"
                        />
                      </svg>
                      <p className="sr-only">Visa</p>
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-900">Ending with 4242</p>
                      <p className="text-gray-600">Expires 02 / 24</p>
                    </div>
                  </dd>
                </div>
              </dl>

              <dl className="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:pr-8 lg:col-span-7">
                <div className="pb-4 flex items-center justify-between">
                  <dt className="text-gray-600">Shoe price</dt>
                  <dd className="font-medium text-gray-900">{deliveryData.currencySymbol}{shoePriceData.shoePrice.toFixed(2)}</dd>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600">Delivery {isAdditionalTaxVisible && `(Additional Taxes ${deliveryData.additionalTax * 100}%)`}</dt>
                  <dd className="font-medium text-gray-900">{deliveryData.currencySymbol}{deliveryData.totalDeliveryPrice}</dd>
                </div>
                {/* <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600">Tax</dt>
                  <dd className="font-medium text-gray-900">$6.16</dd>
                </div> */}
                <div className="pt-4 flex items-center justify-between">
                  <dt className="font-medium text-gray-900">Order total</dt>
                  <dd className="font-medium text-indigo-600">{deliveryData.currencySymbol}{totalOrderCost.toFixed(2)}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}