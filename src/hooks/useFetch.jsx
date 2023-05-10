import { useState, useEffect } from 'react'

export const useFetch = (url, arr = []) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then((resp) => resp.json())
        .then((resp) => setData(resp))
        .catch((err) => console.log(err))
        // pasamos el id como array de dependencia
        .finally(() => setLoading(false))
    }, arr)

    return ({data, loading})

    return ({data})
}