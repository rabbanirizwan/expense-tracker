import React,{useContext} from 'react'
import {  GlobalContext } from '../context/GlobalState'

export const Balance = ()=>{
    const {transaction} = useContext(GlobalContext)
    const amounts = transaction.map(transaction=>transaction.amount)
    const balance = amounts.reduce((total,num)=>(total+=num),0).toFixed(2)
    console.log(typeof(Number(balance)))
    let icon = Number(balance) > 0 ? require('../img/happy.png'):require('../img/sick.png')
  
    return(
        <div style={{display:'flex',justifyContent:"space-around"}}>
         <div>
             <h4>Your Balance</h4>
             <h1 id="balance">{balance}</h1>
         </div>
         <img src={icon}/>
        </div>
       
    )
}