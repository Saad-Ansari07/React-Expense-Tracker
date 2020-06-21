import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../Context/GlobalState';

// Create the initial state
const initialState = {
  transactions: []
}



export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
    return (
        <div>
      <h3>History</h3>
      <ul className="list">
       {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))};
      </ul>
      </div>
    )
}
