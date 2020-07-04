import React, { useState } from 'react'
import HelloWorld from './components/HelloWorld'

function App() {
  const [currency1, setCurrency1] = useState('GBP')
  const [currency2, setCurrency2] = useState('GBP')

  const [baseValue, setBaseValue] = useState(0)

  const [currency] = useState({
    base: 'USD',
    rates: {
      GBP: 0.90225,
      HKD: 8.7469,
      IDR: 16227.58,
      ILS: 3.8903,
      DKK: 7.4506,
      INR: 84.354,
      CHF: 1.0648,
      MXN: 25.536,
      CZK: 26.632,
      SGD: 1.5726,
      THB: 35.054,
      HRK: 7.5605,
      MYR: 4.8366,
      NOK: 10.6873,
      CNY: 7.9759,
      BGN: 1.9558,
      PHP: 56.078,
      SEK: 10.4635,
      PLN: 4.474,
      ZAR: 19.0952,
      CAD: 1.5343,
      ISK: 156.2,
      BRL: 5.9823,
      RON: 4.8355,
      NZD: 1.7297,
      TRY: 7.7368,
      JPY: 121.24,
      RUB: 79.4434,
      KRW: 1353.9,
      EUR: 0.8891,
      HUF: 351.59,
      AUD: 1.6296,
    },
    date: new Date(),
  })

  const formattedDate = `${
    currency.date.getMonth() + 1}-${currency.date.getDate()}-${currency.date.getFullYear()}`

  const formattedCurrencyOptions = Object.keys(
    currency.rates
  ).map((currencyCode) => <option>{currencyCode}</option>)

  function handleAmountChanged(event) {
    const { value } = event.target
    setBaseValue(parseInt(value))
  }

  function handleCurrency1Selected(event) {
    setCurrency1(event.target.value)
  }

  function handleCurrency2Selected(event) {
    setCurrency2(event.target.value)
  }

  const value1 =
    baseValue !== null && (baseValue * currency.rates[currency1]).toFixed(2)
  const value2 =
    baseValue !== null && (baseValue * currency.rates[currency2]).toFixed(2)

  return (
    <body>
        <header className="container">
          <h1>Currency Converter</h1>
        </header>
        <main>
        <p className="date">{formattedDate}</p>
        <form>
          <label>
            Amount: $
            <input type="int" name="amount " onChange={handleAmountChanged} />
          </label>
          <label>
            Currency 1:
            <select onChange={handleCurrency1Selected}>
              {formattedCurrencyOptions}
            </select>
            <span>{value1 !== false && `  Converted value: ${value1}`}</span>
          </label>
          <label>
            Currency 2:
            <select onChange={handleCurrency2Selected}>
              {formattedCurrencyOptions}
            </select>
            <span>{value2 !== false && `  Converted value: ${value2}`}</span>
          </label>
        </form>
      </main>
    </body>
  )
}

export default App
