import React, { useState } from 'react';
import './Salary.css'

function Salary() {
  const[amount,setAmount]=useState(100);
  const[desc,setDesc]=useState('');
  const[iamount,setIamount]=useState();
  const[income,setIncome]=useState(0);
  const[expense,setExpense]=useState(0);
  const [transactions,setTransactions]=useState([])
console.log('transaction',transactions)
   const handletransaction=()=>{
    setAmount(amount+Number(iamount));
    setTransactions([...transactions,{ Amount:iamount,description:desc}]);
    if(iamount>0){
    setIncome(income+Number(iamount))
    }
    else{
    setExpense(expense-Number(iamount))
    }
   }
   const handlechange=(e)=>{
    
    setDesc(e.target.value)
    
   }
   const handlechanged=(e)=>{
     
     setIamount(e.target.value)
    
   }
  return (
    <div  className='container'>
      
      <h3 >Expense Tracker</h3>
      <h4>Your Balance {amount} </h4>
      <div className='row border'>
        <div className='col '>
          <h5>Income</h5>
          {income}

          </div>
        <div className='col '>
          <h5>Expense</h5>
          {expense}
          </div>
      </div>
      <h5 className="history">History</h5>
      {transactions.map(tr=><div> <span>{tr.description}</span> <span>{tr.Amount}</span> </div>)}
      <h5 className='add'>Add new transaction</h5>
      <label>Text</label><br/>
      <input type='text' placeholder='Enter Text' value={desc} name='desc' onChange={handlechange} />
      <h6>Amount</h6>
      (negative-expense,positive-income)<br/>
      <input type='number' value={iamount} name={iamount} onChange={handlechanged}/><br/>
      <div>
      
      <button onClick={handletransaction} className='btn btn-primary'>Add transaction</button>
</div>



      </div>
  )
}

export default Salary;