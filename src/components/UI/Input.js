import s from './Input.module.scss'

export const Input = ({ onChange, amount }) => {
    return (
        <input
            type="number"
            onChange={(ev) => onChange(ev.target.value)}
            value={amount}
            className={s.input}
            min="0"
        ></input>
    )
}
