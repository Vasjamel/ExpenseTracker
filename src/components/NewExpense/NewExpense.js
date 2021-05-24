import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData)
  }

  const [showForm, setShowForm] = useState(false)
  const toggleForm = () => {
    setShowForm(!showForm)
  }

  if (!showForm) {
    return (
      <div className='new-expense'>
        <button onClick={toggleForm}>Add Expense</button>
      </div>
    )
  }

  return (
    <div className='new-expense'>
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        toggleForm={toggleForm}
      />
    </div>
  )
}

export default NewExpense
