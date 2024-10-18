import React from 'react';
import { BudgetProvider } from './context/BudgetContext';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';
import TransactionHistory from './components/TransactionHistory';
import FinancialSummary from './components/FinancialSummary';
import './index.css';

const App = () => {
  return (
    <BudgetProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="container mx-auto grid gap-4 md:grid-cols-4">
          {/* Dashboard */}
          <div className="md:col-span-4 bg-white p-6 rounded-lg shadow-md mb-4">
            <Dashboard />
          </div>

          {/* Add Transaction Form */}
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-md">
            <TransactionForm />
          </div>

          {/* Transaction History */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <TransactionHistory />
          </div>

          {/* Financial Summary */}
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-md">
            <FinancialSummary />
          </div>
        </div>
      </div>
    </BudgetProvider>
  );
};

export default App;
