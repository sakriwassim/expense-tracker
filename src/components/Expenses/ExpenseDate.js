import './ExpenseDate.css';

function ExpenseDate(props) {


 // const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
 const date = props.date;

 const month = date.toLocaleString("en-us", { month: "long" });
 const day = date.toLocaleString("en-us", { day: "2-digit" });
 const year = date.getFullYear();

 return (
  <div className="expense-date">
   <div className="expense-date__month">{month}</div>
   <div className="expense-date__year">{year}</div>
   <div className="expense-date__day">{day}</div>
   <div>year</div>
  </div>
 );
}

export default ExpenseDate;


