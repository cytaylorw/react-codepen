import { useState, useEffect} from 'react'

const PREFIX = 'codepen-clone-'

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)

        if(jsonValue != null) return JSON.parse(jsonValue)

        return typeof initialValue === 'function' ? initialValue() : initialValue
        // if(typeof initialValue === 'function'){

        // }else{

        // }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]
}
