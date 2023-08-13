import './Expense.css';
import Card from '../UI/Card';
import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
function Expense(props) {

  const [filteredYear, setFilteredYear] = useState('2020')

  let targetYear = 2020;

  if (filteredYear === '2019') {
    targetYear = 2019;
  } else if (filteredYear === '2020') {
    targetYear = 2020;
  } else if (filteredYear === '2021') {
    targetYear = 2021;
  } else {
    targetYear = 2022;
  }

  const filteredExpenses =
    props.items.filter(expenseItem => {
      return expenseItem.date.getUTCFullYear() === targetYear;
    });

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {/* <ExpenseChart expenses={filteredExpenses} /> */}
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expense;
