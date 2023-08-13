import './Expense.css';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {

 let expensesContent = <h2 className='expenses-list__fallback'>No Expenses found </h2>
 if (props.items.length === 0) {
  return expensesContent
 }

 return (
  props.items.map((expense) => (
   <ExpenseItem key={expense.id} expenses={expense} />
  ))
 );
}

export default ExpenseList