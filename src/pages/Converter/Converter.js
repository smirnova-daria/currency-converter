import s from './Converter.module.scss'
import { Input } from '../../components/UI/Input'
import { Select } from '../../components/UI/Select'
import { useEffect, useState } from 'react'
import { db } from '../../assets/db/db'
export const Converter = () => {
    const [amount1, setAmount1] = useState(1)
    const [amount2, setAmount2] = useState(1)
    const [currency1, setCurrency1] = useState('USD')
    const [currency2, setCurrency2] = useState('RUB')
    const [rates, setRates] = useState([])

    useEffect(() => {
        // fetch(
        //     `https://api.apilayer.com/exchangerates_data/latest?apikey=${process.env.REACT_APP_API_KEY}`
        // )
        //     .then((response) => response.json())
        //     .then((data) => setRates(data.rates))
        //     .catch((error) => console.log('error', error))
        setRates(db.rates)
        //временное решение - положить котировки в локальный файл(чтобы не использовать запросы к api)
    }, [])
    useEffect(() => {
        if (!!rates) {
            function init() {
                handleAmount1Change(1)
            }
            init()
        }
    }, [rates])

    const formatNumber = (number) => {
        return number.toFixed(4)
    }

    const handleAmount1Change = (amount1) => {
        setAmount2(
            formatNumber((amount1 * rates[currency2]) / rates[currency1])
        )
        setAmount1(amount1)
    }
    const handleAmount2Change = (amount2) => {
        setAmount1(
            formatNumber((amount2 * rates[currency1]) / rates[currency2])
        )
        setAmount2(amount2)
    }
    const handleCurrency1Change = (currency1) => {
        setAmount2(
            formatNumber((amount1 * rates[currency2]) / rates[currency1])
        )
        setCurrency1(currency1)
    }
    const handleCurrency2Change = (currency2) => {
        setAmount1(
            formatNumber((amount2 * rates[currency1]) / rates[currency2])
        )
        setCurrency2(currency2)
    }
    return (
        <section className={s.converter}>
            <div className="container">
                <h1 className={s.converter__title}>Конвертер валют</h1>
                <div className={s.converter__wrapper}>
                    <div className={s.groupp__wrapper}>
                        <Input
                            onChange={handleAmount1Change}
                            amount={amount1}
                        />
                        <Select
                            currencies={Object.keys(rates)}
                            currency={currency1}
                            onChange={handleCurrency1Change}
                        />
                    </div>
                    <div className={s.groupp__wrapper}>
                        <Input
                            onChange={handleAmount2Change}
                            amount={amount2}
                        />
                        <Select
                            currencies={Object.keys(rates)}
                            currency={currency2}
                            onChange={handleCurrency2Change}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
