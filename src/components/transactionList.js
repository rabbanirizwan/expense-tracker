import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './transaction'

export const TransactionList = () => {
    const { transaction } = useContext(GlobalContext)
    console.log(transaction)
    return (
        <>
            <h3 style={{ textAlign: "center" }}>History</h3>
            <ul id="list" className="list">
                {transaction.map(val => (<Transaction key={val.id} transaction={val} />))}

            </ul>
        </>

    )
}