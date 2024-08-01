import { useEffect, useState } from 'react';
import './App.css'


function App() {

  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#374151'
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#fff'
    }
  }, [darkMode]);

  const [amount, setAmount] = useState('');
  const [rubles, setRubles] = useState<number | null>(null);
  const exchangeRate = 4.5;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) { // Raqamlar va nuqtaga ruxsat beriladi
      setAmount(value);
      setRubles(null);
    }
  };

  const handleConvert = () => {
    const numAmount = Number(amount);
    if (numAmount > 0) {
      const calculatedRubles = numAmount * exchangeRate;
      setRubles(calculatedRubles);
    } else {
      setRubles(null);
    }
  };

  const handleOrder = () => {
    if (rubles !== null) {
      console.log('Placing order:', amount, 'liras,', rubles, 'rubles');
      alert(`Заказ на сумму ${amount} лир (${rubles.toFixed(2)} рублей) оформлен!`);
      setAmount('');
      setRubles(null);
    }
  };

  return (
    <>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto dark:bg-gray-800 mt-[25px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold dark:text-white">Tolik Store</h2>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg shadow-lg focus:outline-none"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Калькулятор</h3>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Введите сумму в лирах:
          </label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Введите сумму"
          />
        </div>
        <button
          onClick={handleConvert}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 mb-2"
        >
          Конвертировать
        </button>
        {rubles !== null && (
          <div className="mb-4 text-sm">
            <p className='dark:text-white'>Курс обмена: 1 лира = {exchangeRate} рублей</p>
            <p className="font-semibold dark:text-white">Стоимость в рублях: <span className='text-green-600 font-bold'>{rubles.toFixed(2)}</span></p>
          </div>
        )}
        <button
          onClick={handleOrder}
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300 flex items-center justify-center"
          disabled={rubles === null}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Сделать заказ
        </button>
      </div>
    </>
  )
}

export default App
