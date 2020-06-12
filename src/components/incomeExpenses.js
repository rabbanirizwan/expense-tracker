import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses  = ()=>{
    const {transaction} = useContext(GlobalContext)

    const amount = transaction.map(transaction=>transaction.amount)
    const income = amount.length>1?amount
                   .filter(val=>val > 0)
                   .reduce((acc,item)=>(acc+=item))
                   .toFixed(2):0

    const expense = amount.length > 1?
                     amount
                    .filter(val => val < 0)
                    .reduce((acc,item)=>(acc+=item))*-1:
                    0
                    
    return(
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">${expense}</p>
        </div>
      </div>
    )
}