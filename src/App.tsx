import { useEffect, useState } from 'react'
import './App.css'
import calculatorImage from './assets/img/calculator.png'
import { useTelegramTheme } from './context/TelegramThemeProvider'

function App() {
  // const [darkMode, setDarkMode] = useState<boolean>(false)
  const [amount, setAmount] = useState('')
  const [price, setPrice] = useState<{ tl: number | null, uah: number | null }>({ tl: null, uah: null })
  const [selectedCountry, setSelectedCountry] = useState<'turkey' | 'ukraine' | null>(null)

  const theme = useTelegramTheme()

  useEffect(() => {
    if (theme == 'dark') {
      document.documentElement.classList.add('dark')
      document.body.style.backgroundColor = '#1f2124'
    } else {
      document.documentElement.classList.remove('dark')
      document.body.style.backgroundColor = '#fff'
    }
  }, [theme])

  const calculatePrices = (amount: number): { tl: number, uah: number } => {
    let tlPrice: number
    let uahPrice: number

    if (amount <= 1000) {
      tlPrice = amount * 3.5
    } else if (amount <= 2000) {
      tlPrice = amount * 3.3
    } else {
      tlPrice = amount * 3.1
    }

    if (amount <= 1000) {
      uahPrice = amount * 3.2
    } else {
      uahPrice = amount * 2.75
    }

    return { tl: tlPrice, uah: uahPrice }
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value)
      setPrice({ tl: null, uah: null })
      setSelectedCountry(null)
    }
  }

  const handleCalculate = (country: 'turkey' | 'ukraine') => {
    const numAmount = Number(amount)
    if (numAmount > 0) {
      const calculatedPrices = calculatePrices(numAmount)
      setPrice(calculatedPrices)
      setSelectedCountry(country)
    } else {
      setPrice({ tl: null, uah: null })
      setSelectedCountry(null)
    }
  }

  // const handleOrder = () => {
  //   if (selectedCountry && (price.tl !== null || price.uah !== null)) {
  //     const selectedPrice = selectedCountry === 'turkey' ? price.tl : price.uah
  //     const currency = selectedCountry === 'turkey' ? 'TL' : 'UAH'
  //     console.log('Placing order:', amount, 'rubles,', selectedPrice, currency)
  //     // alert(`Заказ на сумму ${amount} рублей (${selectedPrice?.toFixed(2)} ${currency})`)
  //     setAmount('')
  //     setPrice({ tl: null, uah: null })
  //     setSelectedCountry(null)
  //   }
  // }

  return (
    <>
      <div className={`${theme == 'dark' ? 'dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:border-[rgba(169,169,169,0.1)]' : ''} backdrop-blur-[25.2px] border rounded-2xl border-solid p-6 max-w-sm mx-auto mt-[25px]`}>
        <div className="flex justify-between items-center">
          <div>
            <h2 className={`${theme == 'dark' ? 'dark:text-white' : ''} text-[26px] font-bold mb-2`}>Ladyshiva2077</h2>
            <h3 className={`${theme == 'dark' ? 'dark:text-white' : ''} font-semibold mb-4`}>Калькулятор</h3>
          </div>
          <img src={calculatorImage} alt="img" width={100} height={200} />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className={`${theme == 'dark' ? 'dark:text-gray-200' : ''} block text-sm font-medium text-gray-700 mb-1`}>
            Введите сумму:
          </label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            className="w-full px-3 py-2 border font-sans border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Введите сумму"
          />
        </div>
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => handleCalculate('turkey')}
            className="flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Турция 🇹🇷
          </button>
          <button
            onClick={() => handleCalculate('ukraine')}
            className="flex-1 bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Украина 🇺🇦
          </button>
        </div>
        {selectedCountry && (
          <div className="mb-4 text-sm">
            <p className={`${theme == 'dark' ? 'dark:text-white' : ''} font-semibold`}>
              Цена в {selectedCountry === 'turkey' ? 'Турции' : 'Украине'}:
              <span className='text-green-600 font-bold'>
                {selectedCountry === 'turkey'
                  ? ` ${price.tl?.toFixed(2)} рубль`
                  : ` ${price.uah?.toFixed(2)} рубль`
                }
              </span >
            </p >
          </div >
        )
        }
        <a
          href='https://t.me/s/LadyShiva90'
          // onClick={handleOrder}
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300 flex items-center justify-center"
        // disabled={!selectedCountry || (price.tl === null && price.uah === null)}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Оформить заказ
        </a>
        <a
          href='https://t.me/s/Ladyshiva2077'
          // onClick={handleOrder}
          className="w-full bg-[#229ED9] mt-3 text-white py-2 rounded-md hover:bg-[#229fd9a2] transition duration-300 flex items-center justify-center"
        // disabled={!selectedCountry || (price.tl === null && price.uah === null)}
        >
          <svg width={20} height={20} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width={100} height={100} fill="url(#pattern0_441_2)" />
            <defs>
              <pattern id="pattern0_441_2" patternContentUnits="objectBoundingBox" width={1} height={1}>
                <use xlinkHref="#image0_441_2" transform="scale(0.01)" />
              </pattern>
              <image id="image0_441_2" width={100} height={100} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFAUlEQVR4nO2dSYhcRRiAi8GIURMTNYkScYsG1xk8C25xxYniQTAGBQ9uV2/ePBiJcQlqLllE0LjFg3owgome3EAJRAm4C5M4wxhRyUBitvnkxz/QtDOZt/zdVfXe/8FcuvvV+6urX9W/TwiO4ziO4ziO4ziO4ziO4ziO4zghAHOBIeAGYDlwj/4t19fkvbn+XfUA4BTgFmA18AnwG8WRz36s194sY/kiVVuEU4H7gW3AIew4CHwE3OeLU2whlgKbgAl6z4Tea6k/Nf9fiCuAt4Cj9J8jwJvA5a1fGD0fntCtJDaHgRdaqwyoRlTmgO4Xe4Dh0BaAE/SpiLE9FWVSn5YTQ5MBzgK+JB++ABaFJgJcAPxAfvwCXByaBDAIjJEvYzKH0ASACzNfjGP8nr3NAiwAvqc5/CTnYMgR0VAyO8CL8jkwK+QG8DzNZU3I0OgTXb6pTAK3hxwA5qi123R2i1c6pA6wlvawJmTgtRUnXVs4BFwaUgV4m/bxekgR4CKNLbSNI0m6VjT6lpPVvQV4HHgR2F9zvA0hwRh4P8KudRB3/weirgIDXfI/XGtk2AecHFJBExJS5Q/gGWDJceS/yuA+K0MqaHZIanwFPACcVED+ZQb3+zCkgDyqicTEhX/0bLix5BweoT4Hk9i2NIktNns0LLyg4hyeNZKj1A+hJ2hWYKxDehtwt8Tpa87hfSOZVtl9s9UnI+md/eRP/UUvMZzDLiPZtlvJVGcy/Url2Qk8VHSf1hi+PEHrZvjcAHDASMbdIYEs9F5yGHgHuLakXA+qbTA+U0YicK6xWz6eB9hIf5+KceBJ4JyS8pytxh8ax7+swDVSvmDJUIgFcL3xZL7WbWl2BVnkcN9bZjGMrPRurgmRI4MW+rvYDldXlGEesL5jvBFxdJa4Xqx4S+JFEoEVNQT/S22HhTV/EKMdY/4KnF9yjHexZUXIcEFeAebXuO984NWuMX+UA7rCWN/SoAWpsmVN1DHkgDu6ngrhO2BxhbEGDFzv3cTLnAeuq6gaPlp2UYDTgdemGG9X1eQ14DzsKaWip6T2yuH7EnDTTGn/wJ3TpKN+U/MMuhV7hmIbhhb5V39rSdu9x2wP4DR1XL43zTU7gDNryv8YtsQ1DHVSMaqgdtRRCnoYdo7rOonkXKSo0VdA9s+wZXtb3e/zjGQXz7ElSbjfpUNCv1lrILf4vaxZZvOt1i9tjhHCfUNU4RpyW8TROzlQxQfXE7RdRQxGxThNRMPaGlIhgTSgLcAZJWWWJ6wZLpNptq3YiXJjYkCWkFncLVZMJNdpCNhIGrwsRmWBTEvLxgXrQ2pI0kFCydajxztbgLsan2wtqPsjFSYlCXqqZjJyABveZ3NIFUkoSLBgZ69qVIs7YjiThgU7l4SUAZ4jXfYbj/d0SB0v+kwQiZq1oCz6tpAThgnMKbI65Ia0n9B+U03j0yxba3Q0n7G0iFNoPrOoCe2ZurNEcmQ8WQOwhQ3MRoErQ5PQ8oAce2f9XCY1NStk/9V+Uzkd4AtDk8msTeys0Ba0gF9aHKXGSHZGn3FJdWqtxueEtiMtjqSrDnHiKXLPzcl7bSN2FNqg9YG9Zp8W+phV8zZ9K1sp7Sq0O4Nlqs5WzSGO33UhR4DZ0iEBeEpSNUsqAiN6zSrNw0ojb6pp8F+SwqDWpwx3/FOwYX1tMIsGlY7jOI7jOI7jOI7jOI7jOI7jhD7wL9UGIJV9txW0AAAAAElFTkSuQmCC" />
            </defs>
          </svg>


          Telegram
        </a>
      </div >
    </>
  )
}

export default App