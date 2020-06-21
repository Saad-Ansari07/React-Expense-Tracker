import React from 'react';
import './App.css';

// Importing components 
import { Header } from './components/header';
import { Balance } from './components/balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';


function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className="container">
      <Balance></Balance>
      <IncomeExpenses></IncomeExpenses>
      <TransactionList></TransactionList>
      <AddTransaction></AddTransaction>
     </div>
    </GlobalProvider>
  );
}

export default App;
