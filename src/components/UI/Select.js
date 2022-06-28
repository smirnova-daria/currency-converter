import s from './Select.module.scss'

export const Select = ({ currencies, currency, onChange }) => {
    return (
        <select
            onChange={(ev) => onChange(ev.target.value)}
            value={currency}
            className={s.select}
        >
            {currencies.map((curr) => (
                <option value={curr} key={curr}>
                    {curr}
                </option>
            ))}
        </select>
    )
}
