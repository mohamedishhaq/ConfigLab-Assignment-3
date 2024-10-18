import React, { useState, useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const TransactionForm = () => {
  const { addTransaction } = useContext(BudgetContext);
  const [formData, setFormData] = useState({
    type: 'income',
    category: '',
    amount: '',
    description: ''
  });

  const categories = [
    { value: '', label: 'Select a category' },
    { value: 'Salary', label: 'Salary' },
    { value: 'Freelance', label: 'Freelance' },
    { value: 'Investments', label: 'Investments' },
    { value: 'Food', label: 'Food' },
    { value: 'Transport', label: 'Transport' },
    { value: 'Utilities', label: 'Utilities' },
    { value: 'Entertainment', label: 'Entertainment' },
    { value: 'Health', label: 'Health' },
    { value: 'Other', label: 'Other' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      ...formData,
      amount: parseFloat(formData.amount)
    };
    addTransaction(newTransaction);
    setFormData({ type: 'income', category: '', amount: '', description: '' });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Add Transaction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Select Type</label>
          <div className="flex space-x-2">
            <button
              type="button"
              className={`px-4 py-2 rounded-md ${formData.type === 'income' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setFormData({ ...formData, type: 'income' })}
            >
              Income
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md ${formData.type === 'expense' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setFormData({ ...formData, type: 'expense' })}
            >
              Expense
            </button>
          </div>
        </div>
        <div>
          <label>Category</label>
          <select
            className="border w-full p-2"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            className="border w-full p-2"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            className="border w-full p-2"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>
        <button type="submit" className="bg-yellow-500 w-full text-white py-2 rounded-lg">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
