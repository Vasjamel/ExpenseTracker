import { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props) {
  let pes = 'AAA'
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    console.log('Clicked')
    setTitle(pes)
  }
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2> {title} </h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </li>
  )
}

export default ExpenseItem
