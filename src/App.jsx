import InputField from "./InputField"
import useCurrency from "./hooks/useCurrency";
import { useState } from "react";

function App() {
  const [from, setfrom] = useState('usd');
  const [to, setto] = useState('inr')
  const [amount, setamount] = useState(1)
  const [convertedAmount, setconvertedAmount] = useState(0)

  const currency = useCurrency(from)
  const keys = Object.keys(currency)
  const current = currency[to]

  function swap() {
    setto(from)
    setfrom(to)
    setamount(convertedAmount)
    setconvertedAmount(amount)
  }

  function convert() {
    const result = amount * current
    const fixed = result.toFixed(4)
    console.log(to);
    console.log(from);
    setconvertedAmount(fixed)
  }

  // console.log(current);
  return (
    <>
      <div>
        <label htmlFor="amount">From</label>
        <input
          type="text"
          onChange={(e) => setamount(e.target.value)}
          id="amount"
          placeholder="Enter amount"
          value={amount}
          className="border-2 border-solid "
        />
        <select name="" id="" onChange={(e) => setfrom(e.target.value.toLowerCase())} value={from}>
          {
            keys.map(key => (<option value={key}>{key.toUpperCase()}</option>))
          }
        </select>
      </div>

      <div>
        <label htmlFor="output"></label>
        <input
          type="text"
          id="output"
          readOnly
        />

        <select name="" id="" onChange={(e) => setto(e.target.value.toLowerCase())} value={to}>
          {
            keys.map(key => (<option value={key}>{key.toUpperCase()}</option>))
          }
        </select>

      </div>

      <button onClick={swap}>Swap</button>
      <button onClick={convert}>click</button>
      <InputField />
    </>

  )
}

export default App
