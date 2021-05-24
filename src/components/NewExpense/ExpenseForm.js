import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredDate: '',
  //     enteredAmount: '',
  //   })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value }
    // })
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    // setUserInput({ ...userInput, enteredDate: event.target.value })
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    // setUserInput({ ...userInput, enteredAmount: event.target.value })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: +enteredAmount,
    }
    props.onSaveExpenseData(enteredData)
    setEnteredTitle('')
    setEnteredDate('')
    setEnteredAmount('')
  }

  return (
    <form onSubmit={submitHandler} className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        <div>{enteredTitle}</div>
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input
          type='number'
          min='0.01'
          step='0.01'
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
        <div> {enteredAmount} </div>
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input
          value={enteredDate}
          type='date'
          min='2019-01-01'
          max='2022-12-31'
          onChange={dateChangeHandler}
        />
        <div> {enteredDate} </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add expense</button>
      </div>
      <div>
        <button type='reset' onClick={props.toggleForm}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default ExpenseForm
