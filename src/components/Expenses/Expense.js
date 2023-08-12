import ExpenseItem from './ExpenseItem';
import './Expense.css';
import Card from '../UI/Card';
import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';

function Expense(props) {

 const [filteredYear, setFilteredYear] = useState('2020')

 let filterInfoText = '2019, 2020 & 2022';
let  targetYear = 2020;

 if (filteredYear === '2019') {
  targetYear = 2019; 
  filterInfoText = '2020, 2021 & 2022';
 } else if (filteredYear === '2020') {
  targetYear = 2020; 
  filterInfoText = '2019, 2021 & 2022';
 } else if (filteredYear === '2021') {
  targetYear = 2021; 
  filterInfoText = '2019, 2020 & 2022';
 } else {
  targetYear = 2022; 
  filterInfoText = '2019, 2020 & 2022';
 }

 const filteredExpenses = props.items.filter(expenseItem => {
  return expenseItem.date.getUTCFullYear() === targetYear;
});

 const filterChangeHandler = selectedYear => {
  setFilteredYear(selectedYear);
 }

 return (
  <Card className='expenses'>
   <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} ></ExpenseFilter>
   <p className='textinfo' >Data for year {filterInfoText} is hidden.</p>

   {filteredExpenses.map((expense, index) => (
    <ExpenseItem key={index} expenses={expense} />
   ))}

  </Card>
 );
}

export default Expense;
