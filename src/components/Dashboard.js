import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const Dashboard = () => {
  const { transactions } = useContext(BudgetContext);

  const income = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expenses = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = income - expenses;

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Available balance</h2>
      <p className={`text-3xl font-bold ${balance >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        ${balance.toFixed(2)}
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <p>Income</p>
          <h3 className="text-green-500 font-bold">${income.toFixed(2)}</h3>
        </div>
        <div className="bg-rose-100 p-4 rounded-lg">
          <p>Expense</p>
          <h3 className="text-red-500 font-bold">${expenses.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
