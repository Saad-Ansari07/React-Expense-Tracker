import React from 'react';
import './App.css';

// Importing components 
import { Header } from './components/header';
import { Balance } from './components/balance';
import { DarkMode } from './components/darkmode';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';


function App() {
  return (
    <GlobalProvider>
     <div className="container">
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
      <DarkMode/>
     </div>
    </GlobalProvider>
  );
}

export default App;
