import { useEffect, useState } from 'react'
import { Select } from '../../components/UI/Select'
import { RatesList } from './components/RatesList'
import s from './ExchangeRates.module.scss'
import { db } from '../../assets/db/db'

export const ExchangeRates = () => {
    const [currency, setCurrency] = useState('RUB')
    const [rates, setRates] = useState([])
    const [listRates, setListRates] = useState([])

    useEffect(() => {
        fetch(
            `https://api.apilayer.com/exchangerates_data/latest?apikey=${process.env.REACT_APP_API_KEY}`
        )
            .then((response) => response.json())
            .then((data) => setRates(data.rates))
            .catch((error) => console.log('error', error))

        // setRates(db.rates)
        //временное решение - положить котировки в локальный файл(чтобы не использовать запросы к api)
    }, [])
    useEffect(() => {
        if (!!rates) {
            function init() {
                handleCurrencyChange('RUB')
            }
            init()
        }
    }, [rates])

    const handleCurrencyChange = (currency) => {
        setCurrency(currency)
        const newRates = []
        for (let curr in rates) {
            const rate = (rates[curr] / rates[currency]).toFixed(4)
            newRates.push({ currency: curr, rate })
        }
        setListRates(newRates)
    }

    return (
        <section className={s.rates}>
            <div className="container">
                <div>
                    <h1 className={s.rates__title}>
                        Выберите базовую валюту, чтобы рассчитать котировки
                    </h1>
                    <Select
                        currencies={Object.keys(rates)}
                        currency={currency}
                        onChange={handleCurrencyChange}
                    />
                    <div className={s.list_wrapper}>
                        <RatesList
                            currencies={listRates}
                            currencySelected={currency}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
