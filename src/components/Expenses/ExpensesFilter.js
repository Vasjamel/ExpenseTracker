import React from 'react'
import Card from '../UI/Card'

import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
  const onFilterHandler = (event) => {
    const filteredData = event.target.value
    props.onFilteredYear(filteredData)
  }

  return (
    <Card className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={onFilterHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </Card>
  )
}

export default ExpensesFilter
