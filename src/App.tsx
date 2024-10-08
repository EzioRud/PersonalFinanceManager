import React, { useState } from 'react'
import { PlusCircle, DollarSign, TrendingUp, TrendingDown } from 'lucide-react'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Summary from './components/Summary'

export interface Transaction {
  id: number
  description: string
  amount: number
  type: 'income' | 'expense'
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }])
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Personal Finance Manager</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <PlusCircle className="mr-2" /> Add Transaction
            </h2>
            <TransactionForm onAddTransaction={addTransaction} />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              Summary
            </h2>
            <Summary transactions={transactions} />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <TrendingUp className="mr-2" /> Transaction List
          </h2>
          <TransactionList transactions={transactions} />
        </div>
      </div>
    </div>
  )
}

export default App
