import { RatesItem } from './RatesItem'
import s from './RatesList.module.scss'

export const RatesList = ({ currencies, currencySelected }) => {
    return (
        <ul className={s.rates_list}>
            <li>1 {currencySelected} </li>
            {currencies.map((curr) => (
                <RatesItem
                    currency={curr.currency}
                    rate={curr.rate}
                    currencySelected={currencySelected}
                    key={curr.currency}
                />
            ))}
        </ul>
    )
}
