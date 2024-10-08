import React from 'react'
import { Transaction } from '../App'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface TransactionListProps {
  transactions: Transaction[]
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {transactions.length === 0 ? (
        <p className="text-gray-600">No transactions yet.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="py-4 flex items-center justify-between">
              <div className="flex items-center">
                {transaction.type === 'income' ? (
                  <TrendingUp className="text-green-500 mr-2" />
                ) : (
                  <TrendingDown className="text-red-500 mr-2" />
                )}
                <span className="text-gray-800">{transaction.description}</span>
              </div>
              <span
                className={`font-semibold R{
                  transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                R{transaction.amount.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TransactionList