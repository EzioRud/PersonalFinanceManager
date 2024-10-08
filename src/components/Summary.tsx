import React from 'react'
import { Transaction } from '../App'

interface SummaryProps {
  transactions: Transaction[]
}

const Summary: React.FC<SummaryProps> = ({ transactions }) => {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = totalIncome - totalExpenses

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Total Income</h3>
        <p className="text-2xl font-bold text-green-600">R{totalIncome.toFixed(2)}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Total Expenses</h3>
        <p className="text-2xl font-bold text-red-600">R{totalExpenses.toFixed(2)}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">Balance</h3>
        <p className={`text-2xl font-bold R{balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          R{balance.toFixed(2)}
        </p>
      </div>
    </div>
  )
}

export default Summary