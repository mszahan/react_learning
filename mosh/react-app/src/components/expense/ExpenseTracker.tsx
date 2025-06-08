import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const ExpenseTracker = () => {
  const [expenseList, setExpenseList] = useState([
    { id: 1, description: "Book", amount: 10, category: "Education" },
    { id: 2, description: "Khata", amount: 20, category: "Education" },
    { id: 3, description: "Pen", amount: 15, category: "Education" },
    { id: 4, description: "Pencil", amount: 25, category: "Education" },
  ]);
  return (
    <div className="container m-3">
      <ExpenseForm />
      <ExpenseList
        expenseList={expenseList}
        onDelete={(id) =>
          setExpenseList(expenseList.filter((item) => item.id !== id))
        }
      />
    </div>
  );
};

export default ExpenseTracker;
