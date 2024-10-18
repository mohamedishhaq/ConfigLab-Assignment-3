import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const FinancialSummary = () => {
  const { transactions } = useContext(BudgetContext);

  // Prepare income and expense categories
  const incomeCategories = {};
  const expenseCategories = {};

  transactions.forEach(transaction => {
    if (transaction.type === 'income') {
      incomeCategories[transaction.category] = (incomeCategories[transaction.category] || 0) + transaction.amount;
    } else if (transaction.type === 'expense') {
      expenseCategories[transaction.category] = (expenseCategories[transaction.category] || 0) + transaction.amount;
    }
  });

  // Create data for income ring chart
  const incomeData = {
    labels: Object.keys(incomeCategories),
    datasets: [
      {
        data: Object.values(incomeCategories),
        backgroundColor: [
          '#4CAF50', // Green for income
          '#66BB6A', // Light green for income
          '#2196F3', // Blue for another income category
          '#42A5F5', // Light blue for additional income categories
        ],
        hoverBackgroundColor: [
          '#66BB6A',
          '#81C784',
          '#64B5F6',
          '#90CAF9',
        ],
      },
    ],
  };

  // Create data for expense ring chart
  const expenseData = {
    labels: Object.keys(expenseCategories),
    datasets: [
      {
        data: Object.values(expenseCategories),
        backgroundColor: [
          '#F44336', // Red for expense
          '#EF5350', // Light red for expense
          '#FF9800', // Orange for another expense category
          '#FFB74D', // Light orange for additional expense categories
        ],
        hoverBackgroundColor: [
          '#EF5350',
          '#E57373',
          '#FFB74D',
          '#FFE0B2',
        ],
      },
    ],
  };

  // Pie chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%', // Adjust this value to create a ring effect
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Financial Summary</h2>
      <div className="flex flex-col space-y-6"> {/* Increased spacing here */}
        <div className="w-full h-64 mb-6"> {/* Added mb-6 for additional space */}
          <h3 className="text-lg font-semibold mb-2">Income Breakdown</h3>
          <Pie data={incomeData} options={options} />
        </div>
        <div className="w-full h-64">
          <h3 className="text-lg font-semibold mb-2">Expense Breakdown</h3>
          <Pie data={expenseData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;
