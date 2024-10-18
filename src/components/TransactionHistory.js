import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useContext(BudgetContext);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
      <ul className="space-y-4">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <div>
              <p className="font-semibold">{transaction.description}</p>
              <p className="text-sm">{transaction.category}</p>
            </div>
            <div className="flex space-x-2 items-center">
              <p className={`font-bold ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                ${transaction.amount.toFixed(2)}
              </p>
              <button onClick={() => deleteTransaction(transaction.id)} className="text-red-500">
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
