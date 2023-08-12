import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

import { useState } from 'react';

function ExpenseItem(props) {

 // const [title, setTitle] = useState(props.expenses.title) ;

 // const clickHandler = () => {
 //  setTitle('updated!');
 // }

 return (
  <Card className="expense-item">
   <ExpenseDate date={props.expenses.date} />
   <div className="expense-item__description">
    <h2>{props.expenses.title}</h2>
   </div>
   <div className="expense-item__price">
    $ {props.expenses.amount}
   </div>
   {/* <button onClick={clickHandler}>Change Title</button> */}
  </Card >
 );
}

export default ExpenseItem;


