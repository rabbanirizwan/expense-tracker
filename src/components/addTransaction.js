import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)
  const onSubmit = e => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text: text,
      amount: Number(amount)
    }
    addTransaction(newTransaction)
    setAmount(0)
    setText('')
  }
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">

          <input
            type="text"
            id="text"
            placeholder="Enter Name Of item..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <b style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center"
          }}
          >Amount <br />
            (negative - expense, positive - income)</b>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}