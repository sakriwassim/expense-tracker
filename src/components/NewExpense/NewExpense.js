import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {


  const savaExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData ={
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
  }  

 return (
  <div className="new-expense">
   <ExpenseForm onSaveExpenseData={savaExpenseDataHandler} />
  </div>);

};

export default NewExpense
