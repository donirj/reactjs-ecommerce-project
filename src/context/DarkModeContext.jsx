import { createContext } from "react"
import { useState } from 'react'

export const DarkModeContext = createContext()

// recibe children por props
export const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)

    const changeMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <DarkModeContext.Provider value={{
            darkMode,
            changeMode
        }}>
            {children}
        </DarkModeContext.Provider>
    )

}