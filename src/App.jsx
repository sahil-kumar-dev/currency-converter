import useCurrency from "./hooks/useCurrency";
import { useState } from "react";
import swapimage from './assets/swap.png';

function App() {
  const [from, setfrom] = useState('usd');
  const [to, setto] = useState('inr')
  const [amount, setamount] = useState(null)
  const [convertedAmount, setconvertedAmount] = useState(null)

  const currency = useCurrency(from)
  const keys = Object.keys(currency)
  const current = currency[to]

  function setValue(e) {
    const inputText = e.target.value
    setamount(inputText.replace(/[^\d]/, ""))
  }

  function swap() {
    setto(from)
    setfrom(to)
    setamount(convertedAmount)
    setconvertedAmount(amount)
  }

  function convert() {
    const result = amount * current
    const fixed = result.toFixed(2)
    setconvertedAmount(fixed)
  }
  return (
    <div className="flex md:flex-row flex-col font-[cinzel]">
      <div className=" w-8/12 h-screen bg-[url('https://cdn.pixabay.com/photo/2020/03/18/20/01/frankfurt-4945405_1280.jpg')] bg-center bg-cover "></div>
      <div className="w-4/12 flex flex-col bg-gray-800 text-white justify-center items-center">
        <div className="w-10/12 rounded-lg shadow-sm shadow-white border-2 border-solid border-white flex justify-between items-end p-4 bg-[rgba(255,255,255,0.2)]">
          <div className="flex flex-col">
            <label htmlFor="amount" className="text-xl pb-3 font-bold font-[Merriweather] tracking-wider">From</label>
            <input
              type="text"
              onChange={setValue}
              id="amount"
              placeholder="Enter amount"
              value={amount}
              className="border-2 border-solid bg-inherit outline-none px-3 py-1"
            />
          </div>
          <select
            onChange={(e) => setfrom(e.target.value.toLowerCase())}
            value={from}
            className="border border-solid border-white text-lg bg-gray-700 w-1/5 py-1"
          >
            {
              keys.map(key => (<option value={key}>{key.toUpperCase()}</option>))
            }
          </select>
        </div>
        <button onClick={swap} className="p-3" title="Swap values">
          <img
            src={swapimage}
            className=" invert rotate-90 w-10"
          />
        </button>
        <div className="w-10/12 rounded-lg shadow-sm shadow-white border-2 border-solid border-white flex justify-between items-end p-4 bg-[rgba(255,255,255,0.2)]">
          <div className="flex flex-col">
            <label htmlFor="output" className="text-xl pb-3 font-bold font-[Merriweather] tracking-wider">To</label>
            <input
              type="text"
              id="output"
              placeholder="Converted amount"
              value={convertedAmount}
              className=" px-3 py-1 border-2 border-solid bg-inherit outline-none"
              readOnly
            />

          </div>
          <select
            onChange={(e) => setto(e.target.value.toLowerCase())}
            value={to}
            className="border border-solid border-white text-lg bg-gray-700 w-1/5 py-1"
          >
            {
              keys.map(key => (<option value={key}>{key.toUpperCase()}</option>))
            }
          </select>
        </div>

        <button
          disabled={amount===null || ''?true:false}
          onClick={convert}
          className=" px-4 py-2 bg-gray-600 text-xl tracking-wider rounded-lg outline-2 outline outline-offset-4 outline-white mt-8 active:outline-offset-2 disabled:bg-gray-400"
          >CONVERT {from.toUpperCase()} TO {to.toUpperCase()}
        </button>
      </div>
    </div>

  )
}

export default App
