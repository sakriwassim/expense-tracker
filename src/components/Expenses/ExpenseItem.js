import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
 return (
  <Card className="expense-item">
   <ExpenseDate date={props.date} />
   <div className="expense-item__description">
    <h2>{props.expenses.title}</h2>
   </div>
   <div className="expense-item__price">
    $ {props.expenses.amount}
   </div>
  </Card >
 );
}

export default ExpenseItem;


