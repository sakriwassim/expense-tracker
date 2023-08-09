import ExpenseItem from './ExpenseItem';
import './Expense.css';
import Card from '../UI/Card';
function Expense() {

 const expenses = [
  { title: "Groceries", amount: 50, date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)) },
  { title: "Movie Tickets", amount: 20, date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)) },
  { title: "Dinner Out", amount: 75, date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)) },
  { title: "Gym Membership", amount: 30, date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)) },
  { title: "Clothing", amount: 100, date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)) },
 ];

 return (
  <Card className='expenses'>
   <ExpenseItem
    expenses={expenses[0]}
   />
   <ExpenseItem
    expenses={expenses[1]}
   />
   <ExpenseItem
    expenses={expenses[2]}
   />
   <ExpenseItem
    expenses={expenses[3]}
   />
  </Card>
 );
}

export default Expense;
