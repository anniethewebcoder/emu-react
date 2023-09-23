import { useEffect, useRef } from "react";
import PropTypes from 'prop-types'
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
                    defaultValue={value}
                    autoFocus={isFocused}
                    onChange={onChange}
                />
            </div>
        </>
    )
}

InputWithLabel.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    isFocused: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.string
}

export default InputWithLabel;