// import React, { useState, useEffect } from 'react';
// import { Moon } from 'lucide-react';

// const TolikStoreCalculator = () => {
//   const [amount, setAmount] = useState('');
//   const [rubles, setRubles] = useState(0);
//   const exchangeRate = 4.5;

//   useEffect(() => {
//     if (amount && !isNaN(Number(amount))) {
//       const calculatedRubles = Number(amount) * exchangeRate;
//       setRubles(calculatedRubles);
//     } else {
//       setRubles(0);
//     }
//   }, [amount]);

//   const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setAmount(e.target.value);
//   };

//   const handleOrder = () => {
//     console.log('Placing order:', amount, 'liras,', rubles, 'rubles');
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold">Tolik Store</h2>
//         <Moon className="text-yellow-400" size={24} />
//       </div>
//       <h3 className="text-lg font-semibold mb-4">Калькулятор</h3>
//       <div className="mb-4">
//         <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
//           Введите сумму в лирах (минимум 10 лир):
//         </label>
//         <input
//           type="number"
//           id="amount"
//           value={amount}
//           onChange={handleAmountChange}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           min="10"
//         />
//       </div>
//       <div className="mb-4 text-sm">
//         <p>Курс обмена: 1 лира = {exchangeRate} рублей</p>
//         <p className="font-semibold">Стоимость в рублях: {rubles.toFixed(2)}</p>
//       </div>
//       <button
//         onClick={handleOrder}
//         className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center"
//         disabled={!amount || Number(amount) < 10}
//       >
//         <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//         Сделать заказ
//       </button>
//     </div>
//   );
// };

// export default TolikStoreCalculator;