import { useEffect, useRef } from "react";

const InputWithLabel = ({ type, value, isFocused, onChange, children }) => {

    const inputRef = useRef()

    useEffect(() => {
        if(isFocused && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isFocused])

    return (
        <>
            <div className="inputfield">
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