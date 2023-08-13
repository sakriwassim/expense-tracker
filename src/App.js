import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

function App() {

  const [expenses, setExpenses] = useState([
    { id: 'e1',title: "Groceries", amount: 50, date: new Date(Date.UTC(2019, 11, 30, 3, 0, 0)) },
    { id: 'e2',title: "Movie Tickets", amount: 20, date: new Date(Date.UTC(2020, 11, 1, 3, 0, 0)) },
    { id: 'e3',title: "Dinner Out", amount: 75, date: new Date(Date.UTC(2021, 11, 9, 3, 0, 0)) },
    { id: 'e4',title: "Gym Membership", amount: 30, date: new Date(Date.UTC(2020, 12, 10, 3, 0, 0)) },
    { id: 'e5',title: "Clothing", amount: 100, date: new Date(Date.UTC(2021, 11, 22, 3, 0, 0)) },
  ]);

  const addExpenseHandler = (expense) =>{

  const updatedExpenses = [...expenses, expense];
  setExpenses(updatedExpenses);

  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} ></NewExpense>
      <Expense items={expenses}/>
    </div>
  );
}

export default App;
