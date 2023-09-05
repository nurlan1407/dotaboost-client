import React, {ChangeEvent} from 'react'
import cls from './input.module.scss'

type InputTypes = "text" | "email" | "password"

interface InputComponentProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    label: string,
    value: string,
    type: InputTypes,
    placeHolder?: string
}

export const InputComponent: React.FC<InputComponentProps> = (props) => {
    const {onChange, label, value, type, placeHolder} = props
    return (
        <>
            <label htmlFor="input" className={cls.label}>{label}</label>
            <input
                className={cls.input}
                id="input"
                maxLength={40}
                type={type}
                value={value}
                onChange={(e) => onChange(e)}
            />
        </>

    )
}
