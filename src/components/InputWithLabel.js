import { useEffect, useRef } from "react";
import styles from './../css/app.module.css'

const InputWithLabel = ({ type, value, isFocused, onChange, children }) => {

    const inputRef = useRef()

    useEffect(() => {
        if(isFocused && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isFocused])

    return (
        <>
            <div className={styles.inputfield}>
                <label htmlFor="todoTask">{children}</label>
                <input
                    type={type}
                    value={value}
                    autoFocus={isFocused}
                    onChange={onChange}
                />
            </div>
        </>
    )
}

export default InputWithLabel;