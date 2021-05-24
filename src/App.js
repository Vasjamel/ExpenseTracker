import { useState } from 'react'
import Card from './components/UI/Card'
import NewExpense from './components/NewExpense/NewExpense'
import ExpensesFilter from './components/Expenses/ExpensesFilter'
import ExpensesList from './components/Expenses/ExpensesList'
import ExpensesChart from './components/Expenses/ExpensesChart'

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExp) => {
      return [expense, ...prevExp]
    })
  }

  const [filteredExpenses, setFilteredExpenses] = useState(expenses)
  const filterHandler = (year) => {
    setFilteredExpenses(
      expenses.filter(
        (expense) => expense.date.getFullYear().toString() === year
      )
    )
  }

  return (
    <Card className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter onFilteredYear={filterHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  )
}

export default App
