import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

declare global {
    interface Window {
        Telegram: {
            WebApp: {
                ready: () => void
                onEvent: (eventType: string, eventHandler: () => void) => void
                offEvent: (eventType: string, eventHandler: () => void) => void
                colorScheme: 'light' | 'dark'
            }
        }
    }
}

type Theme = 'light' | 'dark'

interface ThemeContextType {
    theme: Theme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
    children: ReactNode
}

export const TelegramThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light')

    useEffect(() => {
        window.Telegram.WebApp.ready()

        const currentTheme = window.Telegram.WebApp.colorScheme
        setTheme(currentTheme)

        const handleThemeChange = () => {
            setTheme(window.Telegram.WebApp.colorScheme)
        }

        window.Telegram.WebApp.onEvent('themeChanged', handleThemeChange)

        return () => {
            window.Telegram.WebApp.offEvent('themeChanged', handleThemeChange)
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTelegramTheme = (): Theme => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTelegramTheme must be used within a TelegramThemeProvider')
    }
    return context.theme
}