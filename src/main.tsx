import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { TelegramThemeProvider } from './context/TelegramThemeProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TelegramThemeProvider>
    <App />
  </TelegramThemeProvider>
)
